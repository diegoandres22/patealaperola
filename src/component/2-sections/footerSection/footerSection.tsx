import React from 'react'
import { Button, Link } from "@heroui/react";
import { IconAward, IconBrandInstagram, IconBrandTiktok, IconBrandWhatsapp, IconId, IconMail, IconQuestionMark } from '@tabler/icons-react';

export const FooterSection = () => {
  return (
    <footer className=' pt-4 h-auto flex flex-col items-center gap-2'>


      <div className="w-5/6 mx-auto flex justify-evenly items-center">

        <Button color="primary" className='font-bold w-auto min-w-28' variant="shadow" aria-label="Participar ya" >
          <Link href="/" className='text-white'>
            Participar ya
          </Link>
        </Button>

        <Link isBlock color="foreground" className='text-white hidden md:flex' href="/#Winners">
          Ganadores
        </Link>
        <Button isIconOnly aria-label="Ganadores" variant="light" className='md:hidden w-auto' >
          <Link href="#Winners">
            <IconAward className='text-white' stroke={2} />
          </Link>
        </Button>


        <Link isBlock color="foreground" className='text-white hidden md:flex whitespace-nowrap' href="#">
          Quienes somos y permisos
        </Link>
        <Button isIconOnly aria-label="Quienes somos y Permisos" variant="light" className='flex md:hidden' >
          <IconId stroke={2} className='text-white ' />
        </Button>


        <Link isBlock color="foreground" className='text-white hidden md:flex' href="/faq">
          Preguntas frecuentes
        </Link>
        <Button isIconOnly aria-label="Preguntas frecuentes" variant="light" className='flex md:hidden'>
          <Link href="/faq" className='text-white'>
            <IconQuestionMark stroke={2} />
          </Link>
        </Button>
      </div>

      <div className="w-2/4 mx-auto flex justify-evenly ">
        <Link className='text-white' href="https://www.tiktok.com/" target='_blank'>
          <IconBrandTiktok stroke={2} />
        </Link>
        <Link className='text-white' href="https://www.instagram.com/" target='_blank'>
          <IconBrandInstagram stroke={2} />
        </Link>
        <Link className='text-white' href="https://wa.me/584124998202" target='_blank'>
          <IconBrandWhatsapp stroke={2} />
        </Link>
        <Link className='text-white' href="mailto:patealaperola@gmail.com?body=necesito%20ayuda">
          <IconMail stroke={2} />
        </Link>

      </div>

      <div className="flex justify-center items-center mt-4">
        <p >Desarrollado por
          <a href="" className='ml-1'>
            <strong>
              &lt; DYV &gt; Software Development
            </strong>
          </a>
          .
        </p>
      </div>

      <div className="flex justify-center items-center mt-4 ">
        <p >
          Patea La Perola © Todos los derechos reservados.
        </p>
      </div>
    </footer>
  )
}
