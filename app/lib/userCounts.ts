import type { ProjectLink } from "./projects";

// Store numbers move slowly; refetching once a day keeps the page static-fast.
const REVALIDATE_SECONDS = 60 * 60 * 24;

export type UserCounts = {
  chrome: number | null;
  firefox: number | null;
  total: number;
};

// Firefox Add-ons has a public API; `average_daily_users` is what the listing shows.
async function getFirefoxUsers(url: string): Promise<number | null> {
  const slug = new URL(url).pathname.match(/\/addon\/([^/]+)/)?.[1];
  if (!slug) return null;
  try {
    const res = await fetch(
      `https://addons.mozilla.org/api/v5/addons/addon/${slug}/`,
      { next: { revalidate: REVALIDATE_SECONDS } },
    );
    if (!res.ok) return null;
    const data: { average_daily_users?: number } = await res.json();
    return data.average_daily_users ?? null;
  } catch {
    return null;
  }
}

// The Chrome Web Store has no public API, so read the "N users" label off the
// listing page. If Google changes the markup this returns null and the count hides.
async function getChromeUsers(url: string): Promise<number | null> {
  try {
    const res = await fetch(url, {
      headers: { "User-Agent": "Mozilla/5.0 (Macintosh) Chrome/130" },
      next: { revalidate: REVALIDATE_SECONDS },
    });
    if (!res.ok) return null;
    const html = await res.text();
    const match = html.match(/>([\d,]+)\+? users?</);
    return match ? Number(match[1].replace(/,/g, "")) : null;
  } catch {
    return null;
  }
}

export async function getUserCounts(
  links: ProjectLink[],
): Promise<UserCounts | null> {
  const chromeLink = links.find((link) =>
    link.url.includes("chromewebstore.google.com"),
  );
  const firefoxLink = links.find((link) =>
    link.url.includes("addons.mozilla.org"),
  );
  if (!chromeLink && !firefoxLink) return null;

  const [chrome, firefox] = await Promise.all([
    chromeLink ? getChromeUsers(chromeLink.url) : null,
    firefoxLink ? getFirefoxUsers(firefoxLink.url) : null,
  ]);
  if (chrome === null && firefox === null) return null;

  return { chrome, firefox, total: (chrome ?? 0) + (firefox ?? 0) };
}
