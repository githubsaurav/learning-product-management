import { Clock, Users, Building2, PenLine, Briefcase, Camera, AlertTriangle, Brain, Shuffle, FileCheck2 } from "lucide-react";
import { ModuleHeader } from "@/lab/components/ModuleHeader";
import { ContinueButton } from "@/lab/components/ContinueButton";
import { LabCard, LabLabel } from "@/lab/components/Card";
import { TimelineSlider } from "@/lab/components/TimelineSlider";
import { ScopeRangePreview } from "@/lab/components/ScopeRangePreview";
import { MadLibSentence } from "@/lab/components/MadLibSentence";
import { ChoiceReveal } from "@/lab/components/ChoiceReveal";
import { SelectChips } from "@/lab/components/SelectChips";
import { FrameworkBadge } from "@/lab/components/FrameworkBadge";
import { SectionObjective, SectionTakeaway } from "@/lab/components/SectionCallouts";
import { ReadingList } from "@/lab/components/ReadingList";
import { useModuleSection } from "@/lab/state/useModuleSection";
import type { LabProgressApi } from "@/lab/state/useLabProgress";
import { module1Reading } from "@/lab/data/readingRoom";
import {
  meeraIntro,
  beginningTicks,
  scopeReveal,
  sequenceSteps,
  sequenceLens,
  teams,
  framingDecisions,
  madLibBlanks,
  jtbdQuote,
  jtbdExample,
  jtbdChoice,
  cameraLenses,
  thinkingTraps,
  reflectionQuestions,
  transferPrompts,
  transferFramings,
  sectionCopy,
} from "@/lab/data/module1";

const TOTAL = 10;

function SceneHeading({ icon: Icon, children }: { icon: typeof Clock; children: string }) {
  return (
    <div className="flex items-center gap-2">
      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[var(--color-accent-soft)] text-[var(--color-accent)]">
        <Icon size={16} />
      </span>
      <h2 className="text-base font-bold text-[var(--color-ink)]">{children}</h2>
    </div>
  );
}

export function Module1({ lab }: { lab: LabProgressApi }) {
  const { section, setSection } = useModuleSection(lab, "m1");

  return (
    <div className="space-y-4 pb-24">
      <ModuleHeader eyebrow="Module 1 · See the Journey" question="What exactly are we trying to understand?" section={section} totalSections={TOTAL} />

      {section === 1 && <SceneBeginning lab={lab} />}
      {section === 2 && <SceneParticipant lab={lab} />}
      {section === 3 && <SceneThreeTeams lab={lab} />}
      {section === 4 && <SceneFraming lab={lab} />}
      {section === 5 && <SceneJTBD lab={lab} />}
      {section === 6 && <SceneCamera lab={lab} />}
      {section === 7 && <SceneTraps />}
      {section === 8 && <SceneReflection lab={lab} />}
      {section === 9 && <SceneTransfer lab={lab} />}
      {section === 10 && <SceneRecap lab={lab} />}

      <div className="flex gap-2">
        {section > 1 && (
          <button type="button" onClick={() => setSection(section - 1)} className="flex-1 rounded-2xl border border-[var(--color-border)] py-3 text-sm font-bold text-[var(--color-ink)]">
            Back
          </button>
        )}
        {section < TOTAL && <ContinueButton onClick={() => setSection(section + 1)} />}
      </div>
    </div>
  );
}

