import Logo from "@/components/ui/Logo";
import { NAV_LINKS_PRIVATE } from "@/constants";
import { UserButton } from "@clerk/nextjs";
import { MobileMenu } from "./MobileMenu";
import NavItem from "./NavItem";

const Navbar = () => {
  return (
    <nav className="w-full bg-white border-b border-slate-100 shadow px-0">
      <div className="flex items-start md:items-center w-full justify-between px-3 sm:px-10 py-4">
        <Logo />

        <div className="flex items-center gap-x-3">
          <div className="flex-row hidden gap-1 md:flex">
            {NAV_LINKS_PRIVATE.map(({ href, key, icon: Icon }) => (
              <NavItem key={key} href={href}>
                <Icon />
              </NavItem>
            ))}
          </div>
          <div className="hidden md:flex w-8 h-8">
            <UserButton afterSignOutUrl="/" />
          </div>
        </div>
        <MobileMenu />
      </div>
    </nav>
  );
};
export default Navbar;
