import { useState } from "react";
import { LabCard, LabLabel } from "@/lab/components/Card";
import { ChoiceReveal } from "@/lab/components/ChoiceReveal";
import { EvidenceBoard } from "@/lab/components/EvidenceBoard";
import type { LabProgressApi } from "@/lab/state/useLabProgress";
import {
  framingSprints,
  teardownFlows,
  teardownQuestions,
  reconstructionCases,
  reconstructionColumns,
  reconstructionItems,
  opportunityClinicPainPoints,
  interviewRehearsalPrompts,
} from "@/lab/data/practiceStudio";

type Mode = "A" | "B" | "C" | "D" | "E";

const modes: { id: Mode; title: string; detail: string }[] = [
  { id: "A", title: "Journey framing sprints", detail: "A broad prompt — pick the stronger framing." },
  { id: "B", title: "Journey teardown", detail: "Zoom out from one screen to the whole journey." },
  { id: "C", title: "Evidence reconstruction", detail: "Sort evidence by how confident it really is." },
  { id: "D", title: "Opportunity clinic", detail: "Watch a pain point become an opportunity statement." },
  { id: "E", title: "Interview rehearsal", detail: "Pick a prompt, compare your outline to one path through it." },
];

function PickOne({ options, selKey, lab }: { options: string[]; selKey: string; lab: LabProgressApi }) {
  const chosen = lab.state.selections[selKey] ?? "";
  return (
    <div className="flex flex-wrap gap-1.5">
      {options.map((o) => (
        <button
          key={o}
          type="button"
          onClick={() => lab.setSelection(selKey, o)}
          className={`rounded-full border px-2.5 py-1.5 text-xs font-medium transition ${chosen === o ? "border-[var(--color-accent)] bg-[var(--color-accent-soft)] text-[var(--color-ink)]" : "border-[var(--color-border)] text-[var(--color-ink)]"}`}
        >
          {o}
        </button>
      ))}
    </div>
  );
}

export function PracticeStudio({ lab }: { lab: LabProgressApi }) {
  const [mode, setMode] = useState<Mode>("A");

  return (
    <div className="space-y-4 pb-10">
      <div>
        <h1 className="text-lg font-black text-[var(--color-ink)]">Practice studio</h1>
        <p className="mt-1 text-sm text-[var(--color-slate)]">Deliberate rehearsal, not examination — every mode is click-and-compare.</p>
      </div>

      <div className="flex flex-wrap gap-1.5">
        {modes.map((m) => (
          <button
            key={m.id}
            type="button"
            onClick={() => setMode(m.id)}
            className={`rounded-full border px-3 py-1.5 text-xs font-bold transition ${mode === m.id ? "border-[var(--color-accent)] bg-[var(--color-accent-soft)] text-[var(--color-ink)]" : "border-[var(--color-border)] text-[var(--color-slate)]"}`}
          >
            Mode {m.id}
          </button>
        ))}
      </div>

      <LabCard>
        <p className="text-sm font-bold text-[var(--color-ink)]">{modes.find((m) => m.id === mode)!.title}</p>
        <p className="text-xs text-[var(--color-slate)]">{modes.find((m) => m.id === mode)!.detail}</p>
      </LabCard>

      {mode === "A" && <ModeA lab={lab} />}
      {mode === "B" && <ModeB lab={lab} />}
      {mode === "C" && <ModeC lab={lab} />}
      {mode === "D" && <ModeD lab={lab} />}
      {mode === "E" && <ModeE lab={lab} />}
    </div>
  );
}

function ModeA({ lab }: { lab: LabProgressApi }) {
  const prompt = lab.state.selections["practice-a-prompt"] ?? "";
  const sprint = framingSprints.find((f) => f.prompt === prompt);
  return (
    <LabCard>
      <LabLabel>Pick a prompt</LabLabel>
      <PickOne options={framingSprints.map((f) => f.prompt)} selKey="practice-a-prompt" lab={lab} />
      {sprint && (
        <div className="mt-3">
          <ChoiceReveal
            options={[
              { id: "weak", text: sprint.weak, note: "Centers the product's own activity, not the person's outcome." },
              { id: "strong", text: sprint.strong, note: "Names a specific person, state, and outcome.", strongest: true },
            ]}
            selected={lab.state.selections[`practice-a-pick-${prompt}`] ?? null}
            onSelect={(id) => lab.setSelection(`practice-a-pick-${prompt}`, id)}
          />
        </div>
      )}
    </LabCard>
  );
}

