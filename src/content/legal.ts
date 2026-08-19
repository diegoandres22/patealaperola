/**
 * Contenido de los documentos legales.
 *
 * ⚠️ IMPORTANTE — LEER ANTES DE PUBLICAR
 *
 * Esto es un BORRADOR técnico redactado como punto de partida, NO es
 * asesoría legal. Antes de publicarlo:
 *
 *  1. Reemplaza TODOS los marcadores entre corchetes: [RAZÓN SOCIAL], [RIF],
 *     [DIRECCIÓN FISCAL], [CORREO DE CONTACTO], [TELÉFONO],
 *     [N° DE LICENCIA / AUTORIZACIÓN DE SORTEOS], [JURISDICCIÓN].
 *  2. Hazlo revisar por un abogado. Los sorteos y rifas están regulados y
 *     suelen requerir autorización administrativa previa; publicar términos
 *     que prometan algo que no cumples es peor que no tenerlos.
 *  3. Revisa que lo que dice cada documento coincida con lo que el sistema
 *     hace de verdad (plazos de aprobación, medios de pago, reembolsos).
 *
 * Para editar el texto no hace falta tocar componentes: todo vive aquí.
 */

export interface LegalBlock {
  heading: string;
  /** Texto que va ANTES de la lista. */
  paragraphs?: string[];
  bullets?: string[];
  /** Texto que va DESPUÉS de la lista. */
  closing?: string[];
}

export interface LegalDoc {
  slug: string;
  title: string;
  summary: string;
  updatedAt: string;
  blocks: LegalBlock[];
}

/** Fecha de última actualización que se muestra en los tres documentos. */
const UPDATED_AT = "[FECHA DE PUBLICACIÓN]";

/** Datos del responsable, en un solo sitio para no repetirlos. */
const OPERADOR = "[RAZÓN SOCIAL]";
const RIF = "[RIF]";
const DIRECCION = "[DIRECCIÓN FISCAL]";
const CONTACTO = "[CORREO DE CONTACTO]";

