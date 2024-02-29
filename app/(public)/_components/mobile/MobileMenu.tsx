import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { NAV_LINKS } from "@/constants";
import Logo from "@/components/ui/Logo";
import Link from "next/link";
import Image from "next/image";
import { auth } from "@clerk/nextjs";

export const MobileMenu = () => {
  const { userId } = auth();

  return (
    <div className='lg:hidden'>
      <Sheet>
        <SheetTrigger asChild>
          <Button variant='ghost'>
            <Menu className='w-14' />
          </Button>
        </SheetTrigger>
        <SheetContent side='left'>
          <SheetHeader className='flex justify-center items-center'>
            <SheetTitle className='my-4'>
              <Logo />
            </SheetTitle>
            <div className='grid gap-4 py-4'>
              <div className='flex flex-col items-center gap-4'>
                {NAV_LINKS.map(({ href, key, label }) => (
                  <Button variant='ghost' key={key}>
                    <Link
                      href={href}
                      className='hover:text-violet-500 transition-all text-base'>
                      {label}
                    </Link>
                  </Button>
                ))}
                <Button variant='purple' className='lg:flex gap-2'>
                  {!userId ? (
                    <Link href={"/sign-in"} className='flex items-center gap-1'>
                      <span className='text-base'>Ingresar</span>
                      <Image
                        src={"ingresar.svg"}
                        alt='logo'
                        width={25}
                        height={25}
                      />
                    </Link>
                  ) : (
                    <Link href={"/donations"}>Dashboard</Link>
                  )}
                </Button>
              </div>
            </div>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </div>
  );
};

// Navbar mobile version anterior

{
  /* <div className="h-dvh fixed inset-0 flex">
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
</div> */
}