function ModeB({ lab }: { lab: LabProgressApi }) {
  const flow = lab.state.selections["practice-b-flow"] ?? "";
  return (
    <LabCard>
      <LabLabel>Pick a flow to zoom out from</LabLabel>
      <PickOne options={teardownFlows} selKey="practice-b-flow" lab={lab} />
      {flow && (
        <div className="mt-3 space-y-4">
          {teardownQuestions.map((tq, i) => (
            <div key={tq.question}>
              <p className="text-sm font-bold text-[var(--color-ink)]">{tq.question}</p>
              <div className="mt-1.5">
                <ChoiceReveal options={tq.options} selected={lab.state.selections[`practice-b-${flow}-${i}`] ?? null} onSelect={(id) => lab.setSelection(`practice-b-${flow}-${i}`, id)} />
              </div>
            </div>
          ))}
        </div>
      )}
    </LabCard>
  );
}

function ModeC({ lab }: { lab: LabProgressApi }) {
  const kase = lab.state.selections["practice-c-case"] ?? "";
  const items = reconstructionItems.map((it, i) => ({ id: `rc-${i}`, text: it.text, correctColumn: it.correctColumn }));
  const assignments: Record<string, number | undefined> = {};
  for (const it of items) {
    const v = lab.state.selections[`practice-c-${kase}-${it.id}`];
    if (v !== undefined) assignments[it.id] = Number(v);
  }
  return (
    <LabCard>
      <LabLabel>Pick a suggested case</LabLabel>
      <PickOne options={reconstructionCases} selKey="practice-c-case" lab={lab} />
      {kase && (
        <div className="mt-3">
          <p className="text-xs text-[var(--color-slate)]">Sort these example statements by how confident each one really is.</p>
          <div className="mt-2">
            <EvidenceBoard columns={reconstructionColumns} items={items} assignments={assignments} checkable onAssign={(id, col) => lab.setSelection(`practice-c-${kase}-${id}`, String(col))} />
          </div>
        </div>
      )}
    </LabCard>
  );
}

function ModeD({ lab }: { lab: LabProgressApi }) {
  const chosen = lab.state.selections["practice-d-pain"] ?? "";
  const pain = opportunityClinicPainPoints.find((p) => p.text === chosen);
  const revealed = lab.state.hints[`practice-d-${chosen}`] ?? 0;
  return (
    <LabCard>
      <LabLabel>Pick a pain point</LabLabel>
      <PickOne options={opportunityClinicPainPoints.map((p) => p.text)} selKey="practice-d-pain" lab={lab} />
      {pain && (
        <div className="mt-3">
          <p className="text-xs text-[var(--color-slate)]">Click through to see it rewritten across all four forms.</p>
          <div className="mt-2 space-y-1.5">
            {pain.forms.slice(0, revealed || 1).map((f) => (
              <div key={f.label} className="animate-fade-in-up rounded-lg bg-black/[0.03] p-2.5">
                <p className="text-[10px] font-bold uppercase tracking-wide text-[var(--color-slate)]">{f.label}</p>
                <p className="text-sm text-[var(--color-ink)]">{f.text}</p>
              </div>
            ))}
          </div>
          {revealed < pain.forms.length && (
            <button type="button" onClick={() => lab.revealNextHint(`practice-d-${chosen}`)} className="mt-2 w-full rounded-xl border-2 border-dashed border-[var(--color-accent)] py-2 text-xs font-bold text-[var(--color-accent)]">
              Show the next form
            </button>
          )}
        </div>
      )}
    </LabCard>
  );
}

function ModeE({ lab }: { lab: LabProgressApi }) {
  const prompt = lab.state.selections["practice-e-prompt"] ?? "";
  const item = interviewRehearsalPrompts.find((p) => p.prompt === prompt);
  const revealed = !!lab.state.flags[`practice-e-${prompt}`];
  return (
    <LabCard>
      <LabLabel>Pick a prompt and think through your approach silently first</LabLabel>
      <PickOne options={interviewRehearsalPrompts.map((p) => p.prompt)} selKey="practice-e-prompt" lab={lab} />
      {item && (
        <div className="mt-3">
          {!revealed ? (
            <button type="button" onClick={() => lab.setFlag(`practice-e-${prompt}`)} className="w-full rounded-xl border-2 border-dashed border-[var(--color-accent)] py-2.5 text-xs font-bold text-[var(--color-accent)]">
              Compare with one possible outline
            </button>
          ) : (
            <ul className="animate-fade-in-up space-y-1 rounded-xl bg-[var(--color-accent-2-soft)] p-3 text-xs text-[var(--color-ink)]">
              {item.outline.map((o) => (
                <li key={o}>• {o}</li>
              ))}
            </ul>
          )}
        </div>
      )}
    </LabCard>
  );
}
