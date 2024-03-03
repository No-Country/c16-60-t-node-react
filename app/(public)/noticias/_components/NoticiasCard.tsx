import { NoticiaData } from "@/interfaces/noticias";
import Image from "next/image";
import { NoticiasPopup } from "./NoticiasPopup";

export const NoticiasCard = (noticia: NoticiaData) => {
  const { title, description, image, createdAt } = noticia;
  return (
    <div className='flex flex-col items-center sm:items-start justify-between my-5 rounded-lg border p-5 w-full '>
      <div className='lg:h-[200px] flex justify-center'>
        <Image
          src={image}
          width={"400"}
          height={"200"}
          alt={title}
          className='rounded-md'
        />
      </div>
      <h1 className='text-sm text-pretty lg:text-base line-clamp-2 font-medium my-4'>
        {title}
      </h1>
      <NoticiasPopup {...noticia} />
    </div>
  );
};