function SceneBeginning({ lab }: { lab: LabProgressApi }) {
  const value = lab.state.timeline["m1-begin"] ?? 50;
  const revealed = !!lab.state.flags["m1-begin-revealed"];
  const copy = sectionCopy[0];
  return (
    <LabCard>
      <SectionObjective>{copy.objective}</SectionObjective>
      <SceneHeading icon={Clock}>Where does the journey begin?</SceneHeading>
      <p className="mt-2 text-base leading-relaxed text-[var(--color-ink)]">{meeraIntro}</p>
      <p className="mt-3 rounded-xl bg-black/[0.03] p-3 text-base font-bold text-[var(--color-ink)]">Has Meera's airport journey started?</p>
      <div className="mt-3">
        <LabLabel>Drag the marker to where you think the journey begins</LabLabel>
        <TimelineSlider value={value} onChange={(v) => lab.setTimeline("m1-begin", v)} ticks={beginningTicks} ariaLabel="Journey beginning" />
      </div>
      {!revealed ? (
        <button type="button" onClick={() => lab.setFlag("m1-begin-revealed")} className="mt-3 w-full rounded-xl border-2 border-dashed border-[var(--color-accent)] py-2.5 text-sm font-bold text-[var(--color-accent)] hover:bg-[var(--color-accent-soft)]">
          See why this is a real decision
        </button>
      ) : (
        <p className="mt-3 animate-fade-in-up rounded-xl bg-[var(--color-accent-2-soft)] p-3 text-base text-[var(--color-ink)]">{scopeReveal}</p>
      )}
      <SectionTakeaway learned={copy.learned} trap={copy.trap} />
    </LabCard>
  );
}

function SceneParticipant({ lab }: { lab: LabProgressApi }) {
  const highlighted = lab.state.multi["m1-outside-app"] ?? [];
  const checked = !!lab.state.flags["m1-outside-app-checked"];
  const copy = sectionCopy[1];
  return (
    <LabCard>
      <SectionObjective>{copy.objective}</SectionObjective>
      <SceneHeading icon={Users}>The app is only one participant</SceneHeading>
      <p className="mt-1 text-sm text-[var(--color-slate)]">Tap everything you think happens outside the ride app, then check your picks.</p>
      <ol className="mt-3 space-y-1.5">
        {sequenceSteps.map((step, i) => {
          const id = String(i);
          const isOn = highlighted.includes(id);
          const isOutside = !step.insideApp;
          let stateClass = "border-[var(--color-border)] text-[var(--color-ink)]";
          let tag: string | null = null;
          if (checked) {
            if (isOn && isOutside) {
              stateClass = "border-[var(--color-success)]/40 bg-[var(--color-success-soft)]";
              tag = "✓ Outside the app";
            } else if (isOn && !isOutside) {
              stateClass = "border-[var(--color-danger)]/40 bg-[var(--color-danger-soft)]";
              tag = "✗ Actually inside the app";
            } else if (!isOn && isOutside) {
              stateClass = "border-[var(--color-danger)]/30 bg-[var(--color-danger-soft)]/60";
              tag = "Missed — this is outside the app";
            } else {
              stateClass = "border-[var(--color-border)] opacity-60";
            }
          } else if (isOn) {
            stateClass = "border-[var(--color-accent)]/50 bg-[var(--color-accent-soft)]";
          }
          return (
            <li key={id}>
              <button
                type="button"
                onClick={() => !checked && lab.toggleMulti("m1-outside-app", id)}
                disabled={checked}
                className={`flex w-full items-center justify-between gap-2 rounded-lg border px-3 py-2.5 text-left text-sm transition ${stateClass}`}
              >
                <span>
                  {i + 1}. {step.text}
                </span>
                {tag && <span className="shrink-0 text-xs font-bold text-[var(--color-ink)]">{tag}</span>}
              </button>
            </li>
          );
        })}
      </ol>
      {!checked ? (
        <button type="button" onClick={() => lab.setFlag("m1-outside-app-checked")} className="mt-3 w-full rounded-xl bg-[var(--color-ink)] py-2.5 text-sm font-bold text-white">
          Check my picks
        </button>
      ) : (
        <p className="mt-3 animate-fade-in-up rounded-xl bg-[var(--color-accent-2-soft)] p-3 text-base text-[var(--color-ink)]">{sequenceLens}</p>
      )}
      <SectionTakeaway learned={copy.learned} trap={copy.trap} />
    </LabCard>
  );
}

