import { useState } from "react";
import { ModuleHeader } from "@/lab/components/ModuleHeader";
import { ContinueButton } from "@/lab/components/ContinueButton";
import { LabCard, LabLabel } from "@/lab/components/Card";
import { OrderableList } from "@/lab/components/OrderableList";
import { BoundaryInserter } from "@/lab/components/BoundaryInserter";
import { EvidenceBoard } from "@/lab/components/EvidenceBoard";
import { ChoiceReveal } from "@/lab/components/ChoiceReveal";
import { ExpertOverlay } from "@/lab/components/ExpertOverlay";
import { FrameworkBadge } from "@/lab/components/FrameworkBadge";
import { ReadingList } from "@/lab/components/ReadingList";
import { useModuleSection } from "@/lab/state/useModuleSection";
import type { LabProgressApi } from "@/lab/state/useLabProgress";
import { module3Reading } from "@/lab/data/readingRoom";
import { airbnbIntro, fragments, stageModel, funnelWhyNot, layerTeachings, referenceMap, sortableLayers, futureStateGoal, futureStateChoices, futureInterventions, mapVisualRules } from "@/lab/data/module3";

const TOTAL = 8;
const CONTROL_TAGS = ["Controls", "Influences", "Acknowledges only"];

export function Module3({ lab }: { lab: LabProgressApi }) {
  const { section, setSection } = useModuleSection(lab, "m3");
  return (
    <div className="space-y-4 pb-24">
      <ModuleHeader eyebrow="Module 3 · Build the Map" question="How do we turn messy reality into a useful model?" section={section} totalSections={TOTAL} />

      {section === 1 && <SceneFragments lab={lab} />}
      {section === 2 && <SceneSpineAndStages lab={lab} />}
      {section === 3 && <SceneLayers />}
      {section === 4 && <SceneMapBuilder lab={lab} />}
      {section === 5 && <SceneReferenceMap lab={lab} />}
      {section === 6 && <SceneFutureState lab={lab} />}
      {section === 7 && <SceneVisualRules />}
      {section === 8 && <SceneRecap lab={lab} />}

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

function SceneSpineAndStages({ lab }: { lab: LabProgressApi }) {
  const order = lab.state.multi["m3-spine"]?.length ? lab.state.multi["m3-spine"] : fragments.map((f) => f.id);
  const items = order.map((id) => fragments.find((f) => f.id === id)!).filter(Boolean);
  const boundaries = (lab.state.multi["m3-boundaries"] ?? []).map(Number);

  function move(id: string, dir: -1 | 1) {
    const idx = order.indexOf(id);
    const next = [...order];
    const swapWith = idx + dir;
    if (swapWith < 0 || swapWith >= next.length) return;
    [next[idx], next[swapWith]] = [next[swapWith], next[idx]];
    lab.setMulti("m3-spine", next);
  }

  function toggleBoundary(index: number) {
    const set = new Set(boundaries);
    if (set.has(index)) set.delete(index);
    else set.add(index);
    lab.setMulti("m3-boundaries", [...set].map(String));
  }

  return (
    <LabCard>
      <h2 className="text-sm font-bold text-[var(--color-ink)]">Find the spine, then mark the stages</h2>
      <p className="mt-1 text-xs text-[var(--color-slate)]">Reorder the fragments chronologically with the arrows, then tap between two fragments to mark where a stage boundary goes — where the person's subgoal changes.</p>
      <div className="mt-3">
        <OrderableList items={items} onMove={move} />
      </div>
      <div className="mt-4 rounded-xl bg-black/[0.03] p-3">
        <LabLabel>Insert stage boundaries</LabLabel>
        <BoundaryInserter items={items} boundariesAfter={boundaries} onToggle={toggleBoundary} />
      </div>
      {boundaries.length > 0 && (
        <div className="mt-4 animate-fade-in-up space-y-2">
          <LabLabel>A possible model (six stages)</LabLabel>
          <ol className="space-y-1.5">
            {stageModel.map((s, i) => (
              <li key={s.name} className="rounded-lg bg-[var(--color-accent-2-soft)] p-2.5 text-sm">
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
      <FrameworkBadge name="The 5 components of a journey map" source="Nielsen Norman Group, “Journey Mapping 101”">
        <p>NN/g names five real components: <span className="font-bold">Actor, Scenario + Expectations, Journey Phases, Actions/Mindsets/Emotions, and Opportunities.</span> The seven layers below are a more granular version of the same idea — they group into those five.</p>
      </FrameworkBadge>
      <h2 className="mt-3 text-sm font-bold text-[var(--color-ink)]">Add the layers, one at a time</h2>
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

function SceneMapBuilder({ lab }: { lab: LabProgressApi }) {
  const [layerIndex, setLayerIndex] = useState(0);
  const layer = sortableLayers[layerIndex];
  const items = layer.items.map((it, i) => ({ id: `${layer.key}-${i}`, text: it.text, correctColumn: it.correctStage }));
  const assignments: Record<string, number | undefined> = {};
  for (const it of items) {
    const v = lab.state.selections[`m3-map-${layer.key}-${it.id}`];
    if (v !== undefined) assignments[it.id] = Number(v);
  }

  return (
    <LabCard>
      <h2 className="text-sm font-bold text-[var(--color-ink)]">Build the map: place each snippet in its stage</h2>
      <p className="mt-1 text-xs text-[var(--color-slate)]">Pick a layer, then sort its statements into the six stage columns.</p>
      <div className="mt-2 flex flex-wrap gap-1.5">
        {sortableLayers.map((l, i) => (
          <button
            key={l.key}
            type="button"
            onClick={() => setLayerIndex(i)}
            className={`rounded-full border px-3 py-1.5 text-xs font-bold transition ${i === layerIndex ? "border-[var(--color-accent)] bg-[var(--color-accent-soft)] text-[var(--color-ink)]" : "border-[var(--color-border)] text-[var(--color-slate)]"}`}
          >
            {l.label}
          </button>
        ))}
      </div>
      <div className="mt-3">
        <EvidenceBoard
          columns={stageModel.map((s) => s.name)}
          items={items}
          assignments={assignments}
          checkable
          onAssign={(id, col) => lab.setSelection(`m3-map-${layer.key}-${id}`, String(col))}
        />
      </div>
    </LabCard>
  );
}

function SceneReferenceMap({ lab }: { lab: LabProgressApi }) {
  const revealed = !!lab.state.overlays["m3-reference-map"];
  return (
    <LabCard>
      <h2 className="text-sm font-bold text-[var(--color-ink)]">The full example map</h2>
      <p className="mt-1 text-xs text-[var(--color-slate)]">Compare your sorted layers with a fuller reference, including layers you didn't sort.</p>
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
  const pick = lab.state.selections["m3-future-pick"] ?? null;
  return (
    <LabCard>
      <h2 className="text-sm font-bold text-[var(--color-ink)]">Future-state studio</h2>
      <p className="mt-1 text-xs text-[var(--color-slate)]">Redesign only the transition: booking → preparing to arrive. First, pick the stronger way to state the desired future.</p>
      <div className="mt-2">
        <ChoiceReveal
          options={[
            { id: "weak", text: futureStateChoices.weak, note: futureStateChoices.note },
            { id: "strong", text: futureStateChoices.strong, note: futureStateChoices.note, strongest: true },
          ]}
          selected={pick}
          onSelect={(id) => lab.setSelection("m3-future-pick", id)}
        />
      </div>
      {pick && <div className="mt-2 rounded-xl bg-black/[0.03] p-2.5 text-xs text-[var(--color-ink)]">{futureStateGoal}</div>}
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

function SceneRecap({ lab }: { lab: LabProgressApi }) {
  let correct = 0;
  let total = 0;
  for (const layer of sortableLayers) {
    for (let i = 0; i < layer.items.length; i++) {
      total++;
      const v = lab.state.selections[`m3-map-${layer.key}-${layer.key}-${i}`];
      if (v !== undefined && Number(v) === layer.items[i].correctStage) correct++;
    }
  }
  return (
    <div className="space-y-4">
      <LabCard>
        <p className="text-xs font-bold uppercase tracking-wide text-[var(--color-accent)]">Your Current-State Journey Map</p>
        <p className="mt-2 text-sm text-[var(--color-ink)]">
          You placed {correct} of {total} snippets in their matching stage across the layers you sorted.
        </p>
        <p className="mt-2 text-xs text-[var(--color-slate)]">This map — your stage boundaries, your sorted layers, and your future-state pick — is the model you built by interacting with the evidence, not by writing about it.</p>
      </LabCard>
      <LabCard>
        <FrameworkBadge name="The 5-Step Customer Journey Mapping Process — completed" source="Kate Kaplan, Nielsen Norman Group">
          <p>You've now done all five real steps across three modules: Aspiration and Allies (Module 1's scope), Internal Investigation and Assumption Formulation and External Research (Module 2's evidence work), and Narrative Visualization (the map you just built here).</p>
        </FrameworkBadge>
      </LabCard>
      <LabCard>
        <p className="text-xs font-bold uppercase tracking-wide text-[var(--color-slate)]">Recommended reading</p>
        <div className="mt-2">
          <ReadingList links={module3Reading} />
        </div>
      </LabCard>
    </div>
  );
}
