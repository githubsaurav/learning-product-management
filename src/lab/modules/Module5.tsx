import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { ModuleHeader } from "@/lab/components/ModuleHeader";
import { ContinueButton } from "@/lab/components/ContinueButton";
import { LabCard, LabLabel } from "@/lab/components/Card";
import { SelectChips } from "@/lab/components/SelectChips";
import { ChoiceReveal } from "@/lab/components/ChoiceReveal";
import { OrderableList } from "@/lab/components/OrderableList";
import { EvidenceBoard } from "@/lab/components/EvidenceBoard";
import { ReadingList } from "@/lab/components/ReadingList";
import { FrameworkBadge } from "@/lab/components/FrameworkBadge";
import { useModuleSection } from "@/lab/state/useModuleSection";
import type { LabProgressApi } from "@/lab/state/useLabProgress";
import { module5Reading } from "@/lab/data/readingRoom";
import {
  circlesSteps,
  interviewPrompt,
  clarifyAreas,
  interviewerAnswers,
  actorSegments,
  defensibleActor,
  goalOptions,
  journeyStages5,
  possibleProblems,
  defensiblePriority,
  solutionDirections,
  chainSegments,
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
  playbackSortItems,
} from "@/lab/data/module5";

const TOTAL = 14;

function CircleTag({ letter, name }: { letter: string; name: string }) {
  return (
    <p className="mb-1.5 flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wide text-[var(--color-accent)]">
      <span className="flex h-4 w-4 items-center justify-center rounded bg-[var(--color-accent)] text-white">{letter}</span>
      {name}
    </p>
  );
}

export function Module5({ lab }: { lab: LabProgressApi }) {
  const { section, setSection } = useModuleSection(lab, "m5");
  return (
    <div className="space-y-4 pb-24">
      <ModuleHeader eyebrow="Module 5 · Communicate the Thinking" question="How do we use journey thinking under interview pressure?" section={section} totalSections={TOTAL} />

      {section === 1 && <SceneCircles />}
      {section === 2 && <SceneClarify lab={lab} />}
      {section === 3 && <SceneActor lab={lab} />}
      {section === 4 && <SceneGoal lab={lab} />}
      {section === 5 && <SceneJourney lab={lab} />}
      {section === 6 && <SceneProblems lab={lab} />}
      {section === 7 && <ScenePriority lab={lab} />}
      {section === 8 && <SceneDirections lab={lab} />}
      {section === 9 && <SceneChain lab={lab} />}
      {section === 10 && <SceneSuccess lab={lab} />}
      {section === 11 && <SceneAdaptation lab={lab} />}
      {section === 12 && <SceneReference />}
      {section === 13 && <ScenePlayback lab={lab} />}
      {section === 14 && <SceneRecap lab={lab} />}

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

function SceneCircles() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);
  return (
    <LabCard>
      <FrameworkBadge name="CIRCLES Method" source="Lewis C. Lin, Decode and Conquer">
        <p>A real, widely-used structure for product-design interview questions. Every scene in this module is labeled with the letter it's teaching, so you can see the framework in action rather than just naming it.</p>
      </FrameworkBadge>
      <h2 className="mt-3 text-sm font-bold text-[var(--color-ink)]">The seven steps</h2>
      <div className="mt-2 space-y-1.5">
        {circlesSteps.map((s, i) => {
          const open = openIdx === i;
          return (
            <div key={`${s.letter}-${i}`} className="rounded-xl border border-[var(--color-border)]">
              <button type="button" onClick={() => setOpenIdx(open ? null : i)} className="flex w-full items-center gap-2 p-2.5 text-left">
                <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded bg-[var(--color-accent)] text-xs font-bold text-white">{s.letter}</span>
                <span className="flex-1 text-sm font-bold text-[var(--color-ink)]">{s.name}</span>
                <ChevronDown size={14} className={`shrink-0 text-[var(--color-slate)] transition-transform ${open ? "rotate-180" : ""}`} />
              </button>
              {open && <p className="animate-fade-in-up border-t border-[var(--color-border)] p-2.5 text-xs text-[var(--color-slate)]">{s.detail}</p>}
            </div>
          );
        })}
      </div>
    </LabCard>
  );
}

