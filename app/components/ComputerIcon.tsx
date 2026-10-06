import Link from "next/link";

const SCREEN_TOP = String.raw`     _________
    / ======= \
   / __________\
  | ___________ |
  | | `;
const SCREEN_BOTTOM = String.raw`       | |
  | |         | |
  | |_________| |
  \=____________/
  / """"""""""" \
 / ::::::::::::: \
(_________________)`;

export default function ComputerIcon() {
  return (
    <header className="px-4 pt-4 sm:px-6 lg:absolute lg:top-6 lg:left-6 lg:p-0">
      <Link
        href="/"
        aria-label="Leshya Bracaglia — home"
        className="inline-block opacity-80 hover:opacity-100 transition-opacity"
      >
        <pre
          aria-hidden
          className="text-terminal font-ibm-plex-mono text-[6px] leading-[1.15] sm:text-[10px] lg:text-[13px] xl:text-[18px] 2xl:text-[22px]"
        >
          {SCREEN_TOP}
          <span className="cursor">-</span>
          {SCREEN_BOTTOM}
        </pre>
      </Link>
    </header>
  );
}
