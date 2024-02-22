import { Poppins } from "next/font/google";
import Image from "next/image";

const poppins = Poppins({
  subsets: ["latin"],
  weight: "400",
});



const Logo = () => {
  return (
    <div className='flex  items-center mx-auto lg:m-0'>
      <Image src={"chat-round.svg"} alt='' width={25} height={25} />
      <p
        className={`${poppins.className} text-2xl lg:text-3xl bold-700 whitespace-nowrap`}>
        <strong>
          Smart<span className='text-violet-700'>Help</span>
        </strong>
      </p>
    </div>
  );
};

export default Logo;
