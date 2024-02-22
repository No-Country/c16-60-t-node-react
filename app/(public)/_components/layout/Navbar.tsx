import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { NAV_LINKS } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import Logo from "../elements/Logo";

const Navbar = () => {
  return (
    <nav className="flex items-center  justify-between container pt-7 ">
      {/* Logo */}
      <Logo />

      <div className="flex items-center gap-4">
        {/*Links*/}
        <ul className="space-x-4 hidden lg:flex items-end">
          {NAV_LINKS.map((link) => (
            <Link href={link.href} key={link.key} className="hover:text-violet-500 transition-all">
              {link.label}
            </Link>
          ))}
        </ul>

        {/* Button */}
        <Button variant="purple" className="hidden lg:flex gap-2">
          <span>Ingresar</span>
          <Image src={"ingresar.svg"} alt="logo" width={25} height={25} />
        </Button>
      </div>

      <div className="flex lg:hidden">
        <DropdownMenu>
          <DropdownMenuTrigger>
            <Image src={"list.svg"} alt="" width={25} height={25} />{" "}
          </DropdownMenuTrigger>
          <DropdownMenuContent className="bg-gray-200 border border-gray-200">
            <DropdownMenuSeparator />
            <DropdownMenuItem>Nosotros</DropdownMenuItem>
            <DropdownMenuItem>Noticias</DropdownMenuItem>
            <DropdownMenuItem>Testimonios</DropdownMenuItem>
            <DropdownMenuItem className="bg-violet-600 text-white flex justify-center gap-3">
              <span>Ingresar</span>
              <Image src={"ingresar.svg"} alt="logo" width={25} height={25} />
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </nav>
  );
};

export default Navbar;
