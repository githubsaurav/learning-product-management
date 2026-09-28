import { LabCard } from "@/lab/components/Card";
import { ReadingList } from "@/lab/components/ReadingList";
import { readingRoom } from "@/lab/data/readingRoom";

export function ReadingRoomScreen() {
  return (
    <div className="space-y-4 pb-10">
      <div>
        <h1 className="text-lg font-black text-[var(--color-ink)]">Reading room</h1>
        <p className="mt-1 text-sm text-[var(--color-slate)]">Grouped by the question each piece answers.</p>
      </div>
      {readingRoom.map((group) => (
        <LabCard key={group.title}>
          <p className="text-sm font-bold text-[var(--color-ink)]">{group.title}</p>
          <div className="mt-2">
            <ReadingList links={group.links} />
          </div>
        </LabCard>
      ))}
    </div>
  );
}
