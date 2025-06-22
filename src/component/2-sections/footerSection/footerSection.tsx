import React from 'react'
import { Link } from "@heroui/react";
import { IconBrandInstagram, IconBrandTiktok, IconBrandWhatsapp, IconMail } from '@tabler/icons-react';

export const FooterSection = () => {
  return (
    <footer className='pt-4 h-auto flex flex-col items-center gap-2'>


      <div className="w-3/4 mx-auto flex justify-evenly ">
        <Link isBlock color="primary" className='text-white' href="#">
          Participar YA
        </Link>
        <Link isBlock color="primary" className='text-white' href="#">
          Ganadores
        </Link>
        <Link isBlock color="primary" className='text-white' href="#">
          Quienes somos y permisos
        </Link>
        <Link isBlock color="primary" className='text-white' href="#">
          Contactar
        </Link>
        <Link isBlock color="primary" className='text-white' href="#">
          Preguntas frecuentes
        </Link>
      </div>

      <div className="w-2/4 mx-auto flex justify-evenly ">
        <Link  className='text-white' href="#">
          <IconBrandTiktok stroke={2} />
        </Link>
        <Link  className='text-white' href="#">
          <IconBrandInstagram stroke={2} />
        </Link>
        <Link  className='text-white' href="#">
          <IconBrandWhatsapp stroke={2} />
        </Link>
        <Link  className='text-white' href="#">
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