function SceneThreeTeams({ lab }: { lab: LabProgressApi }) {
  const copy = sectionCopy[2];
  return (
    <LabCard>
      <SectionObjective>{copy.objective}</SectionObjective>
      <SceneHeading icon={Building2}>Three teams, three legitimate scopes</SceneHeading>
      <p className="mt-1 text-sm text-[var(--color-slate)]">Give the same timeline a different start and end boundary for each team, and watch the shaded scope bar change.</p>
      <div className="mt-3 space-y-5">
        {teams.map((team) => {
          const start = lab.state.timeline[`m1-${team.id}-start`] ?? 20;
          const end = lab.state.timeline[`m1-${team.id}-end`] ?? 80;
          return (
            <div key={team.id} className="rounded-xl border border-[var(--color-border)] p-3.5">
              <p className="text-sm font-bold text-[var(--color-ink)]">
                <span className="mr-1">{team.icon}</span>
                {team.name}
              </p>
              <p className="text-sm text-[var(--color-slate)]">{team.charter}</p>
              <div className="mt-2 space-y-3">
                <div>
                  <LabLabel>Start</LabLabel>
                  <TimelineSlider value={start} onChange={(v) => lab.setTimeline(`m1-${team.id}-start`, v)} ticks={beginningTicks} ariaLabel={`${team.name} start`} />
                </div>
                <div>
                  <LabLabel>End</LabLabel>
                  <TimelineSlider value={end} onChange={(v) => lab.setTimeline(`m1-${team.id}-end`, v)} ticks={beginningTicks} ariaLabel={`${team.name} end`} />
                </div>
              </div>
              <LabLabel>{team.name}'s scope</LabLabel>
              <ScopeRangePreview start={start} end={end} ticks={beginningTicks} />
            </div>
          );
        })}
      </div>
      <p className="mt-3 text-sm italic text-[var(--color-slate)]">One lived experience can contain several useful journey scopes — there's no single correct pair of boundaries here.</p>
      <SectionTakeaway learned={copy.learned} trap={copy.trap} />
    </LabCard>
  );
}

function SceneFraming({ lab }: { lab: LabProgressApi }) {
  const values: Record<string, string> = {};
  for (const blank of madLibBlanks) {
    const v = lab.state.selections[`m1-framing-${blank.key}`];
    if (v) values[blank.key] = v;
  }
  const copy = sectionCopy[3];
  return (
    <LabCard>
      <SectionObjective>{copy.objective}</SectionObjective>
      <SceneHeading icon={PenLine}>The five framing decisions</SceneHeading>
      <ul className="mt-2 space-y-1.5">
        {framingDecisions.map((d) => (
          <li key={d.key} className="text-base text-[var(--color-ink)]">
            <span className="font-bold">{d.key}</span> — {d.question}
          </li>
        ))}
      </ul>

      <div className="mt-4 rounded-xl bg-black/[0.03] p-3.5">
        <LabLabel>Build the framing sentence — tap each blank and choose</LabLabel>
        <MadLibSentence
          template="We are examining how {actor} tries to {goal} when {scenario}, from {begin} until {end}, so that we can understand {objective}."
          blanks={madLibBlanks}
          values={values}
          onChoose={(key, id) => lab.setSelection(`m1-framing-${key}`, id)}
        />
      </div>
      <SectionTakeaway learned={copy.learned} trap={copy.trap} />
    </LabCard>
  );
}

