import React from "react";
import type { Metadata } from "next";
import { LegalScreen } from "@/component/1-screens";
import { COOKIES } from "@/content/legal";

export const metadata: Metadata = {
  title: "Política de Cookies | Patea la Perola",
  description: COOKIES.summary,
};

export default function CookiesPage() {
  return <LegalScreen doc={COOKIES} />;
}
