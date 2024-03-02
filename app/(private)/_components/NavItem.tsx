import Link from "next/link";

interface Props {
  href: string;
  children: React.ReactNode;
}

const NavItem = ({ href, children }: Props) => {
  return (
    <Link
      href={href}
      className="text-2xl text-gray-800/80 hover:bg-violet-500 hover:text-white p-2 rounded transition-colors "
    >
      {children}
    </Link>
  );
};
export default NavItem;