function SceneCamera({ lab }: { lab: LabProgressApi }) {
  const zoom = lab.state.timeline["m1-zoom"] ?? 0;
  const index = Math.min(cameraLenses.length - 1, Math.round((zoom / 100) * (cameraLenses.length - 1)));
  const lens = cameraLenses[index];
  const copy = sectionCopy[5];
  return (
    <LabCard>
      <SectionObjective>{copy.objective}</SectionObjective>
      <SceneHeading icon={Camera}>Similar tools, different questions</SceneHeading>
      <p className="mt-1 text-sm text-[var(--color-slate)]">Zoom the camera from “life” to “organization” over the same airport case.</p>
      <input type="range" min={0} max={100} value={zoom} onChange={(e) => lab.setTimeline("m1-zoom", Number(e.target.value))} className="mt-3 h-2 w-full accent-[var(--color-accent)]" aria-label="Camera zoom" />
      <div className="mt-1 flex justify-between text-xs text-[var(--color-slate)]">
        {cameraLenses.map((l) => (
          <span key={l.id} className={l.id === lens.id ? "font-bold text-[var(--color-accent)]" : ""}>
            {l.icon} {l.name}
          </span>
        ))}
      </div>
      <div className="mt-4 rounded-xl border border-[var(--color-accent)]/25 bg-[var(--color-accent-soft)] p-3.5">
        <p className="text-base font-bold text-[var(--color-ink)]">
          {lens.icon} {lens.name}
        </p>
        <p className="mt-1 text-sm text-[var(--color-ink)]">
          <span className="font-bold">Definition: </span>
          {lens.question}
        </p>
        <p className="mt-1 text-sm text-[var(--color-ink)]">
          <span className="font-bold">Contains: </span>
          {lens.contains}
        </p>
        <p className="mt-1 text-sm text-[var(--color-ink)]">
          <span className="font-bold">Example: </span>
          {lens.example}
        </p>
        {lens.source && <p className="mt-1.5 text-xs italic text-[var(--color-slate)]">Source: {lens.source}</p>}
      </div>
      <SectionTakeaway learned={copy.learned} trap={copy.trap} />
    </LabCard>
  );
}

function SceneJTBD({ lab }: { lab: LabProgressApi }) {
  const pick = lab.state.selections["m1-jtbd"] ?? null;
  const copy = sectionCopy[4];
  return (
    <LabCard>
      <SectionObjective>{copy.objective}</SectionObjective>
      <FrameworkBadge name="Jobs to Be Done (JTBD)" source="Clayton Christensen, Harvard Business School">
        <p className="italic">{jtbdQuote}</p>
        <p>{jtbdExample}</p>
      </FrameworkBadge>
      <div className="mt-4">
        <SceneHeading icon={Briefcase}>What is Meera really hiring the app to do?</SceneHeading>
      </div>
      <div className="mt-2">
        <ChoiceReveal
          options={[
            { id: "weak", text: jtbdChoice.weak, note: jtbdChoice.note },
            { id: "strong", text: jtbdChoice.strong, note: jtbdChoice.note, strongest: true },
          ]}
          selected={pick}
          onSelect={(id) => lab.setSelection("m1-jtbd", id)}
        />
      </div>
      <SectionTakeaway learned={copy.learned} trap={copy.trap} />
    </LabCard>
  );
}

function SceneTraps() {
  const copy = sectionCopy[6];
  return (
    <LabCard>
      <SectionObjective>{copy.objective}</SectionObjective>
      <SceneHeading icon={AlertTriangle}>Thinking traps</SceneHeading>
      <div className="mt-2 space-y-2">
        {thinkingTraps.map((t) => (
          <div key={t.title} className="rounded-xl bg-[var(--color-danger-soft)] p-3.5">
            <p className="text-base font-bold text-[var(--color-ink)]">{t.title}</p>
            <p className="mt-0.5 text-sm text-[var(--color-ink)]">{t.detail}</p>
          </div>
        ))}
      </div>
      <SectionTakeaway learned={copy.learned} trap={copy.trap} />
    </LabCard>
  );
}

function SceneReflection({ lab }: { lab: LabProgressApi }) {
  const copy = sectionCopy[7];
  return (
    <LabCard>
      <SectionObjective>{copy.objective}</SectionObjective>
      <SceneHeading icon={Brain}>Reflection canvas</SceneHeading>
      <p className="mt-1 text-sm text-[var(--color-slate)]">For each question, pick the option that best fits the evidence in the story.</p>
      <div className="mt-3 space-y-5">
        {reflectionQuestions.map((rq, i) => (
          <div key={rq.question}>
            <p className="text-base font-bold text-[var(--color-ink)]">{rq.question}</p>
            <div className="mt-2">
              <ChoiceReveal options={rq.options} selected={lab.state.selections[`m1-reflect-${i}`] ?? null} onSelect={(id) => lab.setSelection(`m1-reflect-${i}`, id)} />
            </div>
          </div>
        ))}
      </div>
      <SectionTakeaway learned={copy.learned} trap={copy.trap} />
    </LabCard>
  );
}

