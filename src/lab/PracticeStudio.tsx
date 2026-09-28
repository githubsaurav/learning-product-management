import { useState } from "react";
import { LabCard, LabLabel } from "@/lab/components/Card";
import { NoteComposer } from "@/lab/components/NoteComposer";
import type { LabProgressApi } from "@/lab/state/useLabProgress";
import { framingPrompts, teardownFlows, teardownQuestions, reconstructionCases, opportunityClinicForms, interviewRehearsalPrompts } from "@/lab/data/practiceStudio";

type Mode = "A" | "B" | "C" | "D" | "E";

const modes: { id: Mode; title: string; detail: string }[] = [
  { id: "A", title: "Journey framing sprints", detail: "A broad prompt, five minutes, one Journey Frame Card." },
  { id: "B", title: "Journey teardown", detail: "Zoom out from one screen to the whole journey." },
  { id: "C", title: "Evidence reconstruction", detail: "Build an evidence board and mark uncertainty." },
  { id: "D", title: "Opportunity clinic", detail: "Rewrite a pain point through four forms." },
  { id: "E", title: "Interview rehearsal", detail: "Silent whiteboard or typed narration." },
];

export function PracticeStudio({ lab }: { lab: LabProgressApi }) {
  const [mode, setMode] = useState<Mode>("A");

  return (
    <div className="space-y-4 pb-10">
      <div>
        <h1 className="text-lg font-black text-[var(--color-ink)]">Practice studio</h1>
        <p className="mt-1 text-sm text-[var(--color-slate)]">Deliberate rehearsal, not examination.</p>
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

      <RecentPractice lab={lab} mode={mode} />
    </div>
  );
}

function RecentPractice({ lab, mode }: { lab: LabProgressApi; mode: Mode }) {
  const records = lab.state.practice.filter((r) => r.mode === mode).slice(-5).reverse();
  if (records.length === 0) return null;
  return (
    <LabCard>
      <p className="text-xs font-bold uppercase tracking-wide text-[var(--color-slate)]">Saved from this mode</p>
      <div className="mt-2 space-y-2">
        {records.map((r) => (
          <div key={r.id} className="rounded-lg bg-black/[0.03] p-2.5 text-xs">
            <p className="font-bold text-[var(--color-ink)]">{r.prompt}</p>
            <p className="mt-0.5 text-[var(--color-slate)]">{r.response}</p>
          </div>
        ))}
      </div>
    </LabCard>
  );
}

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

function ModeA({ lab }: { lab: LabProgressApi }) {
  const prompt = lab.state.selections["practice-a-prompt"] ?? "";
  return (
    <LabCard>
      <LabLabel>Pick a prompt (~5 minutes)</LabLabel>
      <PickOne options={framingPrompts} selKey="practice-a-prompt" lab={lab} />
      {prompt && (
        <div className="mt-3 space-y-3">
          <NoteComposer prompt={`Write a framing sentence for: "${prompt}"`} withLabel={false} onSave={(text) => lab.addPractice("A", prompt, text)} />
          <NoteComposer prompt="What did you include that changes the journey materially?" withLabel={false} onSave={(text) => lab.addPractice("A", prompt, text)} />
          <NoteComposer prompt="What did you assume?" withLabel={false} onSave={(text) => lab.addPractice("A", prompt, text)} />
          <NoteComposer prompt="What would you need to learn first?" withLabel={false} onSave={(text) => lab.addPractice("A", prompt, text)} />
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
        <div className="mt-3 space-y-3">
          {teardownQuestions.map((q) => (
            <NoteComposer key={q} prompt={q} withLabel={false} onSave={(text) => lab.addPractice("B", flow, `${q} ${text}`)} />
          ))}
        </div>
      )}
    </LabCard>
  );
}

function ModeC({ lab }: { lab: LabProgressApi }) {
  const kase = lab.state.selections["practice-c-case"] ?? "";
  return (
    <LabCard>
      <LabLabel>Pick a suggested case</LabLabel>
      <PickOne options={reconstructionCases} selKey="practice-c-case" lab={lab} />
      {kase && (
        <div className="mt-3 space-y-3">
          <p className="text-xs text-[var(--color-slate)]">Note what you'd expect to find as evidence, and label each note by type.</p>
          <NoteComposer prompt="Add an evidence note" onSave={(text, label) => lab.addNote("practice", `Practice · ${kase}`, "observation", text, label)} />
        </div>
      )}
    </LabCard>
  );
}

function ModeD({ lab }: { lab: LabProgressApi }) {
  const [painPoint, setPainPoint] = useState("");
  return (
    <LabCard>
      <LabLabel>Bring a pain point from any journey</LabLabel>
      <textarea
        value={painPoint}
        onChange={(e) => setPainPoint(e.target.value)}
        rows={2}
        placeholder="Describe the pain point…"
        className="w-full resize-none rounded-lg border border-[var(--color-border)] p-2.5 text-sm text-[var(--color-ink)] outline-none focus-visible:border-[var(--color-accent)]"
      />
      {painPoint && (
        <div className="mt-3 space-y-3">
          {opportunityClinicForms.map((form) => (
            <NoteComposer key={form} prompt={`Rewrite it as: ${form}`} withLabel={false} onSave={(text) => lab.addPractice("D", painPoint, `[${form}] ${text}`)} />
          ))}
          <LabLabel>At least three structurally different interventions</LabLabel>
          {[0, 1, 2].map((i) => (
            <NoteComposer key={i} withLabel={false} placeholder={`Intervention ${i + 1}…`} onSave={(text) => lab.addPractice("D", painPoint, `Intervention: ${text}`)} />
          ))}
        </div>
      )}
    </LabCard>
  );
}

function ModeE({ lab }: { lab: LabProgressApi }) {
  const prompt = lab.state.selections["practice-e-prompt"] ?? "";
  const format = lab.state.selections["practice-e-format"] ?? "Typed narration";
  return (
    <LabCard>
      <LabLabel>Format</LabLabel>
      <PickOne options={["Silent whiteboard", "Typed narration"]} selKey="practice-e-format" lab={lab} />
      <div className="mt-3">
        <LabLabel>Prompt</LabLabel>
        <PickOne options={interviewRehearsalPrompts} selKey="practice-e-prompt" lab={lab} />
      </div>
      {prompt && (
        <div className="mt-3">
          <NoteComposer
            prompt={format === "Silent whiteboard" ? "Sketch your thinking in words — structure over prose" : "Narrate your full response as you would out loud"}
            withLabel={false}
            onSave={(text) => lab.addPractice("E", prompt, text)}
          />
        </div>
      )}
    </LabCard>
  );
}
