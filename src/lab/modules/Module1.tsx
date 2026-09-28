import { useMemo } from "react";
import { ModuleHeader } from "@/lab/components/ModuleHeader";
import { ContinueButton } from "@/lab/components/ContinueButton";
import { LabCard, LabLabel } from "@/lab/components/Card";
import { TimelineSlider } from "@/lab/components/TimelineSlider";
import { NoteComposer } from "@/lab/components/NoteComposer";
import { ArtifactCard } from "@/lab/components/ArtifactCard";
import { ReadingList } from "@/lab/components/ReadingList";
import { useModuleSection } from "@/lab/state/useModuleSection";
import type { LabProgressApi } from "@/lab/state/useLabProgress";
import { journeyFrameCard } from "@/lab/data/artifacts";
import { module1Reading } from "@/lab/data/readingRoom";
import {
  meeraIntro,
  beginningTicks,
  scopeReveal,
  sequenceSteps,
  sequenceLens,
  teams,
  framingDecisions,
  framingExample,
  framingEditEffects,
  cameraLenses,
  thinkingTraps,
  reflectionQuestions,
  transferPrompts,
} from "@/lab/data/module1";

const TOTAL = 9;
const CASE_LABEL = "Module 1 · Meera's airport ride";

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
      {section === 9 && <SceneArtifact lab={lab} />}

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
  return (
    <LabCard>
      <p className="text-sm text-[var(--color-ink)]">{meeraIntro}</p>
      <p className="mt-3 rounded-xl bg-black/[0.03] p-3 text-sm font-bold text-[var(--color-ink)]">Has Meera's airport journey started?</p>
      <div className="mt-3">
        <LabLabel>Place the marker where you think the journey begins</LabLabel>
        <TimelineSlider value={value} onChange={(v) => lab.setTimeline("m1-begin", v)} ticks={beginningTicks} ariaLabel="Journey beginning" />
      </div>
      <NoteComposer prompt="Why there?" withLabel={false} onSave={(text) => lab.addNote("m1", CASE_LABEL, "note", `Beginning placed at ~${value}%: ${text}`)} />
      {lab.state.notebook.some((n) => n.moduleId === "m1" && n.text.includes("Beginning placed")) && (
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
  const text = lab.state.freeText["m1-framing"] ?? framingExample;
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
        <LabLabel>Edit the framing sentence — challenge words that feel too broad</LabLabel>
        <textarea
          value={text}
          onChange={(e) => lab.setFreeText("m1-framing", e.target.value)}
          rows={4}
          className="w-full resize-none rounded-lg border border-[var(--color-border)] bg-[var(--color-surface)] p-2.5 text-sm text-[var(--color-ink)] outline-none focus-visible:border-[var(--color-accent)]"
        />
      </div>

      <div className="mt-3">
        <LabLabel>What changes when you edit each part</LabLabel>
        <ul className="space-y-1">
          {framingEditEffects.map((e) => (
            <li key={e} className="text-xs text-[var(--color-slate)]">
              • {e}
            </li>
          ))}
        </ul>
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
      <p className="mt-1 text-xs text-[var(--color-slate)]">Write freely. Then apply an evidence label — which of your statements describe evidence, and which describe interpretation?</p>
      <div className="mt-3 space-y-3">
        {reflectionQuestions.map((q) => (
          <NoteComposer key={q} prompt={q} onSave={(text, label) => lab.addNote("m1", CASE_LABEL, "note", text, label)} />
        ))}
      </div>
    </LabCard>
  );
}

function SceneTransfer({ lab }: { lab: LabProgressApi }) {
  const chosen = lab.state.selections["m1-transfer"] ?? transferPrompts[0];
  return (
    <LabCard>
      <h2 className="text-sm font-bold text-[var(--color-ink)]">Transfer studio</h2>
      <p className="mt-1 text-xs text-[var(--color-slate)]">Choose one situation, then write only a framing sentence — not a map yet.</p>
      <div className="mt-2 flex flex-wrap gap-1.5">
        {transferPrompts.map((p) => (
          <button
            key={p}
            type="button"
            onClick={() => lab.setSelection("m1-transfer", p)}
            className={`rounded-full border px-3 py-1.5 text-xs font-medium transition ${
              chosen === p ? "border-[var(--color-accent)] bg-[var(--color-accent-soft)] text-[var(--color-ink)]" : "border-[var(--color-border)] text-[var(--color-ink)]"
            }`}
          >
            {p}
          </button>
        ))}
      </div>
      <div className="mt-3">
        <NoteComposer
          prompt={`We are examining how [actor] tries to [goal] when [scenario], from [beginning] until [ending], so that we can understand [learning objective].`}
          withLabel={false}
          onSave={(text) => lab.addNote("m1", `Transfer · ${chosen}`, "note", text)}
        />
      </div>
    </LabCard>
  );
}

function SceneArtifact({ lab }: { lab: LabProgressApi }) {
  const values = lab.state.artifacts[journeyFrameCard.id] ?? {};
  const savedCount = useMemo(() => Object.values(values).filter((v) => v.trim()).length, [values]);
  return (
    <div className="space-y-4">
      <ArtifactCard def={journeyFrameCard} values={values} onChange={(k, v) => lab.setArtifactField(journeyFrameCard.id, k, v)} />
      {savedCount > 0 && <p className="text-center text-xs text-[var(--color-slate)]">{savedCount} field{savedCount === 1 ? "" : "s"} saved automatically.</p>}
      <LabCard>
        <p className="text-xs font-bold uppercase tracking-wide text-[var(--color-slate)]">Recommended reading</p>
        <div className="mt-2">
          <ReadingList links={module1Reading} />
        </div>
      </LabCard>
    </div>
  );
}
