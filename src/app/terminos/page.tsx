import React from "react";
import type { Metadata } from "next";
import { LegalScreen } from "@/component/1-screens";
import { TERMINOS } from "@/content/legal";

export const metadata: Metadata = {
  title: "Términos y Condiciones | Patea la Perola",
  description: TERMINOS.summary,
};

export default function TerminosPage() {
  return <LegalScreen doc={TERMINOS} />;
}
