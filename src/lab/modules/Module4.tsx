import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { ModuleHeader } from "@/lab/components/ModuleHeader";
import { ContinueButton } from "@/lab/components/ContinueButton";
import { LabCard, LabLabel } from "@/lab/components/Card";
import { TimelineSlider } from "@/lab/components/TimelineSlider";
import { RevealSteps } from "@/lab/components/RevealSteps";
import { ChoiceReveal } from "@/lab/components/ChoiceReveal";
import { OrderableList } from "@/lab/components/OrderableList";
import { EvidenceBoard } from "@/lab/components/EvidenceBoard";
import { ReadingList } from "@/lab/components/ReadingList";
import { useModuleSection } from "@/lab/state/useModuleSection";
import type { LabProgressApi } from "@/lab/state/useLabProgress";
import { module4Reading } from "@/lab/data/readingRoom";
import {
  rahulIntro,
  rahulJourney,
  successBoundaries,
  successBoundaryLesson,
  analysisLenses,
  rootCauseExample,
  opportunityForms,
  candidateOpportunities,
  priorityRationale,
  interventionCategories,
  secondOrderQuestions,
  metricLevels,
  metricSortItems,
  activationTeaching,
} from "@/lab/data/module4";

const TOTAL = 9;

export function Module4({ lab }: { lab: LabProgressApi }) {
  const { section, setSection } = useModuleSection(lab, "m4");
  return (
    <div className="space-y-4 pb-24">
      <ModuleHeader eyebrow="Module 4 · Find the Leverage" question="Which moment deserves attention, and why?" section={section} totalSections={TOTAL} trace="C" />

      {section === 1 && <SceneBoundary lab={lab} />}
      {section === 2 && <SceneLenses />}
      {section === 3 && <SceneRootCause lab={lab} />}
      {section === 4 && <SceneOpportunity />}
      {section === 5 && <ScenePrioritize lab={lab} />}
      {section === 6 && <SceneInterventions lab={lab} />}
      {section === 7 && <SceneMetrics lab={lab} />}
      {section === 8 && <SceneActivation />}
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

function SceneBoundary({ lab }: { lab: LabProgressApi }) {
  const value = lab.state.timeline["m4-boundary"] ?? 15;
  const revealed = !!lab.state.flags["m4-boundary-revealed"];
  return (
    <LabCard>
      <p className="text-sm text-[var(--color-ink)]">{rahulIntro}</p>
      <ol className="mt-2 space-y-1 text-xs text-[var(--color-ink)]">
        {rahulJourney.map((step, i) => (
          <li key={step}>
            {i + 1}. {step}
          </li>
        ))}
      </ol>
      <LabLabel>Where should “success” be measured?</LabLabel>
      <TimelineSlider value={value} onChange={(v) => lab.setTimeline("m4-boundary", v)} ticks={successBoundaries} ariaLabel="Success boundary" />
      {!revealed ? (
        <button type="button" onClick={() => lab.setFlag("m4-boundary-revealed")} className="mt-3 w-full rounded-xl border-2 border-dashed border-[var(--color-accent)] py-2.5 text-xs font-bold text-[var(--color-accent)] hover:bg-[var(--color-accent-soft)]">
          See what this choice reveals
        </button>
      ) : (
        <p className="mt-3 animate-fade-in-up rounded-xl bg-[var(--color-accent-2-soft)] p-3 text-sm text-[var(--color-ink)]">{successBoundaryLesson}</p>
      )}
    </LabCard>
  );
}

function SceneLenses() {
  const [openId, setOpenId] = useState<string | null>(analysisLenses[0].id);
  return (
    <LabCard>
      <h2 className="text-sm font-bold text-[var(--color-ink)]">Seven analysis lenses</h2>
      <div className="mt-2 space-y-2">
        {analysisLenses.map((lens) => {
          const open = openId === lens.id;
          return (
            <div key={lens.id} className="rounded-xl border border-[var(--color-border)]">
              <button type="button" onClick={() => setOpenId(open ? null : lens.id)} className="flex w-full items-center justify-between p-3 text-left">
                <span className="text-sm font-bold text-[var(--color-ink)]">{lens.title}</span>
                <ChevronDown size={14} className={`shrink-0 text-[var(--color-slate)] transition-transform ${open ? "rotate-180" : ""}`} />
              </button>
              {open && (
                <div className="animate-fade-in-up space-y-1.5 border-t border-[var(--color-border)] p-3">
                  <p className="text-xs italic text-[var(--color-ink)]">{lens.ask}</p>
                  <ul className="space-y-0.5 text-xs text-[var(--color-slate)]">
                    {lens.inCase.map((c) => (
                      <li key={c}>• {c}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </LabCard>
  );
}

function SceneRootCause({ lab }: { lab: LabProgressApi }) {
  const revealed = lab.state.hints["m4-ladder"] ?? 0;
  return (
    <LabCard>
      <h2 className="text-sm font-bold text-[var(--color-ink)]">Root-cause ladder</h2>
      <p className="mt-1 rounded-xl bg-black/[0.03] p-3 text-sm font-bold text-[var(--color-ink)]">Visible problem: {rootCauseExample.problem}</p>
      <p className="mt-2 text-xs text-[var(--color-slate)]">Click through “What made that consequential?” one rung at a time, descending toward structural causes.</p>
      <div className="mt-3">
        <RevealSteps steps={rootCauseExample.ladder} revealed={revealed} onRevealNext={() => lab.revealNextHint("m4-ladder")} buttonLabel="What made that consequential?" />
      </div>
      <p className="mt-2 text-xs italic text-[var(--color-slate)]">A root-cause ladder is a research agenda, not proof.</p>
    </LabCard>
  );
}

function SceneOpportunity() {
  return (
    <LabCard>
      <h2 className="text-sm font-bold text-[var(--color-ink)]">Opportunity statements</h2>
      <div className="mt-2 space-y-2">
        {opportunityForms.map((f) => (
          <div key={f.level} className="rounded-xl bg-black/[0.03] p-3">
            <p className="text-xs font-bold text-[var(--color-ink)]">{f.level}</p>
            <p className="mt-1 text-sm text-[var(--color-ink)]">&ldquo;{f.text}&rdquo;</p>
            <p className="mt-1 text-xs text-[var(--color-slate)]">{f.note}</p>
          </div>
        ))}
      </div>
    </LabCard>
  );
}

function ScenePrioritize({ lab }: { lab: LabProgressApi }) {
  const order = lab.state.multi["m4-priority-order"]?.length ? lab.state.multi["m4-priority-order"] : candidateOpportunities.map((o) => o.id);
  const items = order.map((id) => candidateOpportunities.find((o) => o.id === id)!).filter(Boolean).map((o) => ({ id: o.id, text: `${o.text} (${o.reach})` }));
  const revealed = !!lab.state.flags["m4-priority-revealed"];

  function move(id: string, dir: -1 | 1) {
    const idx = order.indexOf(id);
    const next = [...order];
    const swapWith = idx + dir;
    if (swapWith < 0 || swapWith >= next.length) return;
    [next[idx], next[swapWith]] = [next[swapWith], next[idx]];
    lab.setMulti("m4-priority-order", next);
  }

  return (
    <LabCard>
      <h2 className="text-sm font-bold text-[var(--color-ink)]">Prioritization studio</h2>
      <p className="mt-1 text-xs text-[var(--color-slate)]">Four candidate opportunities from Rahul's case. Reorder them from most to least worth investigating.</p>
      <div className="mt-2">
        <LabLabel>Consider: user impact, frequency, journey leverage, strategic relevance, evidence confidence</LabLabel>
        <OrderableList items={items} onMove={move} />
      </div>
      {!revealed ? (
        <button type="button" onClick={() => lab.setFlag("m4-priority-revealed")} className="mt-3 w-full rounded-xl border-2 border-dashed border-[var(--color-accent)] py-2.5 text-xs font-bold text-[var(--color-accent)] hover:bg-[var(--color-accent-soft)]">
          Compare with a possible ranking
        </button>
      ) : (
        <p className="mt-3 animate-fade-in-up rounded-xl bg-[var(--color-accent-2-soft)] p-3 text-xs text-[var(--color-ink)]">{priorityRationale}</p>
      )}
      <p className="mt-2 text-xs italic text-[var(--color-slate)]">Feasibility is a second, separate conversation — don't confuse importance with implementation ease.</p>
    </LabCard>
  );
}

function SceneInterventions({ lab }: { lab: LabProgressApi }) {
  return (
    <LabCard>
      <h2 className="text-sm font-bold text-[var(--color-ink)]">Interventions as a portfolio, not a feature contest</h2>
      <p className="mt-1 text-xs text-[var(--color-slate)]">For each category, pick the intervention that best fits Rahul's actual situation.</p>
      <div className="mt-2 space-y-4">
        {interventionCategories.map((c) => (
          <div key={c.key}>
            <p className="text-sm font-bold text-[var(--color-ink)]">{c.label}</p>
            <p className="text-xs text-[var(--color-slate)]">{c.detail}</p>
            <div className="mt-1.5">
              <ChoiceReveal options={c.options} selected={lab.state.selections[`m4-intervention-${c.key}`] ?? null} onSelect={(id) => lab.setSelection(`m4-intervention-${c.key}`, id)} />
            </div>
          </div>
        ))}
      </div>
      <LabLabel>Second-order effects to examine</LabLabel>
      <ul className="space-y-1 text-xs text-[var(--color-ink)]">
        {secondOrderQuestions.map((q) => (
          <li key={q}>• {q}</li>
        ))}
      </ul>
    </LabCard>
  );
}

function SceneMetrics({ lab }: { lab: LabProgressApi }) {
  const items = metricSortItems.map((it, i) => ({ id: `metric-${i}`, text: it.text, correctColumn: it.correctColumn }));
  const assignments: Record<string, number | undefined> = {};
  for (const it of items) {
    const v = lab.state.selections[`m4-metric-${it.id}`];
    if (v !== undefined) assignments[it.id] = Number(v);
  }
  return (
    <LabCard>
      <h2 className="text-sm font-bold text-[var(--color-ink)]">Connecting the journey to metrics</h2>
      <p className="mt-1 text-xs text-[var(--color-slate)]">Sort each candidate metric into the level it belongs to.</p>
      <div className="mt-2 space-y-1.5">
        {metricLevels.map((m) => (
          <p key={m.level} className="text-xs text-[var(--color-slate)]">
            <span className="font-bold text-[var(--color-ink)]">{m.level}: </span>
            {m.question}
          </p>
        ))}
      </div>
      <div className="mt-3">
        <EvidenceBoard columns={metricLevels.map((m) => m.level)} items={items} assignments={assignments} checkable onAssign={(id, col) => lab.setSelection(`m4-metric-${id}`, String(col))} />
      </div>
      <p className="mt-2 text-xs italic text-[var(--color-slate)]">Pair perception (NPS, satisfaction) with behavior and operational reality — never treat it as the only outcome.</p>
    </LabCard>
  );
}

function SceneActivation() {
  return (
    <LabCard>
      <h2 className="text-sm font-bold text-[var(--color-ink)]">Activation as a journey milestone — a Spotify transfer</h2>
      <p className="mt-2 text-xs text-[var(--color-ink)]">
        <span className="font-bold text-[var(--color-danger)]">Weak: </span>
        {activationTeaching.weak}
      </p>
      <p className="mt-1 text-xs text-[var(--color-ink)]">
        <span className="font-bold text-[var(--color-success)]">More useful: </span>
        {activationTeaching.better}
      </p>
      <div className="mt-3 space-y-1.5">
        {activationTeaching.terms.map((t) => (
          <p key={t.term} className="text-xs text-[var(--color-ink)]">
            <span className="font-bold">{t.term}: </span>
            {t.def}
          </p>
        ))}
      </div>
      <p className="mt-2 text-xs italic text-[var(--color-slate)]">These terms are related but not interchangeable.</p>
    </LabCard>
  );
}

function SceneRecap({ lab }: { lab: LabProgressApi }) {
  const order = lab.state.multi["m4-priority-order"]?.length ? lab.state.multi["m4-priority-order"] : candidateOpportunities.map((o) => o.id);
  const top = candidateOpportunities.find((o) => o.id === order[0]);
  const chosenInterventions = interventionCategories.map((c) => ({
    label: c.label,
    pick: c.options.find((o) => o.id === lab.state.selections[`m4-intervention-${c.key}`])?.text,
  }));
  return (
    <div className="space-y-4">
      <LabCard>
        <p className="text-xs font-bold uppercase tracking-wide text-[var(--color-accent)]">Your Prioritized Opportunity Brief</p>
        {top && (
          <p className="mt-2 text-sm text-[var(--color-ink)]">
            Top priority: <span className="font-bold">{top.text}</span>
          </p>
        )}
        {chosenInterventions.some((c) => c.pick) && (
          <ul className="mt-2 space-y-1 text-xs text-[var(--color-ink)]">
            {chosenInterventions
              .filter((c) => c.pick)
              .map((c) => (
                <li key={c.label}>
                  <span className="font-bold">{c.label}: </span>
                  {c.pick}
                </li>
              ))}
          </ul>
        )}
        <p className="mt-2 text-xs text-[var(--color-slate)]">This brief is built from your ranking and your intervention picks — the model you assembled, not typed.</p>
      </LabCard>
      <LabCard>
        <p className="text-xs font-bold uppercase tracking-wide text-[var(--color-slate)]">Recommended reading</p>
        <div className="mt-2">
          <ReadingList links={module4Reading} />
        </div>
      </LabCard>
    </div>
  );
}