export const TERMINOS: LegalDoc = {
  slug: "terminos",
  title: "Términos y Condiciones",
  summary:
    "Reglas de uso de la plataforma, condiciones de compra de boletos y desarrollo de los sorteos.",
  updatedAt: UPDATED_AT,
  blocks: [
    {
      heading: "1. Quiénes somos",
      paragraphs: [
        `Patea la Perola es una plataforma de rifas operada por ${OPERADOR}, inscrita bajo el RIF ${RIF}, con domicilio en ${DIRECCION} (en adelante, "el Operador").`,
        `Para cualquier consulta relacionada con estos términos puedes escribir a ${CONTACTO}.`,
        "Los sorteos se realizan al amparo de la autorización [N° DE LICENCIA / AUTORIZACIÓN DE SORTEOS]. Si tu operación aún no cuenta con esta autorización, elimina esta frase y consulta con tu abogado antes de publicar el sitio.",
      ],
    },
    {
      heading: "2. Aceptación de los términos",
      paragraphs: [
        "Al acceder al sitio, registrar una compra o participar en cualquier sorteo, declaras haber leído y aceptado estos Términos y Condiciones, así como la Política de Privacidad y la Política de Cookies.",
        "Si no estás de acuerdo con alguna parte, no debes utilizar la plataforma.",
      ],
    },
    {
      heading: "3. Quién puede participar",
      bullets: [
        "Debes ser mayor de 18 años. La plataforma no está dirigida a menores de edad y no se aceptan participaciones de menores bajo ninguna circunstancia.",
        "Debes proporcionar datos veraces y actuales: nombre completo, correo electrónico, teléfono y titular de la cuenta desde la que realizas el pago.",
        "El Operador puede rechazar o anular una participación cuando detecte datos falsos, suplantación de identidad o comprobantes de pago alterados.",
        "El personal del Operador y sus familiares directos [DEFINIR SI APLICA ESTA RESTRICCIÓN] no pueden participar en los sorteos.",
      ],
    },
    {
      heading: "4. Compra de boletos",
      paragraphs: [
        "La compra se realiza en dos pasos: primero registras tus datos y cargas el comprobante de pago; después nuestro equipo verifica ese pago manualmente.",
      ],
      bullets: [
        "Los números de boleto se asignan de forma aleatoria entre los disponibles en el momento de registrar la compra.",
        "Cada rifa define su cantidad mínima de boletos por compra y su precio unitario, indicados en la ficha de la rifa.",
        "El registro de la compra NO garantiza la participación: esta se confirma únicamente cuando el Operador valida el pago.",
        "Recibirás un correo electrónico cuando tu compra sea aprobada o rechazada. Conserva tu comprobante hasta recibirlo.",
        "El plazo estimado de verificación es de [PLAZO, ej. 12 horas] hábiles desde el registro.",
      ],
    },
    {
      heading: "5. Pagos y comprobantes",
      bullets: [
        "Los medios de pago aceptados y las cuentas de destino son los que aparecen publicados en el formulario de compra. No aceptamos pagos por vías distintas a las indicadas.",
        "Debes cargar un comprobante legible en formato PDF, JPG o PNG, de máximo 5 MB.",
        "Los montos en bolívares se calculan según la tasa de referencia mostrada en el sitio al momento de la compra.",
        "Si el monto transferido no coincide con el total de la compra, o la referencia no puede verificarse, la compra será rechazada.",
      ],
    },
    {
      heading: "6. Rechazo de compras y reembolsos",
      paragraphs: [
        "Una compra puede ser rechazada si el pago no puede verificarse, si el comprobante presenta inconsistencias o si los datos aportados son incorrectos.",
        "[DEFINIR POLÍTICA DE REEMBOLSO. Debe indicar de forma clara: en qué casos se devuelve el dinero, por qué medio, en qué plazo y quién asume las comisiones. Este es uno de los puntos que más reclamaciones genera; no lo dejes ambiguo.]",
      ],
    },
    {
      heading: "7. Realización del sorteo",
      bullets: [
        "Cada rifa indica su fecha de sorteo en la ficha correspondiente.",
        "El sorteo se realiza mediante [DESCRIBIR EL MÉTODO: ej. los resultados de la lotería X del día indicado, o transmisión en vivo por la cuenta oficial].",
        "Solo participan los boletos correspondientes a compras aprobadas antes del cierre.",
        "El Operador puede posponer un sorteo si no se alcanza el mínimo de boletos vendidos, informándolo por los canales oficiales. [DEFINIR SI APLICA Y QUÉ PASA CON EL DINERO EN ESE CASO.]",
      ],
    },
    {
      heading: "8. Entrega de premios",
      bullets: [
        "El ganador será contactado al correo y teléfono registrados en la compra.",
        "Para reclamar el premio deberá presentar documento de identidad que coincida con los datos del boleto ganador.",
        "El plazo para reclamar es de [PLAZO, ej. 30 días continuos] desde la fecha del sorteo. Transcurrido ese plazo [DEFINIR CONSECUENCIA].",
        "Los gastos de traslado, trámites de registro o impuestos asociados al premio corren por cuenta de [DEFINIR: el ganador o el Operador].",
      ],
    },
    {
      heading: "9. Conducta prohibida",
      bullets: [
        "Suplantar la identidad de terceros o usar datos de pago ajenos sin autorización.",
        "Alterar comprobantes de pago o cualquier información enviada a la plataforma.",
        "Intentar acceder sin autorización a los sistemas, cuentas o datos de otros usuarios.",
        "Automatizar el registro de compras o interferir con el funcionamiento normal del sitio.",
      ],
    },
    {
      heading: "10. Limitación de responsabilidad",
      paragraphs: [
        "El Operador no se responsabiliza por interrupciones del servicio ajenas a su control, fallos de la red bancaria, ni por datos incorrectos suministrados por el usuario que impidan contactarlo o entregarle un premio.",
        "La plataforma se ofrece tal como está. En ningún caso la responsabilidad del Operador excederá el monto pagado por el usuario en la compra objeto de la reclamación.",
      ],
    },
    {
      heading: "11. Modificaciones",
      paragraphs: [
        "El Operador puede actualizar estos términos. La versión vigente es siempre la publicada en esta página, con su fecha de actualización. Los cambios no se aplican retroactivamente a sorteos ya celebrados.",
      ],
    },
    {
      heading: "12. Ley aplicable y jurisdicción",
      paragraphs: [
        "Estos términos se rigen por las leyes de [JURISDICCIÓN]. Cualquier controversia se someterá a los tribunales competentes de [JURISDICCIÓN], renunciando las partes a cualquier otro fuero.",
      ],
    },
    {
      heading: "13. Contacto",
      paragraphs: [
        `Para dudas, reclamaciones o ejercicio de derechos: ${CONTACTO}.`,
      ],
    },
  ],
};

