import React from 'react'
import { Button, Link } from "@heroui/react";
import { IconAward, IconBrandInstagram, IconBrandTiktok, IconBrandWhatsapp, IconId, IconMail, IconQuestionMark } from '@tabler/icons-react';
import { CookiePreferencesLink } from '@/component/3-elements/cookieConsent';

export const FooterSection = () => {
  return (
    <footer className='pt-4 h-auto flex flex-col items-center gap-2'>

      <div className="w-5/6 mx-auto flex justify-evenly items-center">

        <Button color="primary" className='font-bold w-auto min-w-28' variant="shadow" aria-label="Participar ya" >
          <Link href="/" className='text-white'>
            Participar ya
          </Link>
        </Button>

        <Link isBlock color="foreground" className='hidden md:flex' href="/#Winners">
          Ganadores
        </Link>
        <Button isIconOnly aria-label="Ganadores" variant="light" className='md:hidden w-auto' >
          <Link href="#Winners" color="foreground">
            <IconAward stroke={2} />
          </Link>
        </Button>

        {/* Antes apuntaba a href="#" (enlace muerto): ahora lleva a los términos. */}
        <Link isBlock color="foreground" className='hidden md:flex whitespace-nowrap' href="/terminos">
          Quiénes somos y permisos
        </Link>
        <Button isIconOnly aria-label="Quiénes somos y permisos" variant="light" className='flex md:hidden' >
          <Link href="/terminos" color="foreground">
            <IconId stroke={2} />
          </Link>
        </Button>

        <Link isBlock color="foreground" className='hidden md:flex' href="/faq">
          Preguntas frecuentes
        </Link>
        <Button isIconOnly aria-label="Preguntas frecuentes" variant="light" className='flex md:hidden'>
          <Link href="/faq" color="foreground">
            <IconQuestionMark stroke={2} />
          </Link>
        </Button>
      </div>

      <div className="w-2/4 mx-auto flex justify-evenly ">
        <Link aria-label="TikTok" color="foreground" href="https://www.tiktok.com/" target='_blank'>
          <IconBrandTiktok stroke={2} />
        </Link>
        <Link aria-label="Instagram" color="foreground" href="https://www.instagram.com/" target='_blank'>
          <IconBrandInstagram stroke={2} />
        </Link>
        <Link aria-label="WhatsApp" color="foreground" href="https://wa.me/584124998202" target='_blank'>
          <IconBrandWhatsapp stroke={2} />
        </Link>
        <Link aria-label="Correo de contacto" color="foreground" href="mailto:patealaperola@gmail.com?body=necesito%20ayuda">
          <IconMail stroke={2} />
        </Link>
      </div>

      {/* Enlaces legales: obligatorios y accesibles desde cualquier página. */}
      <nav
        aria-label="Enlaces legales"
        className="mt-4 flex flex-wrap items-center justify-center gap-x-4 gap-y-2 px-4 text-center"
      >
        <Link href="/terminos" className="text-sm" color="foreground">
          Términos y Condiciones
        </Link>
        <span aria-hidden className="text-foreground-subtle">·</span>
        <Link href="/privacidad" className="text-sm" color="foreground">
          Política de Privacidad
        </Link>
        <span aria-hidden className="text-foreground-subtle">·</span>
        <Link href="/cookies" className="text-sm" color="foreground">
          Política de Cookies
        </Link>
        <span aria-hidden className="text-foreground-subtle">·</span>
        <CookiePreferencesLink />
      </nav>

      <div className="flex justify-center items-center mt-4">
        <p>Desarrollado por
          <a href="" className='ml-1'>
            <strong>
              &lt; DYV &gt; Software Development
            </strong>
          </a>
          .
        </p>
      </div>

      <div className="flex justify-center items-center mt-4 mb-6">
        <p className="text-sm text-foreground-muted">
          Patea La Perola © {new Date().getFullYear()} · Todos los derechos reservados.
        </p>
      </div>
    </footer>
  )
}
