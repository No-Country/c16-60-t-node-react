import { Poppins } from "next/font/google";
import Image from "next/image";

const poppins = Poppins({
  subsets: ["latin"],
  weight: "400",
});

const Logo = () => {
  return (
    <div className="flex  items-center  lg:m-0">
      <Image src={"chat-round.svg"} alt="" width={25} height={25} />
      <p className={`${poppins.className} text-2xl lg:text-3xl  whitespace-nowrap`}>
        <span className="font-extrabold">
          Smart<span className="text-violet-700">Help</span>
        </span>
      </p>
    </div>
  );
};

export default Logo;
