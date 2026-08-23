import type { LegalDocument as LegalDocumentType } from "../lib/projects";

export default function LegalDocument({
  document,
}: {
  document: LegalDocumentType;
}) {
  return (
    <div className="flex flex-col gap-6 w-full">
      <p className="text-terminal/40 text-xs">
        Last updated: {document.lastUpdated}
      </p>

      {document.intro.map((paragraph, i) => (
        <p key={i} className="text-terminal/80 text-sm leading-relaxed">
          {paragraph}
        </p>
      ))}

      {document.sections.map((section) => (
        <div key={section.heading} className="border-t border-[#1a4a1a] pt-4">
          <h2 className="text-terminal font-semibold mb-2"># {section.heading}</h2>
          {section.body.map((paragraph, i) => (
            <p key={i} className="text-terminal/80 text-sm leading-relaxed mb-2">
              {paragraph}
            </p>
          ))}
          {section.list && section.list.length > 0 && (
            <ul className="flex flex-col gap-1 mt-1">
              {section.list.map((item) => (
                <li
                  key={item}
                  className="text-terminal/80 text-sm leading-relaxed flex gap-2"
                >
                  <span className="text-terminal/40">-</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          )}
        </div>
      ))}
    </div>
  );
}
