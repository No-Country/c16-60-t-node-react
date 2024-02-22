import Logo from "../elements/Logo";
import Link from "next/link";
import { FOOTER_LINKS } from "@/constants";




// Rediseñar el Footer para que coincida con el diseño del Figma

const Footer = () => {
  return (
    <footer className='container py-10 flex flex-col lg:flex-row'>
      <div className='flex justify-center pb-3'>
        <Logo />
      </div>

      <ul className="w-full flex flex-col lg:flex-row justify-end  gap-3 lg:gap-9 items-center">
        { FOOTER_LINKS.map( (item, index)=>(
          <Link href={item.url} key={index} className="hover:text-violet-600">{item.title}</Link>
        ) ) }
      </ul>

   
    </footer>
  );
};

export default Footer;