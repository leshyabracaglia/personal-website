import Navigation from "./components/Navigation";
import { GithubIcon, LinkedinIcon } from "./components/icons/BrandIcons";
import { getVisitorSummary } from "./lib/visitor";

export default async function Home() {
  const { loginLine } = await getVisitorSummary();

  return (
    <div className="flex justify-center min-h-screen bg-[#0d0d0d] font-ibm-plex-mono">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-start gap-8 px-4 sm:px-16 py-6 sm:py-8 text-terminal">
        <p className="text-terminal/40 text-sm">{loginLine}</p>

        <div className="flex flex-col gap-3">
          <div className="flex flex-wrap items-center gap-x-2">
            <span className="text-terminal/60 break-all"><span className="hidden sm:inline">leshya@macbook:</span>~$</span>
            <span>whoami</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold pl-4 break-words">Leshya Bracaglia</h1>

          <div className="flex flex-wrap items-center gap-x-2">
            <span className="text-terminal/60 break-all"><span className="hidden sm:inline">leshya@macbook:</span>~$</span>
            <span>cat title.txt</span>
          </div>
          <h2 className="text-xl pl-4">Senior Software Engineer</h2>
        </div>

        <div className="flex flex-col gap-3">
          <div className="flex flex-wrap items-center gap-x-2">
            <span className="text-terminal/60 break-all"><span className="hidden sm:inline">leshya@macbook:</span>~$</span>
            <span>cat links.txt</span>
          </div>
          <div className="flex flex-col gap-2 pl-4">
            <a
              href="https://github.com/leshyabracaglia"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-terminal/70 hover:text-terminal transition-colors text-sm w-fit"
            >
              <GithubIcon />
              <span>github.com/leshyabracaglia</span>
            </a>
            <a
              href="https://www.linkedin.com/in/leshya-bracaglia/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-terminal/70 hover:text-terminal transition-colors text-sm w-fit"
            >
              <LinkedinIcon />
              <span>linkedin.com/in/leshya-bracaglia</span>
            </a>
          </div>
        </div>

        <Navigation />

        <span className="cursor text-terminal">█</span>
      </main>
    </div>
  );
}
