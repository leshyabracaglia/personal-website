export default function Projects() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-[#001a00] font-sans">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-start justify-start gap-8 py-32 px-16">
        <h1 className="text-4xl font-bold text-white">Projects</h1>
        
        <div className="flex flex-col gap-6 w-full">
          <div className="border border-green-900 rounded-lg p-6 hover:border-green-600 transition-colors">
            <h2 className="text-2xl font-semibold text-green-400 mb-2">
              Project One
            </h2>
            <p className="text-gray-300 mb-3">
              A description of your first project. Add details about what technologies you used and what problems it solves.
            </p>
            <div className="flex gap-2 flex-wrap">
              <span className="px-3 py-1 bg-green-950 text-green-400 rounded-full text-sm">
                React
              </span>
              <span className="px-3 py-1 bg-green-950 text-green-400 rounded-full text-sm">
                Next.js
              </span>
              <span className="px-3 py-1 bg-green-950 text-green-400 rounded-full text-sm">
                TypeScript
              </span>
            </div>
          </div>

          <div className="border border-green-900 rounded-lg p-6 hover:border-green-600 transition-colors">
            <h2 className="text-2xl font-semibold text-green-400 mb-2">
              Project Two
            </h2>
            <p className="text-gray-300 mb-3">
              A description of your second project. Highlight the key features and your role in building it.
            </p>
            <div className="flex gap-2 flex-wrap">
              <span className="px-3 py-1 bg-green-950 text-green-400 rounded-full text-sm">
                Node.js
              </span>
              <span className="px-3 py-1 bg-green-950 text-green-400 rounded-full text-sm">
                MongoDB
              </span>
            </div>
          </div>

          <div className="border border-green-900 rounded-lg p-6 hover:border-green-600 transition-colors">
            <h2 className="text-2xl font-semibold text-green-400 mb-2">
              Project Three
            </h2>
            <p className="text-gray-300 mb-3">
              A description of your third project. Mention any challenges you overcame or interesting learnings.
            </p>
            <div className="flex gap-2 flex-wrap">
              <span className="px-3 py-1 bg-green-950 text-green-400 rounded-full text-sm">
                Python
              </span>
              <span className="px-3 py-1 bg-green-950 text-green-400 rounded-full text-sm">
                FastAPI
              </span>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

