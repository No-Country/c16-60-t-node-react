import Logo from "@/components/ui/Logo";
import { NAV_LINKS_PRIVATE } from "@/constants";
import { UserButton } from "@clerk/nextjs";
import { MobileMenu } from "./MobileMenu";
import NavItem from "./NavItem";

const Navbar = () => {
  return (
    <nav className="border-slate-100 bg-white shadow px-0 border-b w-full">
      <div className="flex justify-between items-start md:items-center px-3 sm:px-10 py-4 w-full">
        <Logo />

        <div className="flex items-center gap-x-3">
          <div className="md:flex flex-row gap-1 hidden">
            {NAV_LINKS_PRIVATE.map(({ href, key, icon: Icon }) => (
              <NavItem key={key} href={href}>
                <Icon className="w-6 h-6" />
              </NavItem>
            ))}
          </div>
          <div className="md:flex hidden w-8 h-8">
            <UserButton afterSignOutUrl="/" />
          </div>
        </div>
        <MobileMenu />
      </div>
    </nav>
  );
};
export default Navbar;
