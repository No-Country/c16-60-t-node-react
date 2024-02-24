import { UserButton } from "@clerk/nextjs";

const Navbar = () => {
  return (
    <div className="h-20 w-full bg-white border-b border-slate-100 shadow px-0">
      <div className="flex items-center w-full justify-between px-10 py-4">
        <h1>Navbar</h1>
        <UserButton afterSignOutUrl="/" />
      </div>
    </div>
  );
};
export default Navbar;
