import { FormDonation } from "./formDonation";

export const CardDonation = () => {
  return (
    <div className='bg-custom-white shadow-sm flex flex-col justify-center lg:justify-around px-3 py-5 items-center lg:rounded-2xl lg:flex-row lg:h-[75vh] md:h-screen 2xl:h-[500px]'>
      <div className='flex flex-col lg:w-3/6 h-4/6 py-5 lg:py-0 lg:justify-around '>
        <h1 className='text-custom-purple font-bold text-5xl text-center lg:text-left my-7 lg:mt-0 sm:text-6xl sm:font-extrabold'>
          Gracias por apoyar nuestra causa
        </h1>
        <p className='font-medium text-gray-600 text-base sm:text-base text-center lg:text-left'>
          El apoyo de personas como vos nos permite llevar ayuda a quienes más
          lo necesitan, sean quienes sean y estén donde estén. Haciendo una
          donación por única vez estás contribuyendo con la ayuda cientos de
          miles de personas afectadas por emergencias humanitarias causadas por
          catástrofes naturales, hambrunas, epidemias o conflictos armados.
        </p>
      </div>
      <div className='flex flex-col justify-center items-center py-5 lg:py-0 '>
        <h2 className='text-custom-purple font-bold text-3xl text-center pb-5'>
          Quiero hacer una donación de
        </h2>
        <FormDonation />
      </div>
    </div>
  );
};