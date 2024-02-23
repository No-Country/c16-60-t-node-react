import Image from "next/image";
import Logo from "../elements/Logo";

export const MobileMenu = () => {
  return (
    <div className="h-dvh fixed inset-0 flex">
      <div className="w-[70%] bg-white h-full">
        <div className="mx-auto w-1/2 mt-4 ">
          <Logo />
        </div>

        <nav className="flex flex-col gap-3 justify-center items-center mt-10 text-xl">
          <ul className="space-y-2 flex flex-col items-start *:py-1 *:px-4">
            <li>Nosotros</li>
            <li>Noticias</li>
            <li>Contactos</li>
          </ul>
          <div className="bg-violet-500 text-white flex  items-center py-2 px-6 rounded-md">
            <span>Ingresar</span>
            <Image src={"ingresar.svg"} alt="logo" width={25} height={25} />
          </div>
        </nav>
      </div>
      <div className="w-[30%] bg-black/60 h-full"></div>
    </div>
  );
};
