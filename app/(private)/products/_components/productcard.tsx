import React from "react";
import { ProductsData } from "@/interfaces/productos";
import { ShoppingCart } from "lucide-react";


interface ProductCardProps {
  product: ProductsData;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  // Cambié el nombre de la función a PascalCase según las convenciones de React

  const { image, name, price } = product;
  return (
    <div className="bg-white p-4 shadow rounded">
      <img src={image} alt={name} className="mx-auto w-24 h-24 mb-4" />
      <h2 className="text-base font-bold text-center mb-2">{name}</h2>
      <p className="text-gray-600 text-sm text-center mb-2">${price}</p>
      <div className="text-center">
        <button className="bg-violet-500 hover:bg-blue-700 text-white font-bold py-3 px-4 w-full rounded focus:outline-none">
          <ShoppingCart className="inline-block align-middle mr-2" />
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
