import Image from "next/image";

const Home = () => {
  return (
    <section className="container flex gap-9  flex-col lg:flex-row h-[800px] lg:h-[500px]  py-10 xl:pt-16">
      <div className="flex flex-col justify-center gap-6 flex-1 pr-9">
        <h1 className="text-4xl lg:text-6xl font-bold text-center text-wrap lg:text-left">
          Smart Help: donaciones que <span className="text-violet-700">impactan</span>.
        </h1>
        <p className="text-gray-600 text-base xl:text-xl  text-wrap">
          Te damos la bienvenida a la plataforma de donaciones con visión de futuro donde encontrarás una
          amplia variedad de causas y proyectos dignos de apoyo, desde iniciativas locales que abordan
          necesidades inmediatas hasta programas globales que enfrentan desafíos a gran escala.
        </p>
      </div>

      <div className="flex-1  h-full w-full ">
        <Image
          src={"/make-a-change.jpg"}
          width={400}
          height={400}
          alt={"Imagen-homepage"}
          className="w-full h-full object-cover rounded-xl"
        />
      </div>
    </section>
  );
};

export default Home;
