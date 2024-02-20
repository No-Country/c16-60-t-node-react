import { NAV_LINKS } from "@/constants";
import Link from "next/link";
import Image from "next/image";
import Button from "./Button";
import Logo from "./Logo";

const Navbar = () => {
  return (
    <nav className='flex  justify-between container pt-5 '>
      {/* Logo */}
      <Logo />

      {/*Links*/}
      <ul className=' gap-12 hidden lg:flex items-end'>
        {NAV_LINKS.map((link) => (
          <Link
            href={link.href}
            key={link.key}
            className='hover:text-violet-500 transition-all'>
            {link.label}
          </Link>
        ))}
      </ul>

      {/*Remplazar por el boton correspondente de la carpeta components*/}
      {/* Button */}
      <div className='hidden lg:flex'>
        <Button
          type='button'
          title='Ingresar'
          icon='ingresar.svg'
          variant='btn_dark_violet'
        />
      </div>

      <div className='flex lg:hidden'>
        <Image src={"menu.svg"} alt='' width={25} height={25} />
      </div>
    </nav>
  );
};

export default Navbar;
