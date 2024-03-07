import Image from "next/image";

export const CardText = () => {
  return (
    <section className='flex justify-center relative w-full my-10'>
      <div className='relative w-[99%] h-[500px]'>
        <Image
          src='/about-us.png'
          alt='imagen'
          layout='fill'
          objectFit='cover'
          className='rounded-xl'
        />
        <div className='absolute inset-0 bg-violet-700 bg-opacity-70 flex flex-col items-start justify-center gap-6 px-14 rounded-xl'>
          <h1 className='text-white font-black text-6xl'>
            “La unión
            <br /> es lo que nos permite crecer”
          </h1>
          <p className='text-gray-100 font-medium text-xl'>
            Somos un equipo apasionado por el cambio. Tu apoyo nos impulsa.
            Conócenos más.
          </p>
        </div>
      </div>
    </section>
  );
};
