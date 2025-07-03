"use client"

import * as React from "react";
import { HeroUIProvider } from "@heroui/react";
import { ToastProvider } from "@heroui/toast";
import { FooterSection, NaavbarSection, RateBcv } from "@/component/2-sections";
import { Provider } from "react-redux";
import { store } from "@/store";
import { usePathname } from 'next/navigation'


export function ProviderComp({ children }: Readonly<{
    children: React.ReactNode;
}>) {
    const pathname = usePathname()
    const isDynamicRoute = pathname.includes('/raffles');

    return (
        <HeroUIProvider>
            <Provider store={store}>
                <NaavbarSection />
                {isDynamicRoute && <RateBcv />}
                <ToastProvider placement="bottom-center" />
                {children}
                <FooterSection />
            </Provider>
        </HeroUIProvider>
    );
}