function SceneClarify({ lab }: { lab: LabProgressApi }) {
  const selected = lab.state.multi["m5-clarify"] ?? [];
  return (
    <LabCard>
      <CircleTag letter="C" name="Comprehend the situation" />
      <p className="text-xs font-bold uppercase tracking-wide text-[var(--color-accent)]">Interview case</p>
      <p className="mt-1 text-sm font-bold text-[var(--color-ink)]">{interviewPrompt}</p>
      <LabLabel>Pick up to two questions you'd actually ask</LabLabel>
      <SelectChips options={clarifyAreas} selected={selected} onToggle={(o) => lab.toggleMulti("m5-clarify", o)} max={2} />
      {selected.length > 0 && (
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
      <CircleTag letter="I" name="Identify the customer" />
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
      {chosen && <p className="mt-3 animate-fade-in-up rounded-xl bg-black/[0.03] p-3 text-xs text-[var(--color-ink)]">A possible defensible choice: {defensibleActor}</p>}
    </LabCard>
  );
}

function SceneGoal({ lab }: { lab: LabProgressApi }) {
  return (
    <LabCard>
      <CircleTag letter="R" name="Report the customer's needs" />
      <h2 className="text-sm font-bold text-[var(--color-ink)]">State the goal without using the product</h2>
      <div className="mt-2">
        <ChoiceReveal options={goalOptions} selected={lab.state.selections["m5-goal"] ?? null} onSelect={(id) => lab.setSelection("m5-goal", id)} />
      </div>
    </LabCard>
  );
}

function SceneJourney({ lab }: { lab: LabProgressApi }) {
  return (
    <LabCard>
      <CircleTag letter="R" name="Report the customer's needs — continued" />
      <h2 className="text-sm font-bold text-[var(--color-ink)]">Narrate the current journey</h2>
      <div className="mt-2 space-y-4">
        {journeyStages5.map((s, i) => (
          <div key={s.name}>
            <p className="text-sm font-bold text-[var(--color-ink)]">
              {i + 1}. {s.name}
            </p>
            <p className="text-xs text-[var(--color-slate)]">{s.detail}</p>
            <div className="mt-1.5">
              <ChoiceReveal options={s.options} selected={lab.state.selections[`m5-stage-${i}`] ?? null} onSelect={(id) => lab.setSelection(`m5-stage-${i}`, id)} />
            </div>
          </div>
        ))}
      </div>
    </LabCard>
  );
}

function SceneProblems({ lab }: { lab: LabProgressApi }) {
  const selected = lab.state.multi["m5-problems"] ?? [];
  return (
    <LabCard>
      <CircleTag letter="R" name="Report the customer's needs — continued" />
      <h2 className="text-sm font-bold text-[var(--color-ink)]">Identify problems without solution language</h2>
      <LabLabel>Pick up to three you'd raise as real problems</LabLabel>
      <SelectChips options={possibleProblems} selected={selected} onToggle={(o) => lab.toggleMulti("m5-problems", o)} max={3} />
      {selected.length > 0 && <p className="mt-3 animate-fade-in-up text-xs italic text-[var(--color-ink)]">Each of these describes an obstacle or unmet need — notice none of them names a feature.</p>}
    </LabCard>
  );
}

function ScenePriority({ lab }: { lab: LabProgressApi }) {
  const chosenProblems = lab.state.multi["m5-problems"]?.length ? lab.state.multi["m5-problems"] : possibleProblems.slice(0, 3);
  const order = lab.state.multi["m5-priority-order"]?.length ? lab.state.multi["m5-priority-order"] : chosenProblems;
  const items = order.map((text, i) => ({ id: `${i}-${text}`, text }));
  const revealed = !!lab.state.flags["m5-priority-revealed"];

  function move(id: string, dir: -1 | 1) {
    const idx = items.findIndex((it) => it.id === id);
    const next = [...order];
    const swapWith = idx + dir;
    if (swapWith < 0 || swapWith >= next.length) return;
    [next[idx], next[swapWith]] = [next[swapWith], next[idx]];
    lab.setMulti("m5-priority-order", next);
  }

  return (
    <LabCard>
      <CircleTag letter="C" name="Cut, through prioritization" />
      <h2 className="text-sm font-bold text-[var(--color-ink)]">Prioritize transparently</h2>
      <p className="mt-1 text-xs text-[var(--color-slate)]">Reorder your chosen problems from most to least worth solving first.</p>
      <div className="mt-2">
        <OrderableList items={items} onMove={move} />
      </div>
      {!revealed ? (
        <button type="button" onClick={() => lab.setFlag("m5-priority-revealed")} className="mt-3 w-full rounded-xl border-2 border-dashed border-[var(--color-accent)] py-2.5 text-xs font-bold text-[var(--color-accent)] hover:bg-[var(--color-accent-soft)]">
          Compare with a defensible priority
        </button>
      ) : (
        <p className="mt-3 animate-fade-in-up rounded-xl bg-[var(--color-accent-2-soft)] p-3 text-xs text-[var(--color-ink)]">{defensiblePriority}</p>
      )}
    </LabCard>
  );
}

function SceneDirections({ lab }: { lab: LabProgressApi }) {
  const chosen = lab.state.selections["m5-direction"] ?? "";
  const direction = solutionDirections.find((d) => d.id === chosen);
  return (
    <LabCard>
      <CircleTag letter="L" name="List solutions" />
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
      {direction && <p className="mt-3 animate-fade-in-up rounded-xl bg-black/[0.03] p-3 text-xs text-[var(--color-ink)]">{direction.minimal}</p>}
    </LabCard>
  );
}

function SceneChain({ lab }: { lab: LabProgressApi }) {
  const shuffled = [chainSegments[2], chainSegments[0], chainSegments[4], chainSegments[1], chainSegments[3]];
  const order = lab.state.multi["m5-chain-order"]?.length ? lab.state.multi["m5-chain-order"] : shuffled;
  const items = order.map((text, i) => ({ id: `${i}-${text.slice(0, 8)}`, text }));
  const [checked, setChecked] = useState(false);
  const isCorrect = order.join("|") === chainSegments.join("|");

  function move(id: string, dir: -1 | 1) {
    const idx = items.findIndex((it) => it.id === id);
    const next = [...order];
    const swapWith = idx + dir;
    if (swapWith < 0 || swapWith >= next.length) return;
    [next[idx], next[swapWith]] = [next[swapWith], next[idx]];
    lab.setMulti("m5-chain-order", next);
  }

  return (
    <LabCard>
      <CircleTag letter="E" name="Evaluate trade-offs" />
      <h2 className="text-sm font-bold text-[var(--color-ink)]">Connect solution to journey and risk</h2>
      <p className="mt-1 text-xs text-[var(--color-slate)]">Reorder these five links into: evidence/problem → behavior change → user outcome → metric → risk.</p>
      <div className="mt-2">
        <OrderableList items={items} onMove={move} />
      </div>
      {!checked ? (
        <button type="button" onClick={() => setChecked(true)} className="mt-3 w-full rounded-xl bg-[var(--color-ink)] py-2.5 text-xs font-bold text-white">
          Check my chain
        </button>
      ) : (
        <p className={`mt-3 animate-fade-in-up rounded-xl p-3 text-xs ${isCorrect ? "bg-[var(--color-success-soft)] text-[var(--color-ink)]" : "bg-[var(--color-danger-soft)] text-[var(--color-ink)]"}`}>
          {isCorrect ? "That's the intended chain." : "Not quite the intended order — correct chain:"} {!isCorrect && chainSegments.join(" → ")}
        </p>
      )}
    </LabCard>
  );
}

function SceneSuccess({ lab }: { lab: LabProgressApi }) {
  const indicators = lab.state.multi["m5-indicators"] ?? [];
  const guardrailsPicked = lab.state.multi["m5-guardrails"] ?? [];
  return (
    <LabCard>
      <CircleTag letter="E" name="Evaluate trade-offs — continued" />
      <h2 className="text-sm font-bold text-[var(--color-ink)]">Define success</h2>
      <p className="mt-2 text-xs font-bold text-[var(--color-ink)]">North-star user outcome</p>
      <p className="text-xs text-[var(--color-slate)]">{northStar}</p>
      <LabLabel>Pick the behavioral indicators you'd actually present (up to 3)</LabLabel>
      <SelectChips options={candidateIndicators} selected={indicators} onToggle={(o) => lab.toggleMulti("m5-indicators", o)} max={3} />
      <div className="mt-3">
        <LabLabel>Pick the guardrails you'd name (up to 3)</LabLabel>
        <SelectChips options={guardrails5} selected={guardrailsPicked} onToggle={(o) => lab.toggleMulti("m5-guardrails", o)} max={3} />
      </div>
    </LabCard>
  );
}

function SceneAdaptation({ lab }: { lab: LabProgressApi }) {
  const picked = lab.state.multi["m5-adaptation"] ?? [];
  return (
    <LabCard>
      <CircleTag letter="E" name="Evaluate trade-offs — stress test" />
      <h2 className="text-sm font-bold text-[var(--color-ink)]">Adaptation challenge</h2>
      <p className="mt-2 rounded-xl bg-[var(--color-danger-soft)] p-3 text-sm text-[var(--color-ink)]">New constraint: {adaptationConstraint}</p>
      <LabLabel>Which adaptations would you apply, keeping the prioritized need stable?</LabLabel>
      <SelectChips options={possibleAdaptations} selected={picked} onToggle={(o) => lab.toggleMulti("m5-adaptation", o)} />
      {picked.length > 0 && <p className="mt-3 animate-fade-in-up text-xs italic text-[var(--color-slate)]">Strong product thinking preserves the problem understanding while allowing the solution to change.</p>}
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
  const items = playbackSortItems.map((it, i) => ({ id: `pb-${i}`, text: it.text, correctColumn: it.correctColumn }));
  const assignments: Record<string, number | undefined> = {};
  for (const it of items) {
    const v = lab.state.selections[`m5-playback-${it.id}`];
    if (v !== undefined) assignments[it.id] = Number(v);
  }
  return (
    <LabCard>
      <h2 className="text-sm font-bold text-[var(--color-ink)]">Interview playback</h2>
      <p className="mt-1 text-xs text-[var(--color-slate)]">No score — sort these example candidate moments under the heading each one fits.</p>
      <div className="mt-3">
        <EvidenceBoard columns={playbackHeadings} items={items} assignments={assignments} checkable onAssign={(id, col) => lab.setSelection(`m5-playback-${id}`, String(col))} />
      </div>
    </LabCard>
  );
}

function SceneRecap({ lab }: { lab: LabProgressApi }) {
  const actor = lab.state.selections["m5-actor"];
  const direction = solutionDirections.find((d) => d.id === lab.state.selections["m5-direction"]);
  const topProblem = (lab.state.multi["m5-priority-order"] ?? lab.state.multi["m5-problems"] ?? [])[0];
  return (
    <div className="space-y-4">
      <LabCard>
        <CircleTag letter="S" name="Summarize your recommendation" />
        <p className="text-xs font-bold uppercase tracking-wide text-[var(--color-accent)]">Your Interview Case Storyboard</p>
        <ul className="mt-2 space-y-1.5 text-sm text-[var(--color-ink)]">
          {actor && (
            <li>
              <span className="font-bold">Actor: </span>
              {actor}
            </li>
          )}
          {topProblem && (
            <li>
              <span className="font-bold">Top problem: </span>
              {topProblem}
            </li>
          )}
          {direction && (
            <li>
              <span className="font-bold">Direction: </span>
              {direction.title}
            </li>
          )}
        </ul>
        <p className="mt-2 text-xs text-[var(--color-slate)]">This storyboard is assembled from the choices, rankings, and sorts you made throughout the module.</p>
      </LabCard>
      <LabCard>
        <FrameworkBadge name="CIRCLES Method — completed" source="Lewis C. Lin, Decode and Conquer">
          <p>You've now walked all seven steps: Comprehend, Identify, Report, Cut, List, Evaluate, and Summarize. In an actual interview, this is the structure examiners recognize — even when you never say the word "CIRCLES" out loud.</p>
        </FrameworkBadge>
      </LabCard>
      <LabCard>
        <p className="text-xs font-bold uppercase tracking-wide text-[var(--color-slate)]">Recommended reading</p>
        <div className="mt-2">
          <ReadingList links={module5Reading} />
        </div>
      </LabCard>
    </div>
  );
}
