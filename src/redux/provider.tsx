"use client"

import * as React from "react";

import { HeroUIProvider } from "@heroui/react";
import { ToastProvider } from "@heroui/toast";
import { FooterSection, NaavbarSection, RateBcv } from "@/component/2-sections";

export function Provider({ children }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <HeroUIProvider>
            <NaavbarSection />
            <RateBcv/>
            <ToastProvider placement="bottom-center" />
            {children}
            <FooterSection />
        </HeroUIProvider>
    );
}