function SceneTransfer({ lab }: { lab: LabProgressApi }) {
  const chosen = lab.state.selections["m1-transfer"] ?? "";
  const framing = chosen ? transferFramings[chosen] : null;
  const pick = lab.state.selections["m1-transfer-pick"] ?? null;
  const copy = sectionCopy[8];
  return (
    <LabCard>
      <SectionObjective>{copy.objective}</SectionObjective>
      <SceneHeading icon={Shuffle}>Transfer studio</SceneHeading>
      <p className="mt-1 text-sm text-[var(--color-slate)]">Choose a situation, then pick the stronger framing sentence for it.</p>
      <SelectChips options={transferPrompts} selected={chosen ? [chosen] : []} onToggle={(p) => lab.setSelection("m1-transfer", p)} />
      {framing && (
        <div className="mt-3">
          <ChoiceReveal
            options={[
              { id: "weak", text: framing.weak, note: framing.note },
              { id: "strong", text: framing.strong, note: framing.note, strongest: true },
            ]}
            selected={pick}
            onSelect={(id) => lab.setSelection("m1-transfer-pick", id)}
          />
        </div>
      )}
      <SectionTakeaway learned={copy.learned} trap={copy.trap} />
    </LabCard>
  );
}

function SceneRecap({ lab }: { lab: LabProgressApi }) {
  const sentenceParts = madLibBlanks.map((b) => {
    const chosenId = lab.state.selections[`m1-framing-${b.key}`];
    return b.options.find((o) => o.id === chosenId)?.text ?? `…`;
  });
  const beginTick = beginningTicks.find((t) => Math.abs(t.position - (lab.state.timeline["m1-begin"] ?? 50)) < 15)?.label ?? "somewhere in between";
  const copy = sectionCopy[9];

  return (
    <div className="space-y-4">
      <LabCard>
        <SectionObjective>{copy.objective}</SectionObjective>
        <div className="flex items-center gap-2">
          <FileCheck2 size={18} className="text-[var(--color-accent)]" />
          <p className="text-xs font-bold uppercase tracking-wide text-[var(--color-accent)]">Your Journey Frame</p>
        </div>
        <p className="mt-2 text-base text-[var(--color-ink)]">
          You placed Meera's journey beginning around <span className="font-bold">{beginTick}</span>.
        </p>
        <p className="mt-2 rounded-lg bg-black/[0.03] p-3 text-base text-[var(--color-ink)]">
          We are examining how {sentenceParts[0]} tries to {sentenceParts[1]} when {sentenceParts[2]}, from {sentenceParts[3]} until {sentenceParts[4]}, so that we can understand {sentenceParts[5]}.
        </p>
        <p className="mt-2 text-sm text-[var(--color-slate)]">This sentence, plus the scopes you gave the three teams, is your Journey Frame for this case — built entirely from the choices you made.</p>
        <SectionTakeaway learned={copy.learned} />
      </LabCard>
      <LabCard>
        <p className="text-xs font-bold uppercase tracking-wide text-[var(--color-slate)]">Common mistakes to watch for, recapped</p>
        <div className="mt-2 space-y-2">
          {thinkingTraps.map((t) => (
            <p key={t.title} className="text-sm text-[var(--color-ink)]">
              <span className="font-bold">{t.title.replace(/^Trap \d+ — /, "")}: </span>
              {t.detail}
            </p>
          ))}
        </div>
      </LabCard>
      <LabCard>
        <p className="text-xs font-bold uppercase tracking-wide text-[var(--color-slate)]">Recommended reading</p>
        <div className="mt-2">
          <ReadingList links={module1Reading} />
        </div>
      </LabCard>
    </div>
  );
}
