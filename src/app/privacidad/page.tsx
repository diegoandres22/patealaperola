import React from "react";
import type { Metadata } from "next";
import { LegalScreen } from "@/component/1-screens";
import { PRIVACIDAD } from "@/content/legal";

export const metadata: Metadata = {
  title: "Política de Privacidad | Patea la Perola",
  description: PRIVACIDAD.summary,
};

export default function PrivacidadPage() {
  return <LegalScreen doc={PRIVACIDAD} />;
}
