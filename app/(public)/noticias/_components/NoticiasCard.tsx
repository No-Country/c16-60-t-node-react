import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export const NoticiasCard = ({
  imagen,
  nombreImagen,
  titulo,
  descripcion,
  link,
}: {
  imagen: string;
  nombreImagen: string;
  titulo: string;
  descripcion: string;
  link: string;
}) => {
  return (
    <div className='mt-4 mb-4 sm:p-4'>
      <Image
        src={imagen}
        width={"500"}
        height={"500"}
        alt={nombreImagen}></Image>
      <h1 className='text-xl mt-3 font-bold'>{titulo}</h1>
      <p className='text-base mt-3 mb-5 font-normal  leading-tight'>
        {descripcion}
      </p>
      <Button variant='purple'>
        <Link className='text-base font-medium' href={link}>
          Leer mas
        </Link>
      </Button>
    </div>
  );
};

//bg-custom-purple w-24 h-8 rounded flex justify-center align-middle
