import { headers } from "next/headers";

function formatLoginTimestamp(date: Date, timeZone?: string | null): string {
  try {
    const formatter = new Intl.DateTimeFormat("en-US", {
      timeZone: timeZone || "UTC",
      weekday: "short",
      month: "short",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: false,
    });
    const parts = formatter.formatToParts(date);
    const get = (type: string) => parts.find((p) => p.type === type)?.value ?? "";
    return `${get("weekday")} ${get("month")} ${get("day")} ${get("hour")}:${get("minute")}:${get("second")}`;
  } catch {
    return formatLoginTimestamp(date, "UTC");
  }
}

function parseUserAgent(userAgent: string): string | null {
  const browser = /edg\//i.test(userAgent)
    ? "Edge"
    : /chrome|crios/i.test(userAgent)
      ? "Chrome"
      : /firefox|fxios/i.test(userAgent)
        ? "Firefox"
        : /safari/i.test(userAgent)
          ? "Safari"
          : null;

  const os = /iphone|ipad|ipod/i.test(userAgent)
    ? "iOS"
    : /android/i.test(userAgent)
      ? "Android"
      : /mac os x/i.test(userAgent)
        ? "macOS"
        : /windows/i.test(userAgent)
          ? "Windows"
          : /linux/i.test(userAgent)
            ? "Linux"
            : null;

  if (browser && os) return `${browser} on ${os}`;
  return browser ?? os;
}

export async function getVisitorSummary(): Promise<{ loginLine: string }> {
  const headersList = await headers();

  const timeZone = headersList.get("x-vercel-ip-timezone");
  const timestamp = formatLoginTimestamp(new Date(), timeZone);

  const city = headersList.get("x-vercel-ip-city");
  const region = headersList.get("x-vercel-ip-country-region");
  const country = headersList.get("x-vercel-ip-country");
  const location = city
    ? [decodeURIComponent(city), region].filter(Boolean).join(", ")
    : country;

  const client = parseUserAgent(headersList.get("user-agent") ?? "");
  const details = [location, client].filter(Boolean).join(" · ");

  return {
    loginLine: `Last login: ${timestamp} on ttys001${details ? ` (${details})` : ""}`,
  };
}
