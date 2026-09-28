import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { ModuleHeader } from "@/lab/components/ModuleHeader";
import { ContinueButton } from "@/lab/components/ContinueButton";
import { LabCard, LabLabel } from "@/lab/components/Card";
import { NoteComposer } from "@/lab/components/NoteComposer";
import { TimelineSlider } from "@/lab/components/TimelineSlider";
import { RatingRow } from "@/lab/components/RatingRow";
import { ArtifactCard } from "@/lab/components/ArtifactCard";
import { ExpertOverlay } from "@/lab/components/ExpertOverlay";
import { ReadingList } from "@/lab/components/ReadingList";
import { useModuleSection } from "@/lab/state/useModuleSection";
import type { LabProgressApi } from "@/lab/state/useLabProgress";
import { opportunityBriefArtifact } from "@/lab/data/artifacts";
import { module4Reading } from "@/lab/data/readingRoom";
import {
  rahulIntro,
  rahulJourney,
  successBoundaries,
  successBoundaryLesson,
  analysisLenses,
  rootCauseExample,
  opportunityForms,
  prioritizationDimensions,
  interventionCategories,
  secondOrderQuestions,
  metricLevels,
  activationTeaching,
} from "@/lab/data/module4";

const TOTAL = 9;
const CASE_LABEL = "Module 4 · Rahul's headphone return";

export function Module4({ lab }: { lab: LabProgressApi }) {
  const { section, setSection } = useModuleSection(lab, "m4");
  return (
    <div className="space-y-4 pb-24">
      <ModuleHeader eyebrow="Module 4 · Find the Leverage" question="Which moment deserves attention, and why?" section={section} totalSections={TOTAL} trace="C" />

      {section === 1 && <SceneBoundary lab={lab} />}
      {section === 2 && <SceneLenses lab={lab} />}
      {section === 3 && <SceneRootCause lab={lab} />}
      {section === 4 && <SceneOpportunity lab={lab} />}
      {section === 5 && <ScenePrioritize lab={lab} />}
      {section === 6 && <SceneInterventions lab={lab} />}
      {section === 7 && <SceneMetrics lab={lab} />}
      {section === 8 && <SceneActivation />}
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

function SceneBoundary({ lab }: { lab: LabProgressApi }) {
  const value = lab.state.timeline["m4-boundary"] ?? 15;
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
      <NoteComposer prompt="What becomes visible or invisible at this position?" withLabel={false} onSave={(text) => lab.addNote("m4", CASE_LABEL, "note", text)} />
      {lab.state.notebook.some((n) => n.moduleId === "m4") && <p className="mt-3 rounded-xl bg-[var(--color-accent-2-soft)] p-3 text-sm text-[var(--color-ink)]">{successBoundaryLesson}</p>}
    </LabCard>
  );
}

function SceneLenses({ lab }: { lab: LabProgressApi }) {
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
                <div className="animate-fade-in-up space-y-2 border-t border-[var(--color-border)] p-3">
                  <p className="text-xs italic text-[var(--color-ink)]">{lens.ask}</p>
                  <ul className="space-y-0.5 text-xs text-[var(--color-slate)]">
                    {lens.inCase.map((c) => (
                      <li key={c}>• {c}</li>
                    ))}
                  </ul>
                  <NoteComposer withLabel={false} placeholder="Apply this lens in your own words…" onSave={(text) => lab.addNote("m4", CASE_LABEL, "note", `[${lens.title}] ${text}`)} />
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
  const steps = lab.state.multi["m4-ladder"] ?? ["", "", "", "", ""];
  const revealed = !!lab.state.overlays["m4-ladder"];
  return (
    <LabCard>
      <h2 className="text-sm font-bold text-[var(--color-ink)]">Root-cause ladder</h2>
      <p className="mt-1 rounded-xl bg-black/[0.03] p-3 text-sm font-bold text-[var(--color-ink)]">Visible problem: {rootCauseExample.problem}</p>
      <p className="mt-2 text-xs text-[var(--color-slate)]">Ask “What made that consequential?” five times, descending toward structural causes.</p>
      <div className="mt-2 space-y-1.5">
        {steps.map((s, i) => (
          <input
            key={i}
            value={s}
            onChange={(e) => {
              const next = [...steps];
              next[i] = e.target.value;
              lab.setMulti("m4-ladder", next);
            }}
            placeholder={`Step ${i + 1}…`}
            className="w-full rounded-lg border border-[var(--color-border)] p-2 text-sm text-[var(--color-ink)] outline-none focus-visible:border-[var(--color-accent)]"
          />
        ))}
      </div>
      <div className="mt-3">
        <ExpertOverlay revealed={revealed} onReveal={() => lab.revealOverlay("m4-ladder")} buttonLabel="Compare with a possible ladder">
          <ol className="space-y-1 text-sm text-[var(--color-ink)]">
            {rootCauseExample.ladder.map((l, i) => (
              <li key={l}>
                {i + 1}. {l}
              </li>
            ))}
          </ol>
        </ExpertOverlay>
      </div>
      <p className="mt-2 text-xs italic text-[var(--color-slate)]">A root-cause ladder is a research agenda, not proof.</p>
    </LabCard>
  );
}

function SceneOpportunity({ lab }: { lab: LabProgressApi }) {
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
      <div className="mt-3">
        <NoteComposer prompt="Write your own strong, contextual opportunity statement for Rahul" withLabel={false} onSave={(text) => lab.addNote("m4", CASE_LABEL, "opportunity", text)} />
      </div>
    </LabCard>
  );
}

