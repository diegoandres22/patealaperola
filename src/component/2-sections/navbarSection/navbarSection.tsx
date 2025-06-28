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
import { IconAward, IconId, IconMessage } from '@tabler/icons-react';


export const NaavbarSection = () => {

  return (
    <Navbar className='bg-black bg-transparent py-4' isBlurred>

      <NavbarContent className="flex sm:hidden " justify="start">
        <NavbarBrand>
          <Link href="/" >
            <Image
              src="./isologo.png"
              width={120}
              height={80}
              alt="Marca del sitio"
            />
          </Link>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex " justify="start">
        <NavbarBrand >
          <Link href="/" >
            <Image
              src="./isologo.png"
              width={120}
              height={80}
              alt="Marca del sitio"
            />
          </Link>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent justify="end" className='hidden sm:flex'>
        <NavbarItem >
          <Button color="primary" className='font-bold w-auto min-w-28' variant="shadow" aria-label="Participar ya" >
            <Link href="/" className='text-white'>
              Participar ya
            </Link>
          </Button>
        </NavbarItem>

        <NavbarItem>
          <Tooltip content="Ganadores" showArrow={true} >
            <Button isIconOnly aria-label="Ganadores" variant="light" >
              <Link href="/" className='text-white'>
                <IconAward stroke={2} />
              </Link>
            </Button>
          </Tooltip>
        </NavbarItem>

        <NavbarItem >
          <Tooltip content="Quienes somos y Permisos" showArrow={true} >
            <Button isIconOnly aria-label="Quienes somos y Permisos" variant="light" >
              <IconId stroke={2} />
            </Button>
          </Tooltip>
        </NavbarItem>

        <NavbarItem>
          <Tooltip content="Contactar" showArrow={true} >
            <Button isIconOnly aria-label="Contactar" variant="light" >
              <IconMessage stroke={2} />
            </Button>
          </Tooltip>
        </NavbarItem>

      </NavbarContent>

      <NavbarContent className="sm:hidden" justify="center">
        <NavbarMenuToggle />
      </NavbarContent>

      <NavbarMenu className=' justify-center bg-transparent gap-4'>

        <NavbarMenuItem key={0}>
          <Link className=" cursor-pointer text-white" size="lg" href="/" >
            PARTICIPAR YA
          </Link>
        </NavbarMenuItem>

        <NavbarMenuItem key={1}>
          <Link className=" cursor-pointer text-white" size="lg" href="/" >
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

      </NavbarMenu>
    </Navbar>
  );
}
