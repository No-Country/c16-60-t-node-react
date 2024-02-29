import { Button } from "@/components/ui/button";
import { NAV_LINKS } from "@/constants";
import { auth } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import Logo from "@/components/ui/Logo";
import { MobileMenu } from "../mobile/MobileMenu";

const Navbar = () => {
  const { userId } = auth();

  return (
    <nav className='flex items-center  justify-between max-w-screen-xl mx-auto  pt-7 '>
      {/* Logo */}
      <Logo />

      {/* Usuario no logeado */}
      <div className=' hidden lg:flex items-center gap-4 '>
        {/*Links*/}
        <ul className='space-x-4 lg:flex items-end'>
          {NAV_LINKS.map(({ href, key, label }) => (
            <Link
              href={href}
              key={key}
              className='hover:text-violet-500 transition-all text-base'>
              {label}
            </Link>
          ))}
        </ul>

        {/* Button */}
        <Button variant='purple' className='lg:flex gap-2'>
          {!userId ? (
            <Link href={"/sign-in"} className='flex items-center gap-1'>
              <span className='text-base'>Ingresar</span>
              <Image src={"ingresar.svg"} alt='logo' width={25} height={25} />
            </Link>
          ) : (
            <Link href={"/donations"}>Dashboard</Link>
          )}
        </Button>
      </div>

      {/* Navbar Mobile */}
      <MobileMenu />
    </nav>
  );
};

export default Navbar;
