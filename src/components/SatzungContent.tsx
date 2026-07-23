import type { SatzungBlock } from "@/lib/satzung";
import { satzungSections } from "@/lib/satzung";

function SatzungBlockView({ block }: { block: SatzungBlock }) {
  if (block.type === "paragraph") {
    return <p>{block.text}</p>;
  }

  return (
    <div>
      {block.intro && <p>{block.intro}</p>}
      <ul className="list-disc pl-6 space-y-2 marker:text-forest">
        {block.items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export function SatzungContent() {
  return (
    <div className="space-y-10">
      <nav
        aria-label="Inhaltsverzeichnis"
        className="rounded-2xl border border-sand-dark/50 bg-sand/40 p-6"
      >
        <p className="text-sm font-medium uppercase tracking-widest text-forest mb-4">
          Inhalt
        </p>
        <ol className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-2 text-sm">
          {satzungSections.map((section) => (
            <li key={section.number}>
              <a
                href={`#paragraph-${section.number}`}
                className="text-anthracite-light hover:text-forest transition-colors"
              >
                {section.heading} {section.title}
              </a>
            </li>
          ))}
        </ol>
      </nav>

      {satzungSections.map((section) => (
        <article
          key={section.number}
          id={`paragraph-${section.number}`}
          className="scroll-mt-28 border-t border-sand-dark/40 pt-10 first:border-t-0 first:pt-0"
        >
          <h2 className="font-serif text-2xl font-bold text-anthracite mb-1">
            {section.heading}
          </h2>
          <h3 className="font-serif text-lg font-bold text-forest mb-4">
            {section.title}
          </h3>
          <div className="space-y-4 text-anthracite-light leading-relaxed">
            {section.blocks.map((block, index) => (
              <SatzungBlockView key={index} block={block} />
            ))}
          </div>
        </article>
      ))}
    </div>
  );
}
