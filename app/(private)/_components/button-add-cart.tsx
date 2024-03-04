"use client";

import { Button } from "@/components/ui/button";
import { CartProduct } from "@/interfaces/product-cart";
import { ProductsData } from "@/interfaces/productos";
import { useCartStore } from "@/store/cart-state";
import { ShoppingCart } from "lucide-react";
import { useState } from "react";

const ButtonAddCart = ({ product }: { product: ProductsData }) => {
  const ProductToCart: CartProduct = {
    id: product.id,
    name: product.name,
    price: product.price,
    quantity: 1,
    image: product.image,

  }
  const [productCart, setProductCart] = useState<CartProduct>(ProductToCart);
  const addProductToCart = useCartStore((state) => state.addProductToCart);

  const handleClick = () => {
    setProductCart(ProductToCart);
    addProductToCart(productCart);
  };

  return (
    <Button
      variant="default"
      onClick={handleClick}
      asChild
      className="bg-violet-500 hover:bg-violet-700 rounded w-full font-bold text-white transition-all focus:outline-none"
    >
      <div className="">
        <ShoppingCart className="inline-block max-md:hidden mr-2 align-middle" />
        <span className="font-normal text-base">Agregar </span>
      </div>
    </Button>
  );
};
export default ButtonAddCart;
