"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const LINKS = [
  { href: "/", label: "home" },
  { href: "/projects", label: "projects" },
  { href: "/contact", label: "contact" },
];

export default function Navigation() {
  const pathname = usePathname();

  return (
    <div className="flex flex-col gap-1">
      <div className="flex items-center gap-2 mb-1">
        <span className="text-terminal/60">leshya@macbook:~$</span>
        <span className="text-terminal">ls ./pages/</span>
      </div>
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
            <span>./{link.label}/</span>
          </Link>
        );
      })}
    </div>
  );
}
