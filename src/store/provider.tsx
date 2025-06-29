"use client"

import * as React from "react";

import { HeroUIProvider } from "@heroui/react";
import { ToastProvider } from "@heroui/toast";
import { FooterSection, NaavbarSection, RateBcv } from "@/component/2-sections";
import { Provider } from "react-redux";
import { store } from "@/store";

export function ProviderComp({ children }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <HeroUIProvider>
            <Provider store={store}>
                <NaavbarSection />
                <RateBcv />
                <ToastProvider placement="bottom-center" />
                {children}
                <FooterSection />
            </Provider>
        </HeroUIProvider>
    );
}