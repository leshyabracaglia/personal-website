import Navigation from "./components/Navigation";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-[#c8ccc0] font-sans">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-start justify-center gap-8 py-32 px-16 text-black font-ibm-plex-mono">
        <div className="flex flex-col gap-4">
          <h1 className="text-5xl font-bold text-black font-ibm-plex-mono">
            Leshya Bracaglia
          </h1>
          <h2 className="text-2xl ">Software Engineer</h2>
        </div>

        <Navigation />
        <p className="text-lg  max-w-2xl">
          I&apos;m a software engineer with a passion for building web
          applications. I love creating elegant solutions to complex problems
          and learning new technologies.
        </p>

        <div className="flex flex-col gap-3 ">
          <div className="flex items-center gap-2">
            <span className="text-green-400">▹</span>
            <span>Building modern web experiences</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-green-400">▹</span>
            <span>Exploring full-stack development</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-green-400">▹</span>
            <span>Always learning something new</span>
          </div>
        </div>
      </main>
    </div>
  );
}
