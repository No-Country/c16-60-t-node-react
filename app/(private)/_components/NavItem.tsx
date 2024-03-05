import Link from "next/link";

interface Props {
  href: string;
  children: React.ReactNode;
}

const NavItem = ({ href, children }: Props) => {
  return (
    <Link
      href={href}
      className="hover:bg-violet-500 p-2 rounded text-stone-600 hover:text-slate-200 transition-colors flex pr-2"
    >
      {children}
    </Link>
  );
};
export default NavItem;
