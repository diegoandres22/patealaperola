import React from 'react'
import { Accordion, AccordionItem, Link } from '@heroui/react'

export const FaqSection = () => {
    return (
        <div className='w-3/4 xl:w-1/2 bg-neutral-700/30 rounded-xl mx-auto my-6'>
            <Accordion variant="shadow" >
                <AccordionItem key="1" aria-label="Accordion 1" title="¿Cómo puedo participar en la rifa?">
                    Para participar en la rifa, debes seguir estos simples pasos:

                    Presiona el boton Participar ya, escoge una rifa activa según el premio que más te guste

                    Completa el formulario con tu nombre, correo electrónico, número de teléfono, la cantidad de números que deseas jugar,
                    los detalles del titular de la cuenta desde
                    donde se realiza el pago.

                    Elige el método de pago de tu preferencia ( Banesco, Mercantil, Zelle, etc..)

                    Realiza el pago y adjunta un screenshot del comprobante de pago junto con el número de referencia de la transacción.

                    Finalmente, haz clic en <strong>Comprar rifa</strong>  para finalizar tu participación.
                </AccordionItem>
                <AccordionItem key="2" aria-label="Accordion 2" title=" ¿Cuántos números puedo comprar?">
                    Puedes comprar tantos números como desees, siempre y cuando haya disponibilidad. Si ya has seleccionado un número, podrás ver
                    si otros están disponibles para ser adquiridos.
                </AccordionItem>
                <AccordionItem key="3" aria-label="Accordion 3" title="¿Qué información debo proporcionar para participar?">
                    Para completar la participación, necesitarás proporcionar los siguientes datos en el formulario:

                    Nombre completo

                    Correo electrónico (para recibir notificaciones sobre tu participación)

                    Número de teléfono (para confirmación de contacto)

                    Titular de la cuenta desde donde se realiza el pago (esto es importante para validar la transacción)

                    Número(s) de los tickets que estás comprando

                    Comprobante de pago (un screenshot o archivo que demuestre que has realizado el pago)

                    Número de referencia de la transacción (deberás pegar el número que aparece en el comprobante de pago)
                </AccordionItem>
                <AccordionItem key="4" aria-label="Accordion 4" title=" ¿Cómo puedo hacer el pago?">
                    El pago se realiza mediante una transferencia a través de los siguientes métodos:

                    Banesco

                    Mercantil

                    Zelle

                    Santander Río

                    Binance

                    Banesco Panamá

                    Bank of America

                    Cuando completes el formulario, podrás seleccionar tu método de pago preferido. Recuerda que, para validar tu participación, deberás
                    adjuntar un comprobante de pago junto con el número de referencia que aparece en el comprobante.
                </AccordionItem>
                <AccordionItem key="5" aria-label="Accordion 5" title=" ¿Qué debo hacer si no puedo adjuntar el comprobante de pago?">
                    Si tienes problemas para adjuntar el comprobante, asegúrate de que el archivo no exceda el tamaño máximo permitido. Si el problema
                    persiste, puedes intentar recargar la página o contactar al soporte mediante el correo electrónico proporcionado en el sitio web.
                </AccordionItem>
                <AccordionItem key="6" aria-label="Accordion 6" title=" ¿Qué sucede después de completar mi compra?">
                    Una vez que completes el formulario y adjuntes el comprobante de pago, tu participación se registrará en nuestro sistema. Recibirás
                    un correo de confirmación con los detalles de tu compra. Además, recibirás un número de participación único para la rifa.
                </AccordionItem>
                <AccordionItem key="7" aria-label="Accordion 7" title="¿Puedo solicitar un reembolso si cambio de opinión?">
                    Los pagos realizados son no reembolsables. Por favor, asegúrate de que la transacción y los datos estén correctos antes de completar
                    el pago.
                </AccordionItem>
                <AccordionItem key="8" aria-label="Accordion 8" title="¿Cómo puedo saber si gané?">
                    Los ganadores serán anunciados en el sitio web después del sorteo. Además, se enviará un correo electrónico con los detalles de tu
                    premio. Si eres el ganador, te contactaremos por llamada y whatsapp para coordinar la entrega de tu premio.
                </AccordionItem>
                <AccordionItem key="9" aria-label="Accordion 9" title="¿Puedo participar desde cualquier país?">
                    Sí, puedes participar desde cualquier país, siempre y cuando el método de pago que elijas sea accesible desde tu ubicación. Si tienes
                    dudas sobre un método específico, te recomendamos que verifiques si tu banco o plataforma de pago es compatible.
                    Y una vez hayas ganado, le entregamos el premio a la persona que tu elijas.
                </AccordionItem>
                <AccordionItem key="10" aria-label="Accordion 10" title="¿Qué hago si no recibí el correo de confirmación?">
                    Si no has recibido un correo de confirmación, verifica primero tu carpeta de spam. Si aún no encuentras el correo, por favor contáctanos
                    a nuestro correo de soporte, proporcionando la información de tu compra, y te asistiremos de inmediato.
                </AccordionItem>
                <AccordionItem key="11" aria-label="Accordion 11" title="¿Qué hago si no recibí el correo de confirmación?">
                    Si no has recibido un correo de confirmación, verifica primero tu carpeta de spam. Si aún no encuentras el correo, por favor contáctanos
                    a nuestro correo de soporte, proporcionando la información de tu compra, y te asistiremos de inmediato.
                </AccordionItem>
                <AccordionItem key="12" aria-label="Accordion 12" title=" ¿Cómo puedo ver el estado de mi participación?">
                    Puedes verificar el estado de tu participación en el sitio web, en la casilla <strong>Validar Tickets comprados</strong>, donde podrás consultar si tu pago
                    ha sido confirmado, que números te tocaron y si has sido incluido en el sorteo.
                </AccordionItem>
                <AccordionItem key="13" aria-label="Accordion 13" title=" ¿Cómo me contacto con el soporte en caso de problemas?">
                    Si necesitas asistencia o tienes alguna pregunta que no está respondida en estas FAQ, puedes ponerte en contacto con nuestro soporte enviando
                    un correo electrónico a <Link href='https:www.google.com'>patealaperola@gmail.com</Link>. Nuestro equipo estará encantado de ayudarte.
                </AccordionItem>
                
            </Accordion>
        </div>
    )
}
