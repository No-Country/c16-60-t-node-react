import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { NAV_LINKS_PRIVATE } from "@/constants";
import Logo from "@/components/ui/Logo";
import Link from "next/link";
import { UserButton } from "@clerk/nextjs";

export const MobileMenu = () => {
  return (
    <div className='md:hidden'>
      <Sheet>
        <SheetTrigger asChild>
          <Button variant='ghost'>
            <Menu />
          </Button>
        </SheetTrigger>
        <SheetContent side='left'>
          <SheetHeader className='flex justify-center items-center'>
            <SheetTitle className='my-4'>
              <Logo />
            </SheetTitle>
            <div className='grid gap-4 py-4'>
              <div className='flex flex-col items-start gap-4'>
                {NAV_LINKS_PRIVATE.map(({ href, key, label, icon: Icon }) => (
                  <Button variant='ghost' key={key}>
                    <Link href={href} className='text-base flex flex-row gap-3'>
                      <Icon color='#421c86' />
                      {label}
                    </Link>
                  </Button>
                ))}
                <Button
                  variant='purple'
                  className='text-base flex flex-row gap-3 py-6'>
                  <UserButton afterSignOutUrl='/' />
                  Usuario
                </Button>
              </div>
            </div>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </div>
  );
};