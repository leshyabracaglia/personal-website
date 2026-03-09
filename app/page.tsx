import Navigation from "./components/Navigation";

export default function Home() {
  return (
    <div className="flex justify-center min-h-screen bg-[#0d0d0d] font-ibm-plex-mono">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-start gap-8 px-8 sm:px-16 py-8 text-terminal">
        <p className="text-terminal/40 text-sm">Last login: Mon Mar  9 2026 on ttys001</p>

        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-2">
            <span className="text-terminal/60">leshya@macbook:~$</span>
            <span>whoami</span>
          </div>
          <h1 className="text-4xl font-bold pl-4">Leshya Bracaglia</h1>

          <div className="flex items-center gap-2">
            <span className="text-terminal/60">leshya@macbook:~$</span>
            <span>cat title.txt</span>
          </div>
          <h2 className="text-xl pl-4">Software Engineer</h2>
        </div>

        <Navigation />

        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-2">
            <span className="text-terminal/60">leshya@macbook:~$</span>
            <span>cat bio.txt</span>
          </div>
          <p className="text-lg max-w-2xl pl-4">
            I&apos;m a software engineer with a passion for building web applications.
          </p>
          <span className="cursor text-terminal">█</span>
        </div>
      </main>
    </div>
  );
}
