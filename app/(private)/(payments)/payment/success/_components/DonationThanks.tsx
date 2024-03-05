import { CheckCircle2 } from "lucide-react";

export const DonationThanks = () => {
  return (
    <div className='bg-[#845CF8] shadow-sm flex flex-col justify-center items-center px-3 py-5 h-screen lg:rounded-2xl lg:w-5/6 lg:h-[82vh]'>
      <div className='flex flex-col sm:h-4/6 py-5 lg:py-0 justify-center sm:w-4/5 '>
        <h1 className='text-white font-bold text-5xl text-center my-7 lg:mt-0 sm:text-6xl sm:font-extrabold'>
          ¡Gracias, tu donativo fué enviado con éxito!
        </h1>
        <div className='flex justify-center'>
          <CheckCircle2 size={150} color='#ffffff' className='my-6' />
        </div>
        <p className='font-medium text-white text-sm text-center'>
          El apoyo de personas como vos nos permite llevar ayuda a quienes más
          lo necesitan, sean quienes sean y estén donde estén. Haciendo una
          donación por única vez estás contribuyendo con la ayuda cientos de
          miles de personas afectadas por emergencias humanitarias causadas por
          catástrofes naturales, hambrunas, epidemias o conflictos armados.
        </p>
      </div>
    </div>
  );
};
