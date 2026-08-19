/**
 * Consentimiento de cookies.
 *
 * La preferencia se guarda en una cookie propia (no en localStorage) para que
 * el servidor también pueda leerla si en el futuro hace falta decidir en SSR
 * qué scripts inyectar.
 *
 * La cookie de consentimiento NO lleva HttpOnly a propósito: el banner es
 * código de cliente y necesita leerla. Sí lleva SameSite=Lax y, en
 * producción, Secure. Guardar la preferencia se considera estrictamente
 * necesario, así que no requiere consentimiento previo.
 */

export const CONSENT_COOKIE = "plp_consent";
const CONSENT_VERSION = 1;
const SEIS_MESES_EN_SEGUNDOS = 60 * 60 * 24 * 180;

export interface ConsentState {
  version: number;
  /** Siempre true: sin ellas el sitio no funciona. */
  necesarias: true;
  analiticas: boolean;
  marketing: boolean;
  /** ISO date de cuándo se dio la respuesta. */
  fecha: string;
}

export const CONSENT_EVENT = "plp:consent-change";

export function crearConsent(analiticas: boolean, marketing: boolean): ConsentState {
  return {
    version: CONSENT_VERSION,
    necesarias: true,
    analiticas,
    marketing,
    fecha: new Date().toISOString(),
  };
}

export function leerConsent(): ConsentState | null {
  if (typeof document === "undefined") return null;

  const entrada = document.cookie
    .split("; ")
    .find((c) => c.startsWith(`${CONSENT_COOKIE}=`));

  if (!entrada) return null;

  try {
    const valor = decodeURIComponent(entrada.split("=").slice(1).join("="));
    const parsed = JSON.parse(valor) as ConsentState;
    // Si sube la versión (porque cambiaron las categorías), se vuelve a preguntar.
    if (parsed.version !== CONSENT_VERSION) return null;
    return parsed;
  } catch {
    return null;
  }
}

export function guardarConsent(state: ConsentState): void {
  if (typeof document === "undefined") return;

  const secure = window.location.protocol === "https:" ? "; Secure" : "";
  document.cookie =
    `${CONSENT_COOKIE}=${encodeURIComponent(JSON.stringify(state))}` +
    `; Path=/; Max-Age=${SEIS_MESES_EN_SEGUNDOS}; SameSite=Lax${secure}`;

  window.dispatchEvent(new CustomEvent(CONSENT_EVENT, { detail: state }));
}

/**
 * Punto único para decidir si se puede cargar un script no esencial.
 *
 * Cuando añadas Google Analytics, un píxel de Meta o similar, condiciona su
 * carga a esta función en vez de insertarlo directamente en el layout:
 *
 *   if (tieneConsentimiento("analiticas")) { ...cargar el script... }
 */
export function tieneConsentimiento(categoria: "analiticas" | "marketing"): boolean {
  const consent = leerConsent();
  return consent ? consent[categoria] === true : false;
}