function ScenePrioritize({ lab }: { lab: LabProgressApi }) {
  return (
    <LabCard>
      <h2 className="text-sm font-bold text-[var(--color-ink)]">Prioritization studio</h2>
      <p className="mt-1 text-xs text-[var(--color-slate)]">Identify three opportunities, then evaluate one across five dimensions — rationale matters more than the rating.</p>
      <div className="mt-2">
        <NoteComposer prompt="List three candidate opportunities (one per note)" onSave={(text) => lab.addNote("m4", CASE_LABEL, "opportunity", text)} />
      </div>
      <LabLabel>Evaluate your top candidate</LabLabel>
      <div className="space-y-2">
        {prioritizationDimensions.map((d) => (
          <RatingRow
            key={d.key}
            label={d.label}
            description={d.description}
            level={lab.state.selections[`m4-rating-${d.key}`] ?? ""}
            onLevel={(v) => lab.setSelection(`m4-rating-${d.key}`, v)}
            rationale={lab.state.freeText[`m4-rationale-${d.key}`] ?? ""}
            onRationale={(v) => lab.setFreeText(`m4-rationale-${d.key}`, v)}
          />
        ))}
      </div>
      <p className="mt-2 text-xs italic text-[var(--color-slate)]">Feasibility is a second, separate conversation — don't confuse importance with implementation ease.</p>
    </LabCard>
  );
}

function SceneInterventions({ lab }: { lab: LabProgressApi }) {
  return (
    <LabCard>
      <h2 className="text-sm font-bold text-[var(--color-ink)]">Interventions as a portfolio, not a feature contest</h2>
      <div className="mt-2 space-y-2">
        {interventionCategories.map((c) => (
          <div key={c.key} className="rounded-xl border border-[var(--color-border)] p-3">
            <p className="text-sm font-bold text-[var(--color-ink)]">{c.label}</p>
            <p className="text-xs text-[var(--color-slate)]">{c.detail}</p>
            <p className="mt-0.5 text-xs italic text-[var(--color-ink)]">e.g. {c.example}</p>
            <textarea
              value={lab.state.freeText[`m4-intervention-${c.key}`] ?? ""}
              onChange={(e) => lab.setFreeText(`m4-intervention-${c.key}`, e.target.value)}
              rows={1}
              placeholder="Your intervention in this category…"
              className="mt-2 w-full resize-none rounded-lg border border-[var(--color-border)] p-2 text-xs text-[var(--color-ink)] outline-none focus-visible:border-[var(--color-accent)]"
            />
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
  return (
    <LabCard>
      <h2 className="text-sm font-bold text-[var(--color-ink)]">Connecting the journey to metrics</h2>
      <div className="mt-2 space-y-2">
        {metricLevels.map((m) => (
          <div key={m.level} className="rounded-xl bg-black/[0.03] p-3">
            <p className="text-sm font-bold text-[var(--color-ink)]">{m.level}</p>
            <p className="text-xs italic text-[var(--color-slate)]">{m.question}</p>
            <p className="mt-1 text-xs text-[var(--color-ink)]">{m.example}</p>
            <textarea
              value={lab.state.freeText[`m4-metric-${m.level}`] ?? ""}
              onChange={(e) => lab.setFreeText(`m4-metric-${m.level}`, e.target.value)}
              rows={1}
              placeholder="Your version for Rahul's case…"
              className="mt-2 w-full resize-none rounded-lg border border-[var(--color-border)] bg-[var(--color-surface)] p-2 text-xs text-[var(--color-ink)] outline-none focus-visible:border-[var(--color-accent)]"
            />
          </div>
        ))}
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

function SceneArtifact({ lab }: { lab: LabProgressApi }) {
  const values = lab.state.artifacts[opportunityBriefArtifact.id] ?? {};
  return (
    <div className="space-y-4">
      <ArtifactCard def={opportunityBriefArtifact} values={values} onChange={(k, v) => lab.setArtifactField(opportunityBriefArtifact.id, k, v)} />
      <LabCard>
        <p className="text-xs font-bold uppercase tracking-wide text-[var(--color-slate)]">Recommended reading</p>
        <div className="mt-2">
          <ReadingList links={module4Reading} />
        </div>
      </LabCard>
    </div>
  );
}
