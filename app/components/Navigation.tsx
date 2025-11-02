"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const LINKS = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/contact", label: "Contact" },
];

export default function Navigation() {
  const pathname = usePathname();
  const isNewNavigation = true;

  if (isNewNavigation) {
    return (
      <div className="flex flex-col gap-6">
        {LINKS.map((link) => {
          const isActive = pathname === link.href;
          return (
            <Link
              key={link.href}
              href={link.href}
              className={`cursor-pointer text-lg transition-colors flex items-center gap-2 ${
                isActive ? "text-black font-semibold" : "text-gray-700"
              } hover:font-semibold`}
            >
              {isActive && <span className="text-black">{">"}</span>}
              {link.label}
            </Link>
          );
        })}
      </div>
    );
  }

  return (
    <nav className="flex gap-6">
      {LINKS.map((link) => {
        const isActive = pathname === link.href;
        return (
          <Link
            key={link.href}
            href={link.href}
            className={`text-lg transition-colors hover:text-green-400 ${
              isActive ? "text-green-400 font-semibold" : "text-gray-300"
            }`}
          >
            {link.label}
          </Link>
        );
      })}
    </nav>
  );
}
