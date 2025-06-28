import React from 'react'
import { Button, Link } from "@heroui/react";
import { IconAward, IconBrandInstagram, IconBrandTiktok, IconBrandWhatsapp, IconId, IconMail, IconMessage, IconZoomQuestion } from '@tabler/icons-react';

export const FooterSection = () => {
  return (
    <footer className=' pt-4 h-auto flex flex-col items-center gap-2'>


      <div className="w-5/6 mx-auto flex justify-evenly items-center">
        
        <Button color="primary" className='font-bold w-auto min-w-28' variant="shadow" aria-label="Participar ya">
          Participar ya
        </Button>


        <Link isBlock color="foreground" className='text-white hidden md:flex' href="#">
          Ganadores
        </Link>
        <Button isIconOnly aria-label="Contactar" variant="light" className='md:hidden w-auto' >
          <IconAward className='text-white' stroke={2} />
        </Button>


        <Link isBlock color="foreground" className='text-white hidden md:flex whitespace-nowrap' href="#">
          Quienes somos y permisos
        </Link>
        <Button isIconOnly aria-label="Quienes somos y Permisos" variant="light" className='flex md:hidden' >
          <IconId stroke={2} className='text-white ' />
        </Button>


        <Link isBlock color="foreground" className='text-white hidden md:flex' href="#">
          Contactar
        </Link>
        <Button isIconOnly aria-label="Contactar" variant="light" className='flex md:hidden'>
          <IconMessage className='text-white ' stroke={2} />
        </Button>


        <Link isBlock color="foreground" className='text-white hidden md:flex whitespace-nowrap' href="#">
          Preguntas frecuentes
        </Link>
        <Button isIconOnly aria-label="Contactar" variant="light" className='flex md:hidden'>
          <IconZoomQuestion className='text-white ' stroke={2} />
        </Button>
      </div>

      <div className="w-2/4 mx-auto flex justify-evenly ">
        <Link className='text-white' href="#">
          <IconBrandTiktok stroke={2} />
        </Link>
        <Link className='text-white' href="#">
          <IconBrandInstagram stroke={2} />
        </Link>
        <Link className='text-white' href="#">
          <IconBrandWhatsapp stroke={2} />
        </Link>
        <Link className='text-white' href="#">
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
