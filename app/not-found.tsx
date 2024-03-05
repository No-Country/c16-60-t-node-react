import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className='m-5 sm:m-14'>
      <h1 className='text-8xl sm:text-9xl font-extrabold py-12'>( ._.)</h1>
      <h2 className='text-4xl sm:text-5xl font-bold '>
        ¡Ups! Parece que esta página no existe.
      </h2>
      <p className='text-base font-light text-black py-5'>
        Lo sentimos, pero la página que estás buscando no existe o no se
        encuentra disponible. Puede que haya sido movida o eliminada.
      </p>
      <Button className='flex flex-row my-5 gap-2 hover:gap-3 transition-all' variant='outline'>
        <ArrowLeft size={15}/>
        <Link href='/'>Volver al inicio</Link>
      </Button>
    </div>
  );
}
