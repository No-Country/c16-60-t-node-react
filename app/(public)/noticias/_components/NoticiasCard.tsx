import Image from "next/image";
import { NoticiasPopup } from "./NoticiasPopup";
import { Separator } from "@/components/ui/separator";

export const NoticiasCard = ({
  imagen,
  nombreImagen,
  titulo,
  descripcion,
  fecha,
}: {
  imagen: string;
  nombreImagen: string;
  titulo: string;
  descripcion: string;
  fecha: string;
}) => {
  return (
    <div className='flex flex-col items-center justify-between rounded-lg my-5 sm:bg-gray-200 sm:p-4'>
      <Image
        src={imagen}
        width={"500"}
        height={"500"}
        alt={nombreImagen}
        className='rounded-md mb-3 sm:rounded-lg'
      />
      <Separator className='sm:hidden' />
      <h1 className='text-xl leading-tight font-bold mt-3 sm:m-0'>{titulo}</h1>
      <div className='line-clamp-2'>
        <p className='text-base mt-3 font-normal leading-tight hidden sm:block'>
          {descripcion}
        </p>
      </div>
      <div className='flex justify-center mt-6'>
        <NoticiasPopup
          titulo={titulo}
          descripcion={descripcion}
          imagen={imagen}
          nombreImagen={nombreImagen}
          fecha={fecha}
        />
      </div>
    </div>
  );
};