export const PRIVACIDAD: LegalDoc = {
  slug: "privacidad",
  title: "Política de Privacidad",
  summary:
    "Qué datos personales recogemos, para qué los usamos, con quién los compartimos y qué derechos tienes sobre ellos.",
  updatedAt: UPDATED_AT,
  blocks: [
    {
      heading: "1. Responsable del tratamiento",
      paragraphs: [
        `${OPERADOR}, RIF ${RIF}, con domicilio en ${DIRECCION}.`,
        `Correo de contacto para asuntos de privacidad: ${CONTACTO}.`,
      ],
    },
    {
      heading: "2. Qué datos recogemos",
      paragraphs: [
        "Recogemos únicamente los datos que necesitamos para procesar tu compra y verificar tu pago:",
      ],
      bullets: [
        "Nombre y apellido.",
        "Correo electrónico.",
        "Número de teléfono.",
        "Nombre del titular de la cuenta desde la que realizas el pago.",
        "Número de referencia u operación del pago.",
        "Imagen o PDF del comprobante de pago que cargas.",
        "Números de boleto asignados, monto pagado y fecha de la compra.",
      ],
    },
    {
      heading: "3. Para qué los usamos",
      bullets: [
        "Verificar tu pago y confirmar o rechazar tu participación.",
        "Asignarte los números de boleto y permitirte consultarlos con tu correo.",
        "Contactarte si resultas ganador y gestionar la entrega del premio.",
        "Enviarte el correo de confirmación o rechazo de tu compra.",
        "Cumplir obligaciones contables, fiscales y de prevención de fraude.",
      ],
      paragraphs: [
        "No usamos tus datos para publicidad ni los cedemos a terceros con fines comerciales.",
      ],
    },
    {
      heading: "4. Base que legitima el tratamiento",
      bullets: [
        "Ejecución de la relación contractual: tratar tu compra y tu participación en el sorteo.",
        "Cumplimiento de obligaciones legales: conservación de registros contables y fiscales.",
        "Interés legítimo: prevención del fraude en la verificación de pagos.",
      ],
    },
    {
      heading: "5. Con quién compartimos tus datos",
      paragraphs: [
        "No vendemos tus datos. Los compartimos únicamente con proveedores que nos prestan servicios necesarios para operar, y solo en la medida en que lo requieran:",
      ],
      bullets: [
        "Google Cloud Storage (Google LLC): almacenamiento de los comprobantes de pago que cargas.",
        "Proveedor de correo electrónico: envío de las notificaciones de confirmación y rechazo.",
        "Proveedor de alojamiento de la aplicación y de la base de datos.",
        "Autoridades competentes, cuando exista una obligación legal de hacerlo.",
      ],
      closing: [
        "Algunos de estos proveedores pueden procesar información fuera de tu país. [CONFIRMAR CON TU ABOGADO QUÉ MECANISMO DE TRANSFERENCIA INTERNACIONAL APLICA EN TU JURISDICCIÓN.]",
      ],
    },
    {
      heading: "6. Cuánto tiempo los conservamos",
      paragraphs: [
        "Conservamos los datos de tu compra mientras dure el sorteo y, posteriormente, durante el plazo legal exigido para registros contables y fiscales: [PLAZO DE CONSERVACIÓN SEGÚN TU JURISDICCIÓN].",
        "Los comprobantes de pago se conservan durante el mismo período, ya que constituyen el respaldo de la operación.",
        "Transcurridos esos plazos, los datos se eliminan o se anonimizan.",
      ],
    },
    {
      heading: "7. Tus derechos",
      paragraphs: [
        `Puedes ejercer los siguientes derechos escribiendo a ${CONTACTO}, indicando el correo con el que realizaste la compra:`,
      ],
      bullets: [
        "Acceder a los datos que tenemos sobre ti.",
        "Rectificar datos inexactos.",
        "Solicitar la supresión de tus datos, cuando ya no sean necesarios y no exista obligación legal de conservarlos.",
        "Oponerte a determinados tratamientos o solicitar su limitación.",
        "Solicitar una copia de tus datos en formato legible.",
      ],
      closing: [
        "Responderemos en un plazo máximo de [PLAZO LEGAL APLICABLE]. Si consideras que no hemos atendido correctamente tu solicitud, puedes reclamar ante la autoridad de protección de datos competente.",
      ],
    },
    {
      heading: "8. Seguridad",
      paragraphs: [
        "Aplicamos medidas técnicas y organizativas para proteger tus datos: conexiones cifradas (HTTPS), acceso al panel de administración restringido a cuentas autorizadas y autenticadas, y registro de qué administrador aprueba o rechaza cada compra.",
        "Ningún sistema es infalible. Si ocurriera una brecha de seguridad que afecte tus datos, te lo notificaremos conforme exige la normativa aplicable.",
      ],
    },
    {
      heading: "9. Menores de edad",
      paragraphs: [
        "La plataforma está dirigida exclusivamente a mayores de 18 años. No recogemos datos de menores de forma consciente. Si detectamos que hemos tratado datos de un menor, los eliminaremos.",
      ],
    },
    {
      heading: "10. Cambios en esta política",
      paragraphs: [
        "Si modificamos esta política, publicaremos la nueva versión en esta página con su fecha de actualización.",
      ],
    },
  ],
};

