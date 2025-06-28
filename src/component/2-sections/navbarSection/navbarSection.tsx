import React from 'react'
import {
  Navbar,
  NavbarBrand,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
  Tooltip,
} from "@heroui/react";
import { Image } from "@heroui/image";
import { IconAward, IconId, IconMessage, IconZoomQuestion } from '@tabler/icons-react';


export const NaavbarSection = () => {

  return (
    <Navbar className='bg-black bg-transparent' isBlurred>

      <NavbarContent className="sm:hidden max-w-14 " justify="start">
        <NavbarBrand>

          <Image
            src="./isologo.png"
            width={100}
            height={40}
            alt="Marca del sitio"
            className='cursor-pointer'
          />
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex" justify="start">
        <NavbarBrand>
          <Image
            src="./isologo.png"
            width={120}
            height={70}
            alt="Marca del sitio"
            className='cursor-pointer'

          />
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent justify="end" className='hidden sm:flex'>
        <NavbarItem >
          <Button color="primary" className='font-bold' variant="shadow" aria-label="Participar ya">
            Participar ya
          </Button>
        </NavbarItem>

        <NavbarItem>
          <Tooltip content="Ganadores" showArrow={true} >
            <Button isIconOnly aria-label="Contactar" variant="light" >
              <IconAward stroke={2} />
            </Button>
          </Tooltip>
        </NavbarItem>

        <NavbarItem >
          <Tooltip content="Quienes somos y Permisos" showArrow={true} >
            <Button isIconOnly aria-label="Quienes somos y Permisos" variant="light" >
              <IconId stroke={2}  />
            </Button>
          </Tooltip>
        </NavbarItem>

        <NavbarItem>
          <Tooltip content="Contactar" showArrow={true} >
            <Button isIconOnly aria-label="Contactar" variant="light" >
              <IconMessage  stroke={2} />
            </Button>
          </Tooltip>
        </NavbarItem>

        <NavbarItem>
          <Tooltip content="Preguntas frecuentes" showArrow={true}  placement='bottom-end'>
            <Button isIconOnly aria-label="Preguntas frecuentes" variant="light" >
              <IconZoomQuestion  stroke={2} />
            </Button>
          </Tooltip>
        </NavbarItem>

      </NavbarContent>

      <NavbarContent className="sm:hidden" justify="center">
        <NavbarMenuToggle />
      </NavbarContent>

      <NavbarMenu className=' justify-center bg-transparent gap-4'>

        <NavbarMenuItem key={0}>
          <Link className=" cursor-pointer text-white" size="lg"  >
            PARTICIPAR YA
          </Link>
        </NavbarMenuItem>

        <NavbarMenuItem key={1}>
          <Link className=" cursor-pointer text-white" size="lg"  >
            Ganadores
          </Link>
        </NavbarMenuItem>

        <NavbarMenuItem key={2}>
          <Link className=" cursor-pointer text-white" size="lg"  >
            Quienes somos y permisos
          </Link>
        </NavbarMenuItem>

        <NavbarMenuItem key={3}>
          <Link className=" cursor-pointer text-white" size="lg"  >
            Contactar
          </Link>
        </NavbarMenuItem>

        <NavbarMenuItem key={3}>
          <Link className=" cursor-pointer text-white" size="lg"  >
            Preguntas frecuentes
          </Link>
        </NavbarMenuItem>

      </NavbarMenu>
    </Navbar>
  );
}
