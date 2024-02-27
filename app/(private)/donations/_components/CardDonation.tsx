import { FormDonation } from "./FormDonation";

export const CardDonation = () => {
  return (
    <div className='bg-neutral-100 flex flex-col max-w-4xl justify-center items-center sm:py-6 sm:rounded-2xl'>
      <h1 className='text-custom-purple font-medium text-4xl text-center my-7 sm:text-5xl sm:mt-5 sm:mb-8'>
        Gracias por apoyar nuestra causa
      </h1>
      <p className='font-normal text-sm px-5 sm:text-base sm:px-[90px]'>
        El apoyo de personas como vos nos permite llevar ayuda a quienes más lo
        necesitan, sean quienes sean y estén donde estén. Haciendo una donación
        por única vez estás contribuyendo con la ayuda cientos de miles de
        personas afectadas por emergencias humanitarias causadas por catástrofes
        naturales, hambrunas, epidemias o conflictos armados.
      </p>
      <h2 className='text-custom-purple font-medium text-3xl my-7 text-center'>
        Quiero hacer una donación de
      </h2>
      <FormDonation />
    </div>
  );
};
