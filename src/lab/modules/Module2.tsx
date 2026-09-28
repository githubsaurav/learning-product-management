import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { ModuleHeader } from "@/lab/components/ModuleHeader";
import { ContinueButton } from "@/lab/components/ContinueButton";
import { LabCard, LabLabel } from "@/lab/components/Card";
import { SelectChips } from "@/lab/components/SelectChips";
import { EvidenceBoard } from "@/lab/components/EvidenceBoard";
import { ChoiceReveal } from "@/lab/components/ChoiceReveal";
import { ReadingList } from "@/lab/components/ReadingList";
import { useModuleSection } from "@/lab/state/useModuleSection";
import type { LabProgressApi } from "@/lab/state/useLabProgress";
import { module2Reading } from "@/lab/data/readingRoom";
import {
  arjunIntro,
  arjunDashboard,
  evidenceSources,
  boardColumns,
  boardItems,
  behaviorLayers,
  interviewMoves,
  followUpQuestions,
  researchWindows,
  synthesisPairs,
  synthesisRules,
  researchPlanQuestions,
  firstExplanationOptions,
} from "@/lab/data/module2";

const TOTAL = 10;

export function Module2({ lab }: { lab: LabProgressApi }) {
  const { section, setSection } = useModuleSection(lab, "m2");

  return (
    <div className="space-y-4 pb-24">
      <ModuleHeader eyebrow="Module 2 · Reconstruct Reality" question="How do we learn what the journey actually is?" section={section} totalSections={TOTAL} trace="R" />

      {section === 1 && <SceneFirstExplanation lab={lab} />}
      {section === 2 && <SceneEvidenceRoom />}
      {section === 3 && <SceneBoard lab={lab} />}
      {section === 4 && <SceneBehaviorLens />}
      {section === 5 && <SceneInterviewMoves />}
      {section === 6 && <SceneInterviewTable lab={lab} />}
      {section === 7 && <SceneWindows />}
      {section === 8 && <SceneSynthesis lab={lab} />}
      {section === 9 && <SceneResearchPlan lab={lab} />}
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

function SceneFirstExplanation({ lab }: { lab: LabProgressApi }) {
  const chosen = lab.state.selections["m2-first-explanation"] ?? "";
  return (
    <LabCard>
      <p className="text-sm text-[var(--color-ink)]">{arjunIntro}</p>
      <LabLabel>The dashboard shows</LabLabel>
      <ul className="text-xs text-[var(--color-slate)]">
        {arjunDashboard.map((d) => (
          <li key={d}>• {d}</li>
        ))}
      </ul>
      <div className="mt-4">
        <LabLabel>Pick the explanation that feels most likely to you right now</LabLabel>
        <SelectChips options={firstExplanationOptions} selected={chosen ? [chosen] : []} onToggle={(o) => lab.setSelection("m2-first-explanation", o)} />
      </div>
      <p className="mt-3 text-xs italic text-[var(--color-slate)]">This is just your starting instinct — not evaluated. You'll compare it with real evidence next.</p>
    </LabCard>
  );
}

function SceneEvidenceRoom() {
  const [openId, setOpenId] = useState<string | null>(null);
  return (
    <LabCard>
      <h2 className="text-sm font-bold text-[var(--color-ink)]">The evidence room</h2>
      <p className="mt-1 text-xs text-[var(--color-slate)]">Inspect all six sources, in any order.</p>
      <div className="mt-3 space-y-2">
        {evidenceSources.map((s) => {
          const open = openId === s.id;
          return (
            <div key={s.id} className="rounded-xl border border-[var(--color-border)]">
              <button type="button" onClick={() => setOpenId(open ? null : s.id)} className="flex w-full items-center justify-between p-3 text-left">
                <span>
                  <span className="text-[10px] font-bold uppercase tracking-wide text-[var(--color-accent)]">{s.label}</span>
                  <span className="block text-sm font-bold text-[var(--color-ink)]">{s.title}</span>
                </span>
                <ChevronDown size={15} className={`shrink-0 text-[var(--color-slate)] transition-transform ${open ? "rotate-180" : ""}`} />
              </button>
              {open && (
                <div className="animate-fade-in-up space-y-2 border-t border-[var(--color-border)] p-3 text-xs">
                  <p className="text-sm text-[var(--color-ink)]">{s.body}</p>
                  <div>
                    <p className="font-bold text-[var(--color-success)]">What it establishes</p>
                    <ul className="text-[var(--color-slate)]">
                      {s.establishes.map((e) => (
                        <li key={e}>• {e}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <p className="font-bold text-[var(--color-danger)]">What it does not establish</p>
                    <ul className="text-[var(--color-slate)]">
                      {s.doesNotEstablish.map((e) => (
                        <li key={e}>• {e}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </LabCard>
  );
}

function SceneBoard({ lab }: { lab: LabProgressApi }) {
  const assignments: Record<string, number | undefined> = {};
  for (const item of boardItems) {
    const v = lab.state.selections[`m2-board-${item.id}`];
    if (v !== undefined) assignments[item.id] = Number(v);
  }
  return (
    <LabCard>
      <h2 className="text-sm font-bold text-[var(--color-ink)]">Evidence board</h2>
      <p className="mt-1 text-xs text-[var(--color-slate)]">Pin each statement into the column where it belongs, then check your placement.</p>
      <div className="mt-3">
        <EvidenceBoard
          columns={boardColumns}
          items={boardItems}
          assignments={assignments}
          checkable
          onAssign={(id, col) => lab.setSelection(`m2-board-${id}`, String(col))}
          hint={(id, col) => {
            const item = boardItems.find((b) => b.id === id);
            if (item && item.correctColumn === 2 && col === 0) {
              return "Did we witness this, hear it described, or infer it from behavior? Consider “what we think it might mean.”";
            }
            if (item && item.correctColumn === 1 && col === 0) {
              return "This is something Arjun said, not something we directly witnessed — consider “what the person said.”";
            }
            return null;
          }}
        />
      </div>
    </LabCard>
  );
}

function SceneBehaviorLens() {
  return (
    <LabCard>
      <h2 className="text-sm font-bold text-[var(--color-ink)]">Behavior is not motivation</h2>
      <div className="mt-3 overflow-x-auto">
        <table className="w-full text-xs">
          <thead>
            <tr className="border-b border-[var(--color-border)] text-left text-[var(--color-slate)]">
              <th className="py-1.5 pr-2">Layer</th>
              <th className="py-1.5 pr-2">Example</th>
              <th className="py-1.5">Confidence</th>
            </tr>
          </thead>
          <tbody>
            {behaviorLayers.map((row) => (
              <tr key={row.layer} className="border-b border-[var(--color-border)] last:border-0">
                <td className="py-1.5 pr-2 font-bold text-[var(--color-ink)]">{row.layer}</td>
                <td className="py-1.5 pr-2 text-[var(--color-ink)]">{row.example}</td>
                <td className="py-1.5 text-[var(--color-slate)]">{row.confidence}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="mt-3 text-xs text-[var(--color-slate)]">
        Analytics usually explains <span className="font-bold">what and where</span>. Qualitative inquiry often helps explain <span className="font-bold">how and why</span>. Neither is automatically superior; they answer different questions.
      </p>
    </LabCard>
  );
}

function SceneInterviewMoves() {
  return (
    <LabCard>
      <h2 className="text-sm font-bold text-[var(--color-ink)]">Five interview moves</h2>
      <div className="mt-2 space-y-3">
        {interviewMoves.map((m) => (
          <div key={m.title} className="rounded-xl border border-[var(--color-border)] p-3">
            <p className="text-sm font-bold text-[var(--color-ink)]">{m.title}</p>
            {m.use && (
              <p className="mt-1 text-xs text-[var(--color-ink)]">
                <span className="font-bold text-[var(--color-success)]">Use: </span>
                &ldquo;{m.use}&rdquo;
              </p>
            )}
            {m.avoid && (
              <p className="mt-1 text-xs text-[var(--color-ink)]">
                <span className="font-bold text-[var(--color-danger)]">Avoid: </span>
                {m.avoid}
              </p>
            )}
            {m.note && <p className="mt-1 text-xs text-[var(--color-slate)]">{m.note}</p>}
          </div>
        ))}
      </div>
    </LabCard>
  );
}

function SceneInterviewTable({ lab }: { lab: LabProgressApi }) {
  const opened = lab.state.multi["m2-questions-opened"] ?? [];
  return (
    <LabCard>
      <h2 className="text-sm font-bold text-[var(--color-ink)]">Spot the leading question</h2>
      <p className="mt-1 text-xs text-[var(--color-slate)]">Tap each candidate follow-up question to see what dimension it explores, and whether it's leading or open.</p>
      <div className="mt-3 space-y-2">
        {followUpQuestions.map((q) => {
          const open = opened.includes(q.id);
          return (
            <div key={q.id} className="rounded-xl border border-[var(--color-border)]">
              <button type="button" onClick={() => lab.toggleMulti("m2-questions-opened", q.id)} className="flex w-full items-center justify-between p-3 text-left">
                <span className="text-sm text-[var(--color-ink)]">&ldquo;{q.text}&rdquo;</span>
                <ChevronDown size={14} className={`shrink-0 text-[var(--color-slate)] transition-transform ${open ? "rotate-180" : ""}`} />
              </button>
              {open && (
                <div className="animate-fade-in-up space-y-1.5 border-t border-[var(--color-border)] p-3">
                  <div className="flex flex-wrap gap-1.5">
                    <span className="rounded-full bg-[var(--color-accent-2-soft)] px-2 py-0.5 text-[10px] font-bold capitalize text-[var(--color-accent-2)]">{q.dimension}</span>
                    <span className={`rounded-full px-2 py-0.5 text-[10px] font-bold ${q.leading ? "bg-[var(--color-danger-soft)] text-[var(--color-danger)]" : "bg-[var(--color-success-soft)] text-[var(--color-success)]"}`}>
                      {q.leading ? "Leading" : "Open"}
                    </span>
                  </div>
                  <p className="text-xs text-[var(--color-ink)]">{q.note}</p>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </LabCard>
  );
}

function SceneWindows() {
  return (
    <LabCard>
      <h2 className="text-sm font-bold text-[var(--color-ink)]">Research methods as different windows</h2>
      <div className="mt-2 grid gap-2 sm:grid-cols-2">
        {researchWindows.map((w) => (
          <div key={w.title} className="rounded-xl border border-[var(--color-border)] p-3">
            <p className="text-sm font-bold text-[var(--color-ink)]">{w.title}</p>
            <p className="mt-1 text-xs text-[var(--color-ink)]">
              <span className="font-bold">Useful for: </span>
              {w.useful}
            </p>
            <p className="mt-1 text-xs text-[var(--color-slate)]">
              <span className="font-bold">Limitation: </span>
              {w.limitation}
            </p>
          </div>
        ))}
      </div>
    </LabCard>
  );
}

function SceneSynthesis({ lab }: { lab: LabProgressApi }) {
  return (
    <LabCard>
      <h2 className="text-sm font-bold text-[var(--color-ink)]">Synthesis without the mythical average user</h2>
      <p className="mt-1 text-xs text-[var(--color-slate)]">For each story, decide: combine with Arjun's journey, or keep as a separate branch?</p>
      <div className="mt-2 space-y-3">
        {synthesisPairs.map((s) => {
          const pick = lab.state.selections[`m2-synth-${s.name}`] ?? null;
          return (
            <div key={s.name} className="rounded-xl bg-black/[0.03] p-3">
              <p className="text-sm font-bold text-[var(--color-ink)]">{s.name}</p>
              <p className="text-xs text-[var(--color-slate)]">{s.story}</p>
              <div className="mt-2 flex gap-1.5">
                {(["Combine", "Keep separate"] as const).map((label) => (
                  <button
                    key={label}
                    type="button"
                    onClick={() => lab.setSelection(`m2-synth-${s.name}`, label)}
                    className={`rounded-full border px-2.5 py-1 text-xs font-bold transition ${pick === label ? "border-[var(--color-accent)] bg-[var(--color-accent-soft)] text-[var(--color-ink)]" : "border-[var(--color-border)] text-[var(--color-ink)]"}`}
                  >
                    {label}
                  </button>
                ))}
              </div>
              {pick && <p className="mt-1.5 animate-fade-in-up text-xs italic text-[var(--color-ink)]">{s.note}</p>}
            </div>
          );
        })}
      </div>
      <LabLabel>Synthesis rules</LabLabel>
      <ul className="space-y-1 text-xs text-[var(--color-ink)]">
        {synthesisRules.map((r) => (
          <li key={r}>• {r}</li>
        ))}
      </ul>
    </LabCard>
  );
}

function SceneResearchPlan({ lab }: { lab: LabProgressApi }) {
  return (
    <LabCard>
      <h2 className="text-sm font-bold text-[var(--color-ink)]">Research-plan studio</h2>
      <p className="mt-1 text-xs text-[var(--color-slate)]">Budget: five interviews, one week of analytics support, access to support transcripts.</p>
      <div className="mt-3 space-y-5">
        {researchPlanQuestions.map((rq, i) => (
          <div key={rq.question}>
            <p className="text-sm font-bold text-[var(--color-ink)]">{rq.question}</p>
            <div className="mt-2">
              <ChoiceReveal options={rq.options} selected={lab.state.selections[`m2-plan-${i}`] ?? null} onSelect={(id) => lab.setSelection(`m2-plan-${i}`, id)} />
            </div>
          </div>
        ))}
      </div>
    </LabCard>
  );
}

function SceneRecap({ lab }: { lab: LabProgressApi }) {
  const first = lab.state.selections["m2-first-explanation"];
  const combined = synthesisPairs.filter((s) => lab.state.selections[`m2-synth-${s.name}`] === "Combine").map((s) => s.name);
  const separate = synthesisPairs.filter((s) => lab.state.selections[`m2-synth-${s.name}`] === "Keep separate").map((s) => s.name);
  return (
    <div className="space-y-4">
      <LabCard>
        <p className="text-xs font-bold uppercase tracking-wide text-[var(--color-accent)]">Your Evidence Board &amp; Research Plan</p>
        {first && (
          <p className="mt-2 text-sm text-[var(--color-ink)]">
            Your first instinct was: <span className="italic">&ldquo;{first}&rdquo;</span> — compare that with what the six sources actually showed.
          </p>
        )}
        {(combined.length > 0 || separate.length > 0) && (
          <p className="mt-2 text-sm text-[var(--color-ink)]">
            {combined.length > 0 && <>You combined {combined.join(", ")} with Arjun's journey. </>}
            {separate.length > 0 && <>You kept {separate.join(", ")} as separate branches.</>}
          </p>
        )}
        <p className="mt-2 text-xs text-[var(--color-slate)]">Your evidence-board sort and research-plan choices are saved as this module's model — built from what you pinned and picked, not typed.</p>
      </LabCard>
      <LabCard>
        <p className="text-xs font-bold uppercase tracking-wide text-[var(--color-slate)]">Recommended reading</p>
        <div className="mt-2">
          <ReadingList links={module2Reading} />
        </div>
      </LabCard>
    </div>
  );
}
