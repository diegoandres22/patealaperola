"use client";

import React, { useCallback, useEffect, useState } from "react";
import { Button, Link, Switch } from "@heroui/react";
import {
  CONSENT_EVENT,
  crearConsent,
  guardarConsent,
  leerConsent,
} from "@/lib/consent";

/**
 * Banner de consentimiento de cookies.
 *
 * Se muestra sólo si el visitante todavía no ha respondido. La decisión se
 * guarda 6 meses y puede cambiarse después desde "Preferencias de cookies"
 * en el pie de página (que dispara el evento CONSENT_EVENT + "open").
 */
export const CookieConsent = () => {
  const [visible, setVisible] = useState(false);
  const [configurando, setConfigurando] = useState(false);
  const [analiticas, setAnaliticas] = useState(false);
  const [marketing, setMarketing] = useState(false);

  useEffect(() => {
    // Se evalúa en el cliente para no romper el render estático del servidor.
    if (leerConsent() === null) setVisible(true);

    const abrirPreferencias = () => {
      const actual = leerConsent();
      setAnaliticas(actual?.analiticas ?? false);
      setMarketing(actual?.marketing ?? false);
      setConfigurando(true);
      setVisible(true);
    };

    window.addEventListener("plp:open-consent", abrirPreferencias);
    return () => window.removeEventListener("plp:open-consent", abrirPreferencias);
  }, []);

  const responder = useCallback((a: boolean, m: boolean) => {
    guardarConsent(crearConsent(a, m));
    setVisible(false);
    setConfigurando(false);
  }, []);

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-live="polite"
      aria-label="Aviso de cookies"
      className="fixed inset-x-0 bottom-0 z-50 border-t border-white/10 bg-surface-raised/95 p-4 shadow-2xl backdrop-blur sm:p-6"
    >
      <div className="mx-auto flex w-full max-w-5xl flex-col gap-4">
        <div className="flex flex-col gap-2">
          <h2 className="text-lg font-semibold">Uso de cookies</h2>
          <p className="text-sm leading-relaxed text-foreground-muted">
            Utilizamos cookies estrictamente necesarias para que el sitio
            funcione. No usamos cookies de analítica ni de publicidad. Puedes
            consultar el detalle en nuestra{" "}
            <Link href="/cookies" className="text-sm underline">
              Política de Cookies
            </Link>
            .
          </p>
        </div>

        {configurando && (
          <div className="flex flex-col gap-3 rounded-lg border border-white/10 bg-surface-sunken p-4">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="font-medium">Estrictamente necesarias</p>
                <p className="text-sm text-foreground-subtle">
                  Imprescindibles para el funcionamiento del sitio y para
                  recordar esta misma decisión. No se pueden desactivar.
                </p>
              </div>
              <Switch isSelected isDisabled aria-label="Cookies necesarias" />
            </div>

            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="font-medium">Analíticas</p>
                <p className="text-sm text-foreground-subtle">
                  Nos ayudarían a entender cómo se usa el sitio. Hoy no hay
                  ninguna activa.
                </p>
              </div>
              <Switch
                isSelected={analiticas}
                onValueChange={setAnaliticas}
                aria-label="Cookies analíticas"
              />
            </div>

            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="font-medium">Marketing</p>
                <p className="text-sm text-foreground-subtle">
                  Se usarían para medir campañas publicitarias. Hoy no hay
                  ninguna activa.
                </p>
              </div>
              <Switch
                isSelected={marketing}
                onValueChange={setMarketing}
                aria-label="Cookies de marketing"
              />
            </div>
          </div>
        )}

        <div className="flex flex-col gap-2 sm:flex-row sm:justify-end">
          {configurando ? (
            <Button
              color="primary"
              variant="shadow"
              className="font-semibold"
              onPress={() => responder(analiticas, marketing)}
            >
              Guardar preferencias
            </Button>
          ) : (
            <Button
              variant="bordered"
              className="font-semibold"
              onPress={() => setConfigurando(true)}
            >
              Configurar
            </Button>
          )}

          <Button
            variant="flat"
            className="font-semibold"
            onPress={() => responder(false, false)}
          >
            Solo las necesarias
          </Button>

          <Button
            color="primary"
            variant="shadow"
            className="font-semibold"
            onPress={() => responder(true, true)}
          >
            Aceptar todas
          </Button>
        </div>
      </div>
    </div>
  );
};

/** Enlace para reabrir el panel de preferencias desde el pie de página. */
export const CookiePreferencesLink = () => (
  <button
    type="button"
    className="text-sm underline underline-offset-2 hover:opacity-80"
    onClick={() => window.dispatchEvent(new Event("plp:open-consent"))}
  >
    Preferencias de cookies
  </button>
);

export { CONSENT_EVENT };
