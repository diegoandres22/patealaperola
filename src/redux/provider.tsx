"use client"

import * as React from "react";

import { HeroUIProvider } from "@heroui/react";
import { NaavbarSection } from "@/component/2-sections";

export function Provider({ children }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <HeroUIProvider>
            <NaavbarSection />
            {children}
        </HeroUIProvider>
    );
}