import type { ProjectLink } from "../lib/projects";
import { getUserCounts } from "../lib/userCounts";

export default async function UserCount({ links }: { links: ProjectLink[] }) {
  const counts = await getUserCounts(links);
  if (!counts) return null;

  const breakdown = [
    counts.chrome !== null && `chrome ${counts.chrome.toLocaleString()}`,
    counts.firefox !== null && `firefox ${counts.firefox.toLocaleString()}`,
  ].filter(Boolean);

  return (
    <div className="text-sm mb-4">
      <span className="text-terminal/60">users:</span>{" "}
      <span className="text-terminal font-semibold">
        {counts.total.toLocaleString()}
      </span>{" "}
      <span className="text-terminal/50">({breakdown.join(" · ")})</span>
    </div>
  );
}
