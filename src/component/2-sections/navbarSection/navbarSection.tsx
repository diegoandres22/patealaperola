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
import { IconAward, IconId, IconQuestionMark } from '@tabler/icons-react';
import { LogoImage } from '@/component/3-elements';


export const NaavbarSection = () => {

  return (
    <Navbar className='bg-black bg-transparent py-4' >

      <NavbarContent justify="start">
        <NavbarBrand>
          <LogoImage />
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
              <Link href="/#Winners" className='text-white'>
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
          <Tooltip content="Preguntas frecuentes" showArrow={true} >
            <Button isIconOnly aria-label="Preguntas frecuentes" variant="light" >
              <Link href="/faq" className='text-white'>
                <IconQuestionMark stroke={2} />
              </Link>
            </Button>
          </Tooltip>
        </NavbarItem>

      </NavbarContent>

      <NavbarContent className="sm:hidden" justify="center">
        <NavbarMenuToggle />
      </NavbarContent>

      <NavbarMenu className=' justify-center bg-transparent gap-4'>

        <NavbarMenuItem key={0}>
          <Link className=" text-white" size="lg" href="/" >
            PARTICIPAR YA
          </Link>
        </NavbarMenuItem>

        <NavbarMenuItem key={1}>
          <Link className=" text-white" size="lg" href="/#Winners" >
            Ganadores
          </Link>
        </NavbarMenuItem>

        <NavbarMenuItem key={2}>
          <Link className=" text-white" size="lg"  >
            Quienes somos y permisos
          </Link>
        </NavbarMenuItem>

        <NavbarMenuItem key={3}>
          <Link className=" text-white" size="lg" href='/faq' >
            Preguntas frecuentes
          </Link>
        </NavbarMenuItem>

      </NavbarMenu>
    </Navbar>
  );
}
