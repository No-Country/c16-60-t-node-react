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
    <div className='p-4 text-custom-purple'>
      <Image
        src={imagen}
        width={"500"}
        height={"500"}
        alt={nombreImagen}></Image>
      <h1 className='text-2xl mt-3 font-medium'>{titulo}</h1>
      <p className='text-base mt-3 mb-4 font-normal leading-6'>{descripcion}</p>
      <Link href={link} className='text-base underline font-medium'>
        Leer mas
      </Link>
    </div>
  );
};
