import Image from "next/image";

const Home = () => {
  return (
    <section className='container flex gap-9  flex-col lg:flex-row h-[800px] lg:h-[500px]  py-10'>
      <div className='flex flex-col gap-9 flex-1 pr-9'>
        <h1 className='text-5xl lg:text-7xl font-bold text-center lg:text-left'>
          Smart Help: donaciones que{" "}
          <span className='text-violet-600'>impactan</span>.
        </h1>
        <p className='text-gray-600  text-justify lg:text-left lg:text-base'>
          Te damos la bienvenida a la plataforma de donaciones con visión de
          futuro donde encontrarás una amplia variedad de causas y proyectos
          dignos de apoyo, desde iniciativas locales que abordan necesidades
          inmediatas hasta programas globales que enfrentan desafíos a gran
          escala.
        </p>
      </div>

      <div className='flex-1 make-change-img h-full w-full'>
        <Image
          src={"/imagen-ejemplo.png"}
          width={500}
          height={500}
          alt={"Imagen-homepage"}
          className='w-full h-full object-cover'
        />
      </div>
    </section>
  );
};

export default Home;
