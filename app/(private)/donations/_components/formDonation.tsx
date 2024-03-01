import { donate } from "@/actions/donations";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import Image from "next/image";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export const FormDonation = async () => {
  return (
    <div className='flex flex-col w-4/5'>
      <form action={donate} className='flex flex-col justify-center gap-4'>
        <Select>
          <SelectTrigger className=' font-normal text-base text-gray-500 shadow-sm rounded-md'>
            <SelectValue placeholder='Causa a la que donar' />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value='inundacion'>Inundacion</SelectItem>
            <SelectItem value='desastre natural'>Desastre natural</SelectItem>
            <SelectItem value='pobreza'>Pobreza</SelectItem>
          </SelectContent>
        </Select>
        <Input
          name='amount'
          type='number'
          min='0'
          className=' shadow-sm font-normal text-base rounded-md'
          placeholder='Valor'
          required
        />
        <Textarea
          name='message'
          className=' shadow-sm font-normal text-base rounded-md resize-none'
          placeholder='Tu Mensaje (opcional)'
        />
        <Button
          type='submit'
          variant='green'
          className='text-black hover:text-black'>
          Enviar
        </Button>
      </form>
      <div className='flex justify-center my-6 sm:mb-0 h-12'>
        <Image
          src='./MP-logo.svg'
          width={"261"}
          height={"70"}
          alt='Mercado libre logo'
        />
      </div>
    </div>
  );
};