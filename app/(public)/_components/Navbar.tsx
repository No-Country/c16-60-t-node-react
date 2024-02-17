"use client";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";

// Este es un navegador de ejemplo, eliminar cuando el Navbar original este completo
export function Navbar() {
  return (
    <nav className='bg-custom-purple'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex items-center justify-between h-16'>
          <div className='flex-shrink-0 text-cyan-200'>
            <Link href='/'>
              <div className="">
                <Image
                  src={"/logo.svg"}
                  width={150}
                  height={150}
                  alt={"logo"}></Image>
              </div>
            </Link>
          </div>
          <div className='flex items-center space-x-4 text-cyan-200'>
            <Button variant='ghost'>
              <Link href='/'>Sobre Nosotros</Link>
            </Button>
            <Button variant='ghost'>
              <Link href='/noticias'>Noticias</Link>
            </Button>
            <Button variant='ghost'>
              <Link href='/'>Testimonio</Link>
            </Button>
            <Button variant='destructive'>
              <Link href='/'>Ingresar</Link>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}
