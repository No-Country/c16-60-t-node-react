import {
  Instagram,
  Twitter,
  Facebook,
  MapPin,
  Mail,
  Phone,
} from "lucide-react";
import Link from "next/link";
import { ContactForm } from "./_components/ContactForm";
import { Button } from "@/components/ui/button";

const ContactoPage = () => {
  return (
    <section className='flex flex-col justify-around items-center my-20 bg-white sm:flex-row 2xl:py-32'>
      <div className='flex flex-col justify-around w-[95%] h-[460px] pl-10 pr-4 bg-violet-700 text-white shadow-lg rounded-xl sm:w-[45%] lg:w-[40%]'>
        <div>
          <h1 className='mt-0 mb-2 font-bold text-2xl'>
            Ponte en contacto con nosotros
          </h1>
          <p className='font-light text-sm text-gray-100'>
            ¿Tienes alguna pregunta o sugerencia? ¡Nos encantaría escucharla!
          </p>
        </div>
        <div className='flex flex-col gap-7'>
          <p className='flex flex-row font-medium text-base'>
            <Phone className='mr-5' />
            +1112 3456 789
          </p>
          <Link
            href='mailto:SmartHelp@gmail.com'
            className='flex flex-row font-medium text-base'>
            <Mail className='mr-5' />
            SmartHelp@gmail.com
          </Link>
          <p className='flex flex-row font-medium text-base'>
            <MapPin className='mr-5' />
            Avenida Siempreviva 742
          </p>
        </div>
        <div className='flex felx-row gap-5'>
          <Button className='bg-[#3DC98B] rounded-[100%] w-9 h-9'>
            <Link href='SmartHelp@gmail.com'>
              <Twitter size={20} />
            </Link>
          </Button>
          <Button className='bg-[#3DC98B] rounded-[100%] w-9 h-9'>
            <Link href='SmartHelp@gmail.com'>
              <Instagram size={20} />
            </Link>
          </Button>
          <Button className='bg-[#3DC98B] rounded-[100%] w-9 h-9'>
            <Link href='SmartHelp@gmail.com'>
              <Facebook size={20} />
            </Link>
          </Button>
        </div>
      </div>
      <ContactForm />
    </section>
  );
};

export default ContactoPage;
