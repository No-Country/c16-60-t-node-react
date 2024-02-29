import { NAV_LINKS_PRIVATE } from "@/constants";
import { MobileMenu } from "./MobileMenu";
import { UserButton } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Logo from "@/components/ui/Logo";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className='w-full bg-white border-b border-slate-100 shadow px-0'>
      <div className='flex items-center w-full justify-between px-3 sm:px-10 py-4'>
        <Logo />
        <Input
          type='search'
          placeholder='Search...'
          className='flex rounded-md border border-input bg-gray-200 px-3 py-1 text-sm shadow-sm transition-colors placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring w-2/6 lg:w-3/6'
        />
        <div className='flex-row hidden gap-2 md:flex'>
          {NAV_LINKS_PRIVATE.map(({ href, key, icon: Icon }) => (
            <Button variant='ghost' key={key}>
              <Link href={href}>
                <Icon color='#421c86' />
              </Link>
            </Button>
          ))}
        </div>
        <div className='hidden md:flex w-8 h-8'>
          <UserButton afterSignOutUrl='/' />
        </div>
        <MobileMenu />
      </div>
    </nav>
  );
};
export default Navbar;
