import { NAV_LINKS } from "@/constants";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Logo from "../elements/Logo";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

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

      {/* Button */}
      <Button variant="purple" className="hidden lg:flex">
          <span>Ingresar</span>
          <Image src={"ingresar.svg"} alt="logo" width={25} height={25}/>
      </Button>
          

      <div className='flex lg:hidden'>
      <DropdownMenu>
        <DropdownMenuTrigger><Image src={"list.svg"} alt="" width={25} height={25}/> </DropdownMenuTrigger>
        <DropdownMenuContent className="bg-gray-200 border border-gray-200">
          <DropdownMenuSeparator />
          <DropdownMenuItem>Nosotros</DropdownMenuItem>
          <DropdownMenuItem>Noticias</DropdownMenuItem>
          <DropdownMenuItem className="bg-violet-600 text-white flex justify-center gap-3"><span>Ingresar</span><Image src={"ingresar.svg"} alt="logo" width={25} height={25}/></DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

      </div>
    </nav>
  );
};

export default Navbar;
