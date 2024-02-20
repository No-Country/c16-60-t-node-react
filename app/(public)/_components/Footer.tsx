import Logo from "./Logo";
import { FOOTER_CONTACT_INFO, FOOTER_LINKS, SOCIALS } from "@/constants";
import Image from "next/image";
import Link from "next/link";

type columsProps = {
  title: string;
  children: React.ReactNode;
};

const Column = ({ title, children }: columsProps) => {
  return (
    <div className='flex flex-col gap-3'>
      <h4 className='font-bold w-[50%] m-auto pt-9 lg:w-full '>{title}</h4>
      <span>{children}</span>
    </div>
  );
};

// Rediseñar el Footer para que coincida con el diseño del Figma

const Footer = () => {
  return (
    <footer className='container py-10 flex flex-col lg:flex-row'>
      <div className='flex justify-center '>
        <Logo />
      </div>

      <div className='flex w-full justify-around flex-col lg:flex-row lg:items-start '>
        {FOOTER_LINKS.map((column) => (
          <Column key={column.title} title={column.title}>
            <ul className='flex flex-col gap-3  w-[50%] m-auto lg:w-[100%]'>
              {column.links.map((link) => (
                <Link href='#' key={link} className='text-gray-600'>
                  {link}
                </Link>
              ))}
            </ul>
          </Column>
        ))}

        <Column title={FOOTER_CONTACT_INFO.title}>
          <ul className='flex flex-col gap-3 w-[50%]  m-auto   lg:w-[100%]'>
            {FOOTER_CONTACT_INFO.links.map((link, index) => (
              <Link href='#' key={index} className='text-gray-600'>
                {link.label}:{" "}
                <strong className='text-black'>{link.value}</strong>
              </Link>
            ))}
          </ul>
        </Column>

        <Column title={SOCIALS.title}>
          <ul className='flex flow-row lg:flex-col gap-3 w-[50%] m-auto '>
            {SOCIALS.links.map((link, index) => (
              <Image src={link} key={index} alt='' width={25} height={25} />
            ))}
          </ul>
        </Column>
      </div>
    </footer>
  );
};

export default Footer;
