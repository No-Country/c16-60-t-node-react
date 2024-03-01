import Link from "next/link";

interface Props {
  href: string;
  children: React.ReactNode;
}

const NavItem = ({ href, children }: Props) => {
  return (
    <Link
      href={href}
      className="text-xl text-gray-500 hover:bg-violet-800/40 hover:text-white p-2 rounded transition-colors "
    >
      {children}
    </Link>
  );
};
export default NavItem;
