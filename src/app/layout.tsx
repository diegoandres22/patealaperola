import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import { ProviderComp } from "@/store/provider";
import { CookieConsent } from "@/component/3-elements/cookieConsent";

// Antes se descargaban Geist Y Geist Mono desde Google Fonts y, acto seguido,
// globals.css las anulaba con `font-family: Arial`. Se pagaba la descarga de
// dos fuentes que nunca llegaban a verse. Ahora se carga solo Geist y sí se
// aplica; Geist Mono no la usaba nadie.
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Patea la perola",
  description: "Participa ya y gana muchos premios",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`dark ${geistSans.variable}`}>
      <body>
        <ProviderComp>
          {children}
          <CookieConsent />
        </ProviderComp>
      </body>
    </html>
  );
}
