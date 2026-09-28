import { ModuleHeader } from "@/lab/components/ModuleHeader";
import { ContinueButton } from "@/lab/components/ContinueButton";
import { LabCard, LabLabel } from "@/lab/components/Card";
import { NoteComposer } from "@/lab/components/NoteComposer";
import { ExpertOverlay } from "@/lab/components/ExpertOverlay";
import { ArtifactCard } from "@/lab/components/ArtifactCard";
import { ReadingList } from "@/lab/components/ReadingList";
import { useModuleSection } from "@/lab/state/useModuleSection";
import type { LabProgressApi } from "@/lab/state/useLabProgress";
import { interviewOutlineArtifact } from "@/lab/data/artifacts";
import { module5Reading } from "@/lab/data/readingRoom";
import {
  interviewPrompt,
  clarifyAreas,
  interviewerAnswers,
  actorSegments,
  defensibleActor,
  goalContrast,
  journeyStages5,
  possibleProblems,
  defensiblePriority,
  solutionDirections,
  chainExample,
  northStar,
  candidateIndicators,
  guardrails5,
  adaptationConstraint,
  possibleAdaptations,
  compactStructure,
  timeAllocation,
  listeningFor,
  failureModes,
  playbackHeadings,
} from "@/lab/data/module5";

const TOTAL = 13;
const CASE_LABEL = "Module 5 · Google Maps group trip";

