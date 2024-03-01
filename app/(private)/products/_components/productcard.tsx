import { Button } from "@/components/ui/button";
import { ProductsData } from "@/interfaces/productos";
import { ShoppingCart } from "lucide-react";
import Image from "next/image";
import React from "react";

import { RiHeart3Line } from "react-icons/ri";

interface ProductCardProps {
  product: ProductsData;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  // Cambié el nombre de la función a PascalCase según las convenciones de React
  const { image, name, price, quantity } = product;

  return (
    <div className=" w-52 h-80 hover:scale-105 flex flex-col items-baseline bg-white px-4 pt-8 pb-4 shadow hover:shadow-lg rounded border-transparent hover:border-gray-500 cursor-pointer transition-all relative">
      <div className=" text-violet-400 absolute right-4 text-xl top-4 ">
        <RiHeart3Line />
      </div>
      {quantity === 0 && (
        <div>
          <span className="text-red-400 py-1.5 px-2 bg-red-200/80 text-xs font-semibold rounded-br-sm  absolute top-0 left-0">
            Agotado
          </span>
        </div>
      )}
      <Image
        src={image}
        alt={name}
        width={100}
        height={100}
        className="mx-auto  w-28 h-32 object-contain"
      />
      <div className="w-full flex-1  flex flex-col items-start">
        <p className="text-violet-600 font-semibold text-base ">${price}</p>
        <p className="text-gray-400 line-through  font-normal text-xs">${price * 2}</p>
        <h2 className="text-sm text-gray-700 line-clamp-2 font-semibold text-center mb-2 ">{name}</h2>
      </div>

      <Button
        variant="default"
        asChild
        className=" transition-all  bg-violet-500 hover:bg-violet-700 text-white font-bold w-full rounded focus:outline-none"
      >
        <div>
          <ShoppingCart className="inline-block align-middle mr-2" />
          <span className="text-base font-normal">Agregar </span>
        </div>
      </Button>
    </div>
  );
};

export default ProductCard;
