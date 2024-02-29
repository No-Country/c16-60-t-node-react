import { UserButton } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Logo from "@/components/ui/Logo";
import {
  ClipboardList,
  HandCoins,
  ShoppingBasket,
  ShoppingCart,
} from "lucide-react";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className='w-full bg-white border-b border-slate-100 shadow px-0'>
      <div className='flex items-center w-full justify-between px-10 py-4'>
        <Logo />
        <Input
          type='search'
          placeholder='Search...'
          className='flex w-full rounded-md border border-input bg-gray-200 px-3 py-1 text-sm shadow-sm transition-colors placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring max-w-[600px]'
        />
        <div className='flex flex-row '>
          <Button variant='ghost'>
            <Link href='/'>
            <ShoppingCart color='#421c86' />
            </Link>
          </Button>
          <Button variant='ghost'>
            <Link href='/'>
            <ClipboardList color='#421c86' />
            </Link>
          </Button>
          <Button variant='ghost'>
            <Link href='/'>
            <ShoppingBasket color='#421c86' />
            </Link>
          </Button>
          <Button variant='ghost'>
            <Link href='/'>
            <HandCoins color='#421c86' />
            </Link>
          </Button>
        </div>
          <UserButton afterSignOutUrl='/' />
      </div>
    </nav>
  );
};
export default Navbar;
