"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const LINKS = [
  { href: "/", label: "home" },
  { href: "/projects", label: "projects" },
  { href: "/contact", label: "contact" },
];

export default function Navigation({
  cwd = "~",
  variant = "cd",
  upLevels = 1,
}: {
  cwd?: string;
  variant?: "cd" | "list-parent";
  upLevels?: number;
}) {
  const pathname = usePathname();
  const upPath = "../".repeat(upLevels);

  return (
    <div className="flex flex-col gap-1">
      {variant === "cd" ? (
        <>
          <div className="flex items-center gap-2">
            <span className="text-terminal/60">leshya@macbook:{cwd}$</span>
            <span className="text-terminal">cd pages/</span>
          </div>
          <div className="flex items-center gap-2 mb-1">
            <span className="text-terminal/60">leshya@macbook:{cwd}/pages$</span>
            <span className="text-terminal">ls</span>
          </div>
        </>
      ) : (
        <div className="flex items-center gap-2 mb-1">
          <span className="text-terminal/60">leshya@macbook:{cwd}$</span>
          <span className="text-terminal">ls {upPath}</span>
        </div>
      )}
      {LINKS.map((link) => {
        const isActive = pathname === link.href;
        return (
          <Link
            key={link.href}
            href={link.href}
            className={`pl-4 flex items-center gap-2 transition-opacity ${
              isActive
                ? "text-terminal font-semibold"
                : "text-terminal/50 hover:text-terminal/80"
            }`}
          >
            <span>{isActive ? ">" : " "}</span>
            <span>{link.label}</span>
          </Link>
        );
      })}
    </div>
  );
}
