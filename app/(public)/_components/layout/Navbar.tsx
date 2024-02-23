import { Button } from "@/components/ui/button";
import { NAV_LINKS } from "@/constants";
import { Menu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Logo from "../elements/Logo";
import { MobileMenu } from "../mobile/MobileMenu";

const Navbar = () => {
  return (
    <nav className="flex items-center  justify-between max-w-screen-xl mx-auto  pt-7 ">
      {/* Logo */}
      <Logo />

      <div className=" hidden lg:flex items-center gap-4 ">
        {/*Links*/}
        <ul className="space-x-4  lg:flex items-end">
          {NAV_LINKS.map(({ href, key, label }) => (
            <Link href={href} key={key} className="hover:text-violet-500 transition-all">
              {label}
            </Link>
          ))}
        </ul>

        {/* Button */}
        <Button variant="purple" className="lg:flex gap-2">
          <span>Ingresar</span>
          <Image src={"ingresar.svg"} alt="logo" width={25} height={25} />
        </Button>
      </div>
      <div className="lg:hidden">
        <Menu className="w-16" />
        <MobileMenu />
      </div>
    </nav>
  );
};

export default Navbar;
