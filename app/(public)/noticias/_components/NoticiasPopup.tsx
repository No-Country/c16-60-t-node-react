import { Button } from "@/components/ui/button";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Separator } from "@/components/ui/separator";
import { NoticiaData } from "@/interfaces/noticias";
import Image from "next/image";
import Link from "next/link";

export const NoticiasPopup = (noticia: NoticiaData) => {
  const { image, title, description, createdAt } = noticia;
  const fecha = new Date(createdAt).toLocaleDateString();
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant='purple'>Leer Más</Button>
      </DialogTrigger>
      <DialogContent className='overflow-auto h-screen sm:h-[90vh] sm:max-w-[1100px] '>
        <DialogHeader>
          <DialogTitle className='text-left text-3xl py-5 sm:pr-6 sm:mb-2'>
            {title}
          </DialogTitle>
          <Separator />
        </DialogHeader>
        <div className='flex flex-col-reverse gap-5 sm:py-3 sm:flex-row'>
          <DialogDescription className='text-lg leading-relaxed font-normal w-full'>
            {description}
          </DialogDescription>
          <div className='flex flex-col-reverse sm:flex-col'>
            <Image
              src={image}
              width={"800"}
              height={"800"}
              alt={title}
              className='rounded-lg'
            />
            <p className='text-xs text-gray-500 pb-2'>{fecha}</p>
            <Button variant='purple' className='mt-4'>
              <Link href='/donations'>Donar</Link>
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
