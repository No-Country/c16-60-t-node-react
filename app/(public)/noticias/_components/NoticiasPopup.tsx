import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Separator } from "@/components/ui/separator";

export const NoticiasPopup = ({
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
    <Dialog>
      <DialogTrigger asChild>
        <Button variant='purple'>Leer Mas</Button>
      </DialogTrigger>
      <DialogContent className='overflow-y-scroll max-h-screen w-11/12 sm:max-w-screen-xl sm:mx-auto '>
        <DialogHeader>
          <DialogTitle className='text-left text-3xl sm:pr-6 sm:mb-2'>
            {titulo}
          </DialogTitle>
          <Separator />
        </DialogHeader>
        <div className='flex flex-col-reverse gap-4 sm:flex-row'>
          <DialogDescription className='text-lg leading-relaxed font-normal w-full'>
            {descripcion}
          </DialogDescription>
          <div className='flex flex-col-reverse sm:flex-col'>
            <Image
              src={imagen}
              width={"800"}
              height={"800"}
              alt={nombreImagen}
              className='rounded-lg'
            />
            <p className='text-xs text-gray-500 pb-2'>{fecha}</p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