export const COOKIES: LegalDoc = {
  slug: "cookies",
  title: "Política de Cookies",
  summary:
    "Qué cookies utiliza el sitio, para qué sirven y cómo puedes gestionarlas.",
  updatedAt: UPDATED_AT,
  blocks: [
    {
      heading: "1. Qué es una cookie",
      paragraphs: [
        "Una cookie es un pequeño archivo de texto que un sitio web guarda en tu navegador. Se usan para recordar información entre páginas o entre visitas, como tus preferencias.",
      ],
    },
    {
      heading: "2. Qué cookies usamos hoy",
      paragraphs: [
        "Este sitio utiliza únicamente cookies estrictamente necesarias. No usamos cookies de analítica, de publicidad ni de redes sociales, y no compartimos información con terceros con fines publicitarios.",
      ],
      bullets: [
        "plp_consent — guarda tu decisión sobre las cookies para no volver a preguntártelo en cada visita. Duración: 6 meses. Origen: propia.",
        "[SI AÑADES ANALÍTICA O PÍXELES EN EL FUTURO, DECLÁRALOS AQUÍ: nombre, finalidad, duración y si son propias o de terceros.]",
      ],
    },
    {
      heading: "3. Cookies estrictamente necesarias",
      paragraphs: [
        "Son las que permiten el funcionamiento básico del sitio y sin las cuales no puede prestarse el servicio que has solicitado. No requieren tu consentimiento, pero te informamos de ellas.",
        "En el panel de administración, reservado al personal autorizado, se utilizan además cookies de sesión para mantener la sesión iniciada de forma segura. Esas cookies no se instalan a los visitantes del sitio público.",
      ],
    },
    {
      heading: "4. Cookies analíticas y de marketing",
      paragraphs: [
        "Actualmente no utilizamos ninguna. Si en el futuro las incorporáramos, solo se activarán después de que des tu consentimiento expreso mediante el panel de preferencias, y esta política se actualizará para describirlas.",
      ],
    },
    {
      heading: "5. Cómo gestionar tus preferencias",
      paragraphs: [
        "Puedes cambiar tu decisión en cualquier momento desde el enlace \"Preferencias de cookies\" disponible en el pie de página.",
        "También puedes bloquear o eliminar cookies desde la configuración de tu navegador. Ten en cuenta que bloquear las cookies estrictamente necesarias puede afectar al funcionamiento del sitio.",
      ],
    },
    {
      heading: "6. Contacto",
      paragraphs: [
        `Si tienes dudas sobre el uso de cookies, escríbenos a ${CONTACTO}.`,
      ],
    },
  ],
};

export const LEGAL_DOCS: Record<string, LegalDoc> = {
  terminos: TERMINOS,
  privacidad: PRIVACIDAD,
  cookies: COOKIES,
};
