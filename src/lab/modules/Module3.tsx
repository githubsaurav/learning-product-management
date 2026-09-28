import { useState } from "react";
import { ModuleHeader } from "@/lab/components/ModuleHeader";
import { ContinueButton } from "@/lab/components/ContinueButton";
import { LabCard, LabLabel } from "@/lab/components/Card";
import { NoteComposer } from "@/lab/components/NoteComposer";
import { OrderableList } from "@/lab/components/OrderableList";
import { ArtifactCard } from "@/lab/components/ArtifactCard";
import { ExpertOverlay } from "@/lab/components/ExpertOverlay";
import { ReadingList } from "@/lab/components/ReadingList";
import { useModuleSection } from "@/lab/state/useModuleSection";
import type { LabProgressApi } from "@/lab/state/useLabProgress";
import { journeyMapArtifact, journeyStageTemplate } from "@/lab/data/artifacts";
import { module3Reading } from "@/lab/data/readingRoom";
import { airbnbIntro, fragments, stageModel, funnelWhyNot, layerTeachings, referenceMap, futureStateGoal, futureInterventions, mapVisualRules } from "@/lab/data/module3";

const TOTAL = 9;
const CASE_LABEL = "Module 3 · Nisha & Kabir's Airbnb weekend";
const CONTROL_TAGS = ["Controls", "Influences", "Acknowledges only"];

