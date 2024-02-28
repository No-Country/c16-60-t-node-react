import { donate } from "@/actions/donations";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import Image from "next/image";

export const FormDonation = async () => {
  return (
    <div className='flex flex-col w-4/5 sm:max-w-[500px] sm:w-2/5'>
      <form action={donate} className='flex flex-col justify-center gap-4'>
        <Label>
          <Input
            name='amount'
            type='number'
            min='0'
            className='bg-gray-200 text-custom-purple font-semibold text-base rounded-lg text-center'
            placeholder='Valor'
            required
          />
        </Label>
        <Label>
          <Textarea
            name='message'
            className='bg-gray-200 text-custom-purple font-semibold text-base rounded-lg text-center'
            placeholder='Tu Mensaje (opcional)'
          />
        </Label>
        <Button type='submit' variant='purple'>Enviar</Button>
      </form>
      <div className='flex justify-center my-8 sm:mb-0'>
        <Image src='./MP-logo.svg' width={"261"} height={"70"} alt='Mercado libre logo' />
      </div>
    </div>
  );
};
