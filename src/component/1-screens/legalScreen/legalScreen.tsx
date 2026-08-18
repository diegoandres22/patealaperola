import React from "react";
// Import directo, no vía el barrel de 2-sections: este es un componente de
// servidor y el barrel arrastraría todos los componentes de cliente del sitio
// al bundle de estas páginas.
import { LegalSection } from "@/component/2-sections/legalSection/legalSection";
import type { LegalDoc } from "@/content/legal";

export const LegalScreen: React.FC<{ doc: LegalDoc }> = ({ doc }) => {
  return (
    <div className="min-h-[69vh] w-full">
      <LegalSection doc={doc} />
    </div>
  );
};
