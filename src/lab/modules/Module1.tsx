import { ModuleHeader } from "@/lab/components/ModuleHeader";
import { ContinueButton } from "@/lab/components/ContinueButton";
import { LabCard, LabLabel } from "@/lab/components/Card";
import { TimelineSlider } from "@/lab/components/TimelineSlider";
import { MadLibSentence } from "@/lab/components/MadLibSentence";
import { ChoiceReveal } from "@/lab/components/ChoiceReveal";
import { SelectChips } from "@/lab/components/SelectChips";
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
  cameraLenses,
  thinkingTraps,
  reflectionQuestions,
  transferPrompts,
  transferFramings,
} from "@/lab/data/module1";

const TOTAL = 9;

export function Module1({ lab }: { lab: LabProgressApi }) {
  const { section, setSection } = useModuleSection(lab, "m1");

  return (
    <div className="space-y-4 pb-24">
      <ModuleHeader eyebrow="Module 1 · See the Journey" question="What exactly are we trying to understand?" section={section} totalSections={TOTAL} trace="T" />

      {section === 1 && <SceneBeginning lab={lab} />}
      {section === 2 && <SceneParticipant lab={lab} />}
      {section === 3 && <SceneThreeTeams lab={lab} />}
      {section === 4 && <SceneFraming lab={lab} />}
      {section === 5 && <SceneCamera lab={lab} />}
      {section === 6 && <SceneTraps />}
      {section === 7 && <SceneReflection lab={lab} />}
      {section === 8 && <SceneTransfer lab={lab} />}
      {section === 9 && <SceneRecap lab={lab} />}

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
  return (
    <LabCard>
      <p className="text-sm text-[var(--color-ink)]">{meeraIntro}</p>
      <p className="mt-3 rounded-xl bg-black/[0.03] p-3 text-sm font-bold text-[var(--color-ink)]">Has Meera's airport journey started?</p>
      <div className="mt-3">
        <LabLabel>Drag the marker to where you think the journey begins</LabLabel>
        <TimelineSlider value={value} onChange={(v) => lab.setTimeline("m1-begin", v)} ticks={beginningTicks} ariaLabel="Journey beginning" />
      </div>
      {!revealed ? (
        <button type="button" onClick={() => lab.setFlag("m1-begin-revealed")} className="mt-3 w-full rounded-xl border-2 border-dashed border-[var(--color-accent)] py-2.5 text-xs font-bold text-[var(--color-accent)] hover:bg-[var(--color-accent-soft)]">
          See why this is a real decision
        </button>
      ) : (
        <p className="mt-3 animate-fade-in-up rounded-xl bg-[var(--color-accent-2-soft)] p-3 text-sm text-[var(--color-ink)]">{scopeReveal}</p>
      )}
    </LabCard>
  );
}

function SceneParticipant({ lab }: { lab: LabProgressApi }) {
  const highlighted = lab.state.multi["m1-outside-app"] ?? [];
  return (
    <LabCard>
      <h2 className="text-sm font-bold text-[var(--color-ink)]">The app is only one participant</h2>
      <p className="mt-1 text-xs text-[var(--color-slate)]">Tap everything that happens outside the ride app.</p>
      <ol className="mt-3 space-y-1.5">
        {sequenceSteps.map((step, i) => {
          const id = String(i);
          const isOn = highlighted.includes(id);
          return (
            <li key={id}>
              <button
                type="button"
                onClick={() => lab.toggleMulti("m1-outside-app", id)}
                className={`w-full rounded-lg border px-3 py-2 text-left text-sm transition ${
                  isOn ? "border-teal-600/40 bg-teal-50 text-teal-900" : "border-[var(--color-border)] text-[var(--color-ink)]"
                }`}
              >
                {i + 1}. {step.text}
              </button>
            </li>
          );
        })}
      </ol>
      {highlighted.length > 0 && <p className="mt-3 animate-fade-in-up rounded-xl bg-[var(--color-accent-2-soft)] p-3 text-sm text-[var(--color-ink)]">{sequenceLens}</p>}
    </LabCard>
  );
}

function SceneThreeTeams({ lab }: { lab: LabProgressApi }) {
  return (
    <LabCard>
      <h2 className="text-sm font-bold text-[var(--color-ink)]">Three teams, three legitimate scopes</h2>
      <p className="mt-1 text-xs text-[var(--color-slate)]">Give the same timeline a different start and end boundary for each team.</p>
      <div className="mt-3 space-y-5">
        {teams.map((team) => (
          <div key={team.id} className="rounded-xl border border-[var(--color-border)] p-3">
            <p className="text-sm font-bold text-[var(--color-ink)]">{team.name}</p>
            <p className="text-xs text-[var(--color-slate)]">{team.charter}</p>
            <div className="mt-2 grid grid-cols-2 gap-3">
              <div>
                <LabLabel>Start</LabLabel>
                <TimelineSlider value={lab.state.timeline[`m1-${team.id}-start`] ?? 20} onChange={(v) => lab.setTimeline(`m1-${team.id}-start`, v)} ticks={beginningTicks} ariaLabel={`${team.name} start`} />
              </div>
              <div>
                <LabLabel>End</LabLabel>
                <TimelineSlider
                  value={lab.state.timeline[`m1-${team.id}-end`] ?? 80}
                  onChange={(v) => lab.setTimeline(`m1-${team.id}-end`, v)}
                  ticks={[
                    { position: 20, label: "Ride booked" },
                    { position: 50, label: "In the car" },
                    { position: 80, label: "At terminal" },
                  ]}
                  ariaLabel={`${team.name} end`}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
      <p className="mt-3 text-xs italic text-[var(--color-slate)]">One lived experience can contain several useful journey scopes — there's no single correct pair of boundaries here.</p>
    </LabCard>
  );
}

function SceneFraming({ lab }: { lab: LabProgressApi }) {
  const values: Record<string, string> = {};
  for (const blank of madLibBlanks) {
    const v = lab.state.selections[`m1-framing-${blank.key}`];
    if (v) values[blank.key] = v;
  }
  return (
    <LabCard>
      <h2 className="text-sm font-bold text-[var(--color-ink)]">The five framing decisions</h2>
      <ul className="mt-2 space-y-1.5">
        {framingDecisions.map((d) => (
          <li key={d.key} className="text-sm text-[var(--color-ink)]">
            <span className="font-bold">{d.key}</span> — {d.question}
          </li>
        ))}
      </ul>

      <div className="mt-4 rounded-xl bg-black/[0.03] p-3">
        <LabLabel>Build the framing sentence — tap each blank and choose</LabLabel>
        <MadLibSentence
          template="We are examining how {actor} tries to {goal} when {scenario}, from {begin} until {end}, so that we can understand {objective}."
          blanks={madLibBlanks}
          values={values}
          onChoose={(key, id) => lab.setSelection(`m1-framing-${key}`, id)}
        />
      </div>
    </LabCard>
  );
}

function SceneCamera({ lab }: { lab: LabProgressApi }) {
  const zoom = lab.state.timeline["m1-zoom"] ?? 0;
  const index = Math.min(cameraLenses.length - 1, Math.round((zoom / 100) * (cameraLenses.length - 1)));
  const lens = cameraLenses[index];
  return (
    <LabCard>
      <h2 className="text-sm font-bold text-[var(--color-ink)]">Similar tools, different questions</h2>
      <p className="mt-1 text-xs text-[var(--color-slate)]">Zoom the camera from “life” to “organization” over the same airport case.</p>
      <input type="range" min={0} max={100} value={zoom} onChange={(e) => lab.setTimeline("m1-zoom", Number(e.target.value))} className="mt-3 w-full accent-[var(--color-accent)]" aria-label="Camera zoom" />
      <div className="mt-1 flex justify-between text-[10px] text-[var(--color-slate)]">
        {cameraLenses.map((l) => (
          <span key={l.id}>{l.name}</span>
        ))}
      </div>
      <div className="mt-4 rounded-xl border border-[var(--color-accent)]/25 bg-[var(--color-accent-soft)] p-3.5">
        <p className="text-sm font-bold text-[var(--color-ink)]">{lens.name}</p>
        <p className="mt-1 text-xs text-[var(--color-ink)]">
          <span className="font-bold">Question: </span>
          {lens.question}
        </p>
        <p className="mt-1 text-xs text-[var(--color-ink)]">
          <span className="font-bold">Contains: </span>
          {lens.contains}
        </p>
        <p className="mt-1 text-xs text-[var(--color-ink)]">
          <span className="font-bold">Example: </span>
          {lens.example}
        </p>
      </div>
    </LabCard>
  );
}

function SceneTraps() {
  return (
    <LabCard>
      <h2 className="text-sm font-bold text-[var(--color-ink)]">Thinking traps</h2>
      <div className="mt-2 space-y-2">
        {thinkingTraps.map((t) => (
          <div key={t.title} className="rounded-xl bg-[var(--color-danger-soft)] p-3">
            <p className="text-sm font-bold text-[var(--color-ink)]">{t.title}</p>
            <p className="mt-0.5 text-xs text-[var(--color-ink)]">{t.detail}</p>
          </div>
        ))}
      </div>
    </LabCard>
  );
}

function SceneReflection({ lab }: { lab: LabProgressApi }) {
  return (
    <LabCard>
      <h2 className="text-sm font-bold text-[var(--color-ink)]">Reflection canvas</h2>
      <p className="mt-1 text-xs text-[var(--color-slate)]">For each question, pick the option that best fits the evidence in the story.</p>
      <div className="mt-3 space-y-5">
        {reflectionQuestions.map((rq, i) => (
          <div key={rq.question}>
            <p className="text-sm font-bold text-[var(--color-ink)]">{rq.question}</p>
            <div className="mt-2">
              <ChoiceReveal options={rq.options} selected={lab.state.selections[`m1-reflect-${i}`] ?? null} onSelect={(id) => lab.setSelection(`m1-reflect-${i}`, id)} />
            </div>
          </div>
        ))}
      </div>
    </LabCard>
  );
}

function SceneTransfer({ lab }: { lab: LabProgressApi }) {
  const chosen = lab.state.selections["m1-transfer"] ?? "";
  const framing = chosen ? transferFramings[chosen] : null;
  const pick = lab.state.selections["m1-transfer-pick"] ?? null;
  return (
    <LabCard>
      <h2 className="text-sm font-bold text-[var(--color-ink)]">Transfer studio</h2>
      <p className="mt-1 text-xs text-[var(--color-slate)]">Choose a situation, then pick the stronger framing sentence for it.</p>
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
    </LabCard>
  );
}

function SceneRecap({ lab }: { lab: LabProgressApi }) {
  const sentenceParts = madLibBlanks.map((b) => {
    const chosenId = lab.state.selections[`m1-framing-${b.key}`];
    return b.options.find((o) => o.id === chosenId)?.text ?? `…`;
  });
  const beginTick = beginningTicks.find((t) => Math.abs(t.position - (lab.state.timeline["m1-begin"] ?? 50)) < 15)?.label ?? "somewhere in between";

  return (
    <div className="space-y-4">
      <LabCard>
        <p className="text-xs font-bold uppercase tracking-wide text-[var(--color-accent)]">Your Journey Frame</p>
        <p className="mt-2 text-sm text-[var(--color-ink)]">
          You placed Meera's journey beginning around <span className="font-bold">{beginTick}</span>.
        </p>
        <p className="mt-2 rounded-lg bg-black/[0.03] p-3 text-sm text-[var(--color-ink)]">
          We are examining how {sentenceParts[0]} tries to {sentenceParts[1]} when {sentenceParts[2]}, from {sentenceParts[3]} until {sentenceParts[4]}, so that we can understand {sentenceParts[5]}.
        </p>
        <p className="mt-2 text-xs text-[var(--color-slate)]">This sentence, plus the scopes you gave the three teams, is your Journey Frame for this case — built entirely from the choices you made.</p>
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