export function Module5({ lab }: { lab: LabProgressApi }) {
  const { section, setSection } = useModuleSection(lab, "m5");
  return (
    <div className="space-y-4 pb-24">
      <ModuleHeader eyebrow="Module 5 · Communicate the Thinking" question="How do we use journey thinking under interview pressure?" section={section} totalSections={TOTAL} trace="E" />

      {section === 1 && <SceneClarify lab={lab} />}
      {section === 2 && <SceneActor lab={lab} />}
      {section === 3 && <SceneGoal lab={lab} />}
      {section === 4 && <SceneJourney lab={lab} />}
      {section === 5 && <SceneProblems lab={lab} />}
      {section === 6 && <ScenePriority lab={lab} />}
      {section === 7 && <SceneDirections lab={lab} />}
      {section === 8 && <SceneChain lab={lab} />}
      {section === 9 && <SceneSuccess lab={lab} />}
      {section === 10 && <SceneAdaptation lab={lab} />}
      {section === 11 && <SceneReference />}
      {section === 12 && <ScenePlayback lab={lab} />}
      {section === 13 && <SceneArtifact lab={lab} />}

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

function SceneClarify({ lab }: { lab: LabProgressApi }) {
  const answered = lab.state.notebook.some((n) => n.moduleId === "m5" && n.kind === "question");
  return (
    <LabCard>
      <p className="text-xs font-bold uppercase tracking-wide text-[var(--color-accent)]">Interview case</p>
      <p className="mt-1 text-sm font-bold text-[var(--color-ink)]">{interviewPrompt}</p>
      <LabLabel>Areas worth clarifying</LabLabel>
      <ul className="space-y-0.5 text-xs text-[var(--color-slate)]">
        {clarifyAreas.map((a) => (
          <li key={a}>• {a}</li>
        ))}
      </ul>
      <div className="mt-3">
        <NoteComposer prompt="Write two or three clarifying questions" withLabel={false} onSave={(text) => lab.addNote("m5", CASE_LABEL, "question", text)} />
      </div>
      {answered && (
        <div className="mt-3 animate-fade-in-up rounded-xl bg-[var(--color-accent-2-soft)] p-3">
          <p className="text-xs font-bold text-[var(--color-ink)]">The interviewer answers:</p>
          <ul className="mt-1 space-y-0.5 text-xs text-[var(--color-ink)]">
            {interviewerAnswers.map((a) => (
              <li key={a}>• {a}</li>
            ))}
          </ul>
        </div>
      )}
      <p className="mt-2 text-xs italic text-[var(--color-slate)]">Clarifying questions should reduce consequential ambiguity — not become a ritual that delays reasonable assumptions.</p>
    </LabCard>
  );
}

function SceneActor({ lab }: { lab: LabProgressApi }) {
  const chosen = lab.state.selections["m5-actor"] ?? "";
  return (
    <LabCard>
      <h2 className="text-sm font-bold text-[var(--color-ink)]">Choose an actor and situation</h2>
      <div className="mt-2 flex flex-wrap gap-1.5">
        {actorSegments.map((a) => (
          <button
            key={a}
            type="button"
            onClick={() => lab.setSelection("m5-actor", a)}
            className={`rounded-full border px-2.5 py-1.5 text-xs font-medium transition ${chosen === a ? "border-[var(--color-accent)] bg-[var(--color-accent-soft)] text-[var(--color-ink)]" : "border-[var(--color-border)] text-[var(--color-ink)]"}`}
          >
            {a}
          </button>
        ))}
      </div>
      <p className="mt-2 text-xs italic text-[var(--color-slate)]">Which differences actually change the journey, needs, or product opportunity?</p>
      <div className="mt-2">
        <NoteComposer prompt="Explain why you chose this actor" withLabel={false} onSave={(text) => lab.addNote("m5", CASE_LABEL, "note", text)} />
      </div>
      {chosen && <p className="mt-3 rounded-xl bg-black/[0.03] p-3 text-xs text-[var(--color-ink)]">A possible defensible choice: {defensibleActor}</p>}
    </LabCard>
  );
}

function SceneGoal({ lab }: { lab: LabProgressApi }) {
  return (
    <LabCard>
      <h2 className="text-sm font-bold text-[var(--color-ink)]">State the goal without using the product</h2>
      <p className="mt-2 text-xs text-[var(--color-ink)]">
        <span className="font-bold text-[var(--color-danger)]">Weak: </span>
        {goalContrast.weak}
      </p>
      <p className="mt-1 text-xs text-[var(--color-ink)]">
        <span className="font-bold text-[var(--color-success)]">Stronger: </span>
        {goalContrast.strong}
      </p>
      <div className="mt-3">
        <NoteComposer prompt="Write the goal in your own words, with the product name removed" withLabel={false} onSave={(text) => lab.addNote("m5", CASE_LABEL, "note", text)} />
      </div>
    </LabCard>
  );
}

function SceneJourney({ lab }: { lab: LabProgressApi }) {
  return (
    <LabCard>
      <h2 className="text-sm font-bold text-[var(--color-ink)]">Narrate the current journey</h2>
      <div className="mt-2 space-y-2">
        {journeyStages5.map((s, i) => (
          <div key={s.name} className="rounded-xl border border-[var(--color-border)] p-3">
            <p className="text-sm font-bold text-[var(--color-ink)]">
              {i + 1}. {s.name}
            </p>
            <p className="text-xs text-[var(--color-slate)]">{s.detail}</p>
            <textarea
              value={lab.state.freeText[`m5-stage-${i}`] ?? ""}
              onChange={(e) => lab.setFreeText(`m5-stage-${i}`, e.target.value)}
              rows={1}
              placeholder="Actions, questions, tools/channels, friction, emotion…"
              className="mt-2 w-full resize-none rounded-lg border border-[var(--color-border)] p-2 text-xs text-[var(--color-ink)] outline-none focus-visible:border-[var(--color-accent)]"
            />
          </div>
        ))}
      </div>
    </LabCard>
  );
}

function SceneProblems({ lab }: { lab: LabProgressApi }) {
  return (
    <LabCard>
      <h2 className="text-sm font-bold text-[var(--color-ink)]">Identify problems without solution language</h2>
      <ul className="mt-2 space-y-0.5 text-xs text-[var(--color-slate)]">
        {possibleProblems.map((p) => (
          <li key={p}>• {p}</li>
        ))}
      </ul>
      <p className="mt-2 text-xs italic text-[var(--color-ink)]">Phrase at least three problems as obstacles or unmet needs, not features.</p>
      <div className="mt-3 space-y-2">
        {[0, 1, 2].map((i) => (
          <NoteComposer key={i} withLabel={false} placeholder={`Problem ${i + 1}…`} onSave={(text) => lab.addNote("m5", CASE_LABEL, "pain-point", text)} />
        ))}
      </div>
    </LabCard>
  );
}

function ScenePriority({ lab }: { lab: LabProgressApi }) {
  return (
    <LabCard>
      <h2 className="text-sm font-bold text-[var(--color-ink)]">Prioritize transparently</h2>
      <p className="mt-1 text-xs text-[var(--color-slate)]">Compare using: severity for the actor, frequency, effect on the group goal, fit with Maps' strengths, confidence in assumptions.</p>
      <div className="mt-3">
        <NoteComposer prompt="Which problem would you prioritize, and why?" withLabel={false} onSave={(text) => lab.addNote("m5", CASE_LABEL, "note", text)} />
      </div>
      <p className="mt-3 rounded-xl bg-black/[0.03] p-3 text-xs text-[var(--color-ink)]">A defensible priority: {defensiblePriority}</p>
      <p className="mt-2 text-xs italic text-[var(--color-slate)]">Notice the uncertainty is said aloud — good reasoning doesn't pretend assumptions are facts.</p>
    </LabCard>
  );
}

function SceneDirections({ lab }: { lab: LabProgressApi }) {
  const chosen = lab.state.selections["m5-direction"] ?? "";
  return (
    <LabCard>
      <h2 className="text-sm font-bold text-[var(--color-ink)]">Explore solution directions</h2>
      <div className="mt-2 space-y-2">
        {solutionDirections.map((d) => (
          <button
            key={d.id}
            type="button"
            onClick={() => lab.setSelection("m5-direction", d.id)}
            className={`w-full rounded-xl border-2 p-3 text-left transition ${chosen === d.id ? "border-[var(--color-accent)] bg-[var(--color-accent-soft)]" : "border-[var(--color-border)]"}`}
          >
            <p className="text-sm font-bold text-[var(--color-ink)]">
              Direction {d.id} — {d.title}
            </p>
            <p className="text-xs text-[var(--color-slate)]">{d.detail}</p>
          </button>
        ))}
      </div>
      <div className="mt-3">
        <NoteComposer prompt="Explain the minimum valuable behavior of your chosen direction (not an entire platform)" withLabel={false} onSave={(text) => lab.addNote("m5", CASE_LABEL, "note", text)} />
      </div>
    </LabCard>
  );
}

function SceneChain({ lab }: { lab: LabProgressApi }) {
  return (
    <LabCard>
      <h2 className="text-sm font-bold text-[var(--color-ink)]">Connect solution to journey and risk</h2>
      <p className="mt-1 text-xs text-[var(--color-slate)]">Evidence/problem → intended behavior change → expected user outcome → metric → risk</p>
      <p className="mt-2 rounded-xl bg-black/[0.03] p-3 text-xs text-[var(--color-ink)]">{chainExample}</p>
      <div className="mt-3">
        <NoteComposer prompt="Write your own chain for your selected direction" withLabel={false} onSave={(text) => lab.addNote("m5", CASE_LABEL, "note", text)} />
      </div>
    </LabCard>
  );
}

function SceneSuccess({ lab }: { lab: LabProgressApi }) {
  return (
    <LabCard>
      <h2 className="text-sm font-bold text-[var(--color-ink)]">Define success</h2>
      <p className="mt-2 text-xs font-bold text-[var(--color-ink)]">North-star user outcome</p>
      <p className="text-xs text-[var(--color-slate)]">{northStar}</p>
      <p className="mt-2 text-xs font-bold text-[var(--color-ink)]">Candidate behavioral indicators</p>
      <ul className="space-y-0.5 text-xs text-[var(--color-slate)]">
        {candidateIndicators.map((c) => (
          <li key={c}>• {c}</li>
        ))}
      </ul>
      <p className="mt-2 text-xs font-bold text-[var(--color-ink)]">Guardrails</p>
      <ul className="space-y-0.5 text-xs text-[var(--color-slate)]">
        {guardrails5.map((g) => (
          <li key={g}>• {g}</li>
        ))}
      </ul>
      <div className="mt-3">
        <NoteComposer prompt="Pick the metrics and guardrails you'd actually present" withLabel={false} onSave={(text) => lab.addNote("m5", CASE_LABEL, "metric", text)} />
      </div>
    </LabCard>
  );
}

function SceneAdaptation({ lab }: { lab: LabProgressApi }) {
  const revealed = !!lab.state.overlays["m5-adaptation"];
  return (
    <LabCard>
      <h2 className="text-sm font-bold text-[var(--color-ink)]">Adaptation challenge</h2>
      <p className="mt-2 rounded-xl bg-[var(--color-danger-soft)] p-3 text-sm text-[var(--color-ink)]">New constraint: {adaptationConstraint}</p>
      <div className="mt-3">
        <NoteComposer prompt="Revise your solution while keeping the prioritized need stable" withLabel={false} onSave={(text) => lab.addNote("m5", CASE_LABEL, "note", text)} />
      </div>
      <div className="mt-3">
        <ExpertOverlay revealed={revealed} onReveal={() => lab.revealOverlay("m5-adaptation")} buttonLabel="See possible adaptations">
          <ul className="space-y-1 text-sm text-[var(--color-ink)]">
            {possibleAdaptations.map((a) => (
              <li key={a}>• {a}</li>
            ))}
          </ul>
        </ExpertOverlay>
      </div>
      <p className="mt-2 text-xs italic text-[var(--color-slate)]">Strong product thinking preserves the problem understanding while allowing the solution to change.</p>
    </LabCard>
  );
}

function SceneReference() {
  return (
    <div className="space-y-4">
      <LabCard>
        <h2 className="text-sm font-bold text-[var(--color-ink)]">A compact interview structure</h2>
        <ol className="mt-2 space-y-1 text-xs text-[var(--color-ink)]">
          {compactStructure.map((s, i) => (
            <li key={s}>
              {i + 1}. {s}
            </li>
          ))}
        </ol>
      </LabCard>
      <LabCard>
        <h2 className="text-sm font-bold text-[var(--color-ink)]">Suggested time for a 35-minute interview</h2>
        <table className="mt-2 w-full text-xs">
          <tbody>
            {timeAllocation.map((t) => (
              <tr key={t.activity} className="border-b border-[var(--color-border)] last:border-0">
                <td className="py-1.5 text-[var(--color-ink)]">{t.activity}</td>
                <td className="py-1.5 text-right text-[var(--color-slate)]">{t.time}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <p className="mt-2 text-xs italic text-[var(--color-slate)]">Depth on the central decision matters more than equal time in every section.</p>
      </LabCard>
      <LabCard>
        <h2 className="text-sm font-bold text-[var(--color-ink)]">What interviewers are listening for</h2>
        <ul className="mt-2 space-y-0.5 text-xs text-[var(--color-ink)]">
          {listeningFor.map((l) => (
            <li key={l}>• {l}</li>
          ))}
        </ul>
      </LabCard>
      <LabCard>
        <h2 className="text-sm font-bold text-[var(--color-ink)]">Common interview failure modes</h2>
        <div className="mt-2 space-y-1.5">
          {failureModes.map((f) => (
            <p key={f.title} className="text-xs text-[var(--color-ink)]">
              <span className="font-bold">{f.title}: </span>
              {f.detail}
            </p>
          ))}
        </div>
      </LabCard>
    </div>
  );
}

function ScenePlayback({ lab }: { lab: LabProgressApi }) {
  return (
    <LabCard>
      <h2 className="text-sm font-bold text-[var(--color-ink)]">Interview playback</h2>
      <p className="mt-1 text-xs text-[var(--color-slate)]">No score — sort your own reasoning under these four headings.</p>
      <div className="mt-3 space-y-3">
        {playbackHeadings.map((h) => (
          <NoteComposer key={h} prompt={h} withLabel={false} onSave={(text) => lab.addNote("m5", CASE_LABEL, "note", `[${h}] ${text}`)} />
        ))}
      </div>
    </LabCard>
  );
}

function SceneArtifact({ lab }: { lab: LabProgressApi }) {
  const values = lab.state.artifacts[interviewOutlineArtifact.id] ?? {};
  return (
    <div className="space-y-4">
      <ArtifactCard def={interviewOutlineArtifact} values={values} onChange={(k, v) => lab.setArtifactField(interviewOutlineArtifact.id, k, v)} />
      <LabCard>
        <p className="text-xs font-bold uppercase tracking-wide text-[var(--color-slate)]">Recommended reading</p>
        <div className="mt-2">
          <ReadingList links={module5Reading} />
        </div>
      </LabCard>
    </div>
  );
}
