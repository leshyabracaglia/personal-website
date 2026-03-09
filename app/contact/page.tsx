import Navigation from "../components/Navigation";

function ContactItem({
  href,
  label,
  prefix,
}: {
  href: string;
  label: string;
  prefix: string;
}) {
  return (
    <a
      href={href}
      className="flex items-center gap-3 text-terminal/70 hover:text-terminal transition-colors text-sm group"
    >
      <span className="text-terminal/40 group-hover:text-terminal/70">{prefix}</span>
      <span>{label}</span>
    </a>
  );
}

export default function Contact() {
  return (
    <div className="flex justify-center min-h-screen bg-[#0d0d0d] font-ibm-plex-mono">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-start justify-start gap-8 py-8 px-8 sm:px-16 text-terminal">
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2">
            <span className="text-terminal/60">leshya@macbook:~$</span>
            <span>cat contact.txt</span>
          </div>
          <h1 className="text-4xl font-bold pl-4">Contact</h1>
        </div>

        <Navigation />

        <div className="flex flex-col gap-6 w-full">
          <p className="text-terminal/70 text-sm">
            # I&apos;d love to hear from you.<br />
            # Reach out through any of the following:
          </p>

          <div className="flex flex-col gap-3 border border-[#1a4a1a] p-4">
            <ContactItem
              href="mailto:leshyabracaglia@gmail.com"
              prefix="[email]    "
              label="leshyabracaglia@gmail.com"
            />
            <ContactItem
              href="https://github.com/leshyabracaglia"
              prefix="[github]   "
              label="github.com/leshyabracaglia"
            />
            <ContactItem
              href="https://linkedin.com/in/leshya-bracaglia"
              prefix="[linkedin] "
              label="linkedin.com/in/leshya-bracaglia"
            />
          </div>
        </div>
        <span className="cursor text-terminal">█</span>
      </main>
    </div>
  );
}
