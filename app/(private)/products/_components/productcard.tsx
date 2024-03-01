import { Button } from "@/components/ui/button";
import { ProductsData } from "@/interfaces/productos";
import { ShoppingCart } from "lucide-react";
import Badge from "../../_components/Badge";
import Image from "next/image";
import React from "react";

interface ProductCardProps {
  product: ProductsData;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  // Cambié el nombre de la función a PascalCase según las convenciones de React
  const { image, name, price, quantity } = product;

  return (
    <div className=" w-60 h-72 group hover:scale-105 flex flex-col justify-between bg-white px-4 py-8 shadow hover:shadow-lg rounded border-transparent hover:border-gray-500 cursor-pointer transition-all relative">
      <Badge quantity={quantity} />
      <Image
        src={image}
        alt={name}
        width={100}
        height={100}
        className="mx-auto  w-28 h-32 object-contain"
      />
      <div className="w-full flex flex-col items-start">
        <p className="text-gray-600 font-semibold text-sm text-center mb-2">${price}</p>
        <h2 className="text-base text-gray-600 font-semibold text-center mb-2 group-hover:hidden ">
          {name}
        </h2>
      </div>
      <div className="text-center px-2">
        <Button
          variant="default"
          asChild
          className=" transition-all hidden group-hover:block bg-violet-500 hover:bg-violet-700 text-white font-bold w-full rounded focus:outline-none"
        >
          <div>
            <ShoppingCart className="inline-block align-middle mr-2" />
            <span>Agregar al carrito</span>
          </div>
        </Button>
      </div>
    </div>
  );
};

export default ProductCard;
