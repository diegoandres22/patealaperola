import React from "react";
import type { LegalDoc } from "@/content/legal";

/**
 * Render de un documento legal. El contenido vive en src/content/legal.ts:
 * para cambiar el texto no hace falta tocar este componente.
 */
export const LegalSection: React.FC<{ doc: LegalDoc }> = ({ doc }) => {
  return (
    <article className="mx-auto w-full max-w-3xl px-6 py-10 sm:px-8">
      <header className="border-b border-white/10 pb-6">
        <h1 className="text-3xl font-bold sm:text-4xl">{doc.title}</h1>
        <p className="mt-3 text-base text-foreground-muted">{doc.summary}</p>
        <p className="mt-4 text-sm text-foreground-subtle">
          Última actualización: {doc.updatedAt}
        </p>
      </header>

      <div className="mt-8 flex flex-col gap-8">
        {doc.blocks.map((block) => (
          <section key={block.heading} className="flex flex-col gap-3">
            <h2 className="text-xl font-semibold sm:text-2xl">{block.heading}</h2>

            {block.paragraphs?.map((text, i) => (
              <p key={i} className="leading-relaxed text-foreground-muted">
                {text}
              </p>
            ))}

            {block.bullets && (
              <ul className="flex list-disc flex-col gap-2 pl-5 text-foreground-muted">
                {block.bullets.map((item, i) => (
                  <li key={i} className="leading-relaxed">
                    {item}
                  </li>
                ))}
              </ul>
            )}

            {block.closing?.map((text, i) => (
              <p key={i} className="leading-relaxed text-foreground-muted">
                {text}
              </p>
            ))}
          </section>
        ))}
      </div>
    </article>
  );
};