export function Module3({ lab }: { lab: LabProgressApi }) {
  const { section, setSection } = useModuleSection(lab, "m3");
  return (
    <div className="space-y-4 pb-24">
      <ModuleHeader eyebrow="Module 3 · Build the Map" question="How do we turn messy reality into a useful model?" section={section} totalSections={TOTAL} trace="A" />

      {section === 1 && <SceneFragments lab={lab} />}
      {section === 2 && <SceneSpine lab={lab} />}
      {section === 3 && <SceneStages lab={lab} />}
      {section === 4 && <SceneLayers />}
      {section === 5 && <SceneDraftStages lab={lab} />}
      {section === 6 && <SceneReferenceMap lab={lab} />}
      {section === 7 && <SceneFutureState lab={lab} />}
      {section === 8 && <SceneVisualRules />}
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

function SceneFragments({ lab }: { lab: LabProgressApi }) {
  const opened = lab.state.multi["m3-fragments"] ?? [];
  return (
    <LabCard>
      <p className="text-sm text-[var(--color-ink)]">{airbnbIntro}</p>
      <LabLabel>Twelve fragments, scattered like photographs and messages — open them in any order</LabLabel>
      <div className="grid gap-1.5 sm:grid-cols-2">
        {fragments.map((f, i) => {
          const open = opened.includes(f.id);
          return (
            <button
              key={f.id}
              type="button"
              onClick={() => lab.toggleMulti("m3-fragments", f.id)}
              className={`rounded-xl border p-2.5 text-left text-xs transition ${open ? "border-[var(--color-accent)] bg-[var(--color-accent-soft)] text-[var(--color-ink)]" : "border-[var(--color-border)] text-[var(--color-slate)]"}`}
            >
              <span className="font-bold">{i + 1}.</span> {f.text}
            </button>
          );
        })}
      </div>
    </LabCard>
  );
}

function SceneSpine({ lab }: { lab: LabProgressApi }) {
  const order = lab.state.multi["m3-spine"]?.length ? lab.state.multi["m3-spine"] : fragments.map((f) => f.id);
  const items = order.map((id) => fragments.find((f) => f.id === id)!).filter(Boolean);

  function move(id: string, dir: -1 | 1) {
    const idx = order.indexOf(id);
    const next = [...order];
    const swapWith = idx + dir;
    if (swapWith < 0 || swapWith >= next.length) return;
    [next[idx], next[swapWith]] = [next[swapWith], next[idx]];
    lab.setMulti("m3-spine", next);
  }

  return (
    <LabCard>
      <h2 className="text-sm font-bold text-[var(--color-ink)]">Find the spine</h2>
      <p className="mt-1 text-xs text-[var(--color-slate)]">
        The spine is the minimum sequence of user actions and decisions required to tell the journey coherently. Arrange the fragments chronologically — use the arrows to reorder.
      </p>
      <div className="mt-3">
        <OrderableList items={items} onMove={move} />
      </div>
      <div className="mt-3">
        <NoteComposer prompt="Note anything uncertain about the order (e.g. items that probably repeated, or aren't strictly linear)" withLabel={false} onSave={(text) => lab.addNote("m3", CASE_LABEL, "note", text)} />
      </div>
    </LabCard>
  );
}

function SceneStages({ lab }: { lab: LabProgressApi }) {
  const guess = lab.state.freeText["m3-stage-guess"] ?? "";
  return (
    <LabCard>
      <h2 className="text-sm font-bold text-[var(--color-ink)]">Name stages by user progress</h2>
      <p className="mt-1 text-xs text-[var(--color-slate)]">Before seeing a model, where would you draw boundaries — where does the person's subgoal change?</p>
      <textarea
        value={guess}
        onChange={(e) => lab.setFreeText("m3-stage-guess", e.target.value)}
        rows={3}
        placeholder="Describe where you'd split the journey into stages…"
        className="mt-2 w-full resize-none rounded-lg border border-[var(--color-border)] p-2.5 text-sm text-[var(--color-ink)] outline-none focus-visible:border-[var(--color-accent)]"
      />
      {guess && (
        <div className="mt-4 animate-fade-in-up space-y-2">
          <LabLabel>A possible model</LabLabel>
          <ol className="space-y-1.5">
            {stageModel.map((s, i) => (
              <li key={s.name} className="rounded-lg bg-black/[0.03] p-2.5 text-sm">
                <span className="font-bold text-[var(--color-ink)]">
                  {i + 1}. {s.name}
                </span>
                <span className="text-[var(--color-slate)]"> — {s.subgoal}</span>
              </li>
            ))}
          </ol>
          <p className="text-xs italic text-[var(--color-slate)]">{funnelWhyNot}</p>
        </div>
      )}
    </LabCard>
  );
}

function SceneLayers() {
  return (
    <LabCard>
      <h2 className="text-sm font-bold text-[var(--color-ink)]">Add the layers, one at a time</h2>
      <div className="mt-2 space-y-3">
        {layerTeachings.map((l) => (
          <div key={l.key} className="rounded-xl border border-[var(--color-border)] p-3">
            <p className="text-sm font-bold text-[var(--color-ink)]">
              Layer {l.key} — {l.title.split(" — ")[1] ?? l.title}
            </p>
            <ul className="mt-1 space-y-0.5 text-xs text-[var(--color-slate)]">
              {l.examples.map((e) => (
                <li key={e}>• {e}</li>
              ))}
            </ul>
            {l.note && <p className="mt-1 text-xs italic text-[var(--color-ink)]">{l.note}</p>}
          </div>
        ))}
      </div>
    </LabCard>
  );
}

function SceneDraftStages({ lab }: { lab: LabProgressApi }) {
  const [count, setCount] = useState(3);
  return (
    <div className="space-y-3">
      <LabCard>
        <h2 className="text-sm font-bold text-[var(--color-ink)]">Draft your own stages</h2>
        <p className="mt-1 text-xs text-[var(--color-slate)]">Fill in what you can for a few stages. Partial is fine — this becomes part of your map artifact.</p>
      </LabCard>
      {Array.from({ length: count }).map((_, i) => {
        const artifactId = `m3-stage-${i}`;
        const values = lab.state.artifacts[artifactId] ?? {};
        return <ArtifactCard key={artifactId} def={{ ...journeyStageTemplate, id: artifactId, title: `${journeyStageTemplate.title} ${i + 1}` }} values={values} onChange={(k, v) => lab.setArtifactField(artifactId, k, v)} />;
      })}
      {count < 6 && (
        <button type="button" onClick={() => setCount((c) => c + 1)} className="w-full rounded-xl border border-dashed border-[var(--color-border)] py-2.5 text-xs font-bold text-[var(--color-slate)]">
          + Add another stage
        </button>
      )}
    </div>
  );
}

function SceneReferenceMap({ lab }: { lab: LabProgressApi }) {
  const revealed = !!lab.state.overlays["m3-reference-map"];
  return (
    <LabCard>
      <h2 className="text-sm font-bold text-[var(--color-ink)]">The full example map</h2>
      <p className="mt-1 text-xs text-[var(--color-slate)]">Compare your draft with a fuller reference — once you've built your own.</p>
      <div className="mt-3">
        <ExpertOverlay revealed={revealed} onReveal={() => lab.revealOverlay("m3-reference-map")}>
          <div className="overflow-x-auto">
            <table className="w-full text-[11px]">
              <thead>
                <tr className="border-b border-[var(--color-border)] text-left text-[var(--color-slate)]">
                  <th className="py-1 pr-2">Layer</th>
                  {referenceMap.stages.map((s) => (
                    <th key={s} className="py-1 pr-2">
                      {s}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {referenceMap.rows.map((row) => (
                  <tr key={row.row} className="border-b border-[var(--color-border)] align-top last:border-0">
                    <td className="py-1.5 pr-2 font-bold text-[var(--color-ink)]">{row.row}</td>
                    {row.values.map((v, i) => (
                      <td key={i} className="py-1.5 pr-2 text-[var(--color-slate)]">
                        {v}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </ExpertOverlay>
      </div>
    </LabCard>
  );
}

function SceneFutureState({ lab }: { lab: LabProgressApi }) {
  const tags = lab.state.selections;
  return (
    <LabCard>
      <h2 className="text-sm font-bold text-[var(--color-ink)]">Future-state studio</h2>
      <p className="mt-1 text-xs text-[var(--color-slate)]">Redesign only the transition: booking → preparing to arrive.</p>
      <div className="mt-2 rounded-xl bg-[var(--color-accent-2-soft)] p-3 text-xs text-[var(--color-ink)]">{futureStateGoal}</div>
      <div className="mt-3">
        <NoteComposer prompt="State the desired future in your own experiential terms first" withLabel={false} onSave={(text) => lab.addNote("m3", CASE_LABEL, "note", `Future state: ${text}`)} />
      </div>
      <LabLabel>Possible interventions — mark what Airbnb controls, influences, or must merely acknowledge</LabLabel>
      <div className="space-y-2">
        {futureInterventions.map((intervention) => {
          const key = `m3-future-${intervention}`;
          return (
            <div key={intervention} className="rounded-lg border border-[var(--color-border)] p-2.5">
              <p className="text-xs font-semibold text-[var(--color-ink)]">{intervention}</p>
              <div className="mt-1 flex gap-1.5">
                {CONTROL_TAGS.map((tag) => (
                  <button
                    key={tag}
                    type="button"
                    onClick={() => lab.setSelection(key, tag)}
                    className={`rounded-full border px-2 py-0.5 text-[10px] font-bold transition ${
                      tags[key] === tag ? "border-[var(--color-accent-2)] bg-[var(--color-accent-2-soft)] text-[var(--color-accent-2)]" : "border-[var(--color-border)] text-[var(--color-slate)]"
                    }`}
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </LabCard>
  );
}

function SceneVisualRules() {
  return (
    <LabCard>
      <h2 className="text-sm font-bold text-[var(--color-ink)]">Visual-design rules for maps</h2>
      <ol className="mt-2 space-y-1 text-sm text-[var(--color-ink)]">
        {mapVisualRules.map((r, i) => (
          <li key={r}>
            {i + 1}. {r}
          </li>
        ))}
      </ol>
    </LabCard>
  );
}

function SceneArtifact({ lab }: { lab: LabProgressApi }) {
  const values = lab.state.artifacts[journeyMapArtifact.id] ?? {};
  return (
    <div className="space-y-4">
      <ArtifactCard def={journeyMapArtifact} values={values} onChange={(k, v) => lab.setArtifactField(journeyMapArtifact.id, k, v)} />
      <LabCard>
        <p className="text-xs font-bold uppercase tracking-wide text-[var(--color-slate)]">Recommended reading</p>
        <div className="mt-2">
          <ReadingList links={module3Reading} />
        </div>
      </LabCard>
    </div>
  );
}
