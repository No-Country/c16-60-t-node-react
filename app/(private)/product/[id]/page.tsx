import { getAllProducts, getProductById } from "@/actions/actions";

import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";
import Image from "next/image";
import Carrousel from "./_components/Carrousel";
interface Props {
  params: {
    id: string;
  };
}

const ProductPage = async ({ params: { id } }: Props) => {
  const productById = await getProductById(Number(id));
  const allProducts = (await getAllProducts()) || [];

  // const productosSugeridos = allProducts.filter((cat: string) => cat.category === productById.category);
  const doblePrice: number = productById.price * 2;
  const productosSugeridos = allProducts;

  return (
    <section className="mx-auto mt-8 p-2 max-w-screen-2xl">
      {/* top content */}
      <div className="flex md:flex-row flex-col items-center mx-auto md:w-[1280px] md:h-[400px]">
        {/* img box */}
        <div className="flex justify-center items-center md:order-2 md:w-[50%] h-[100%] overflow-hidden">
          <Image src={productById.image} width={300} height={300} className="" />
        </div>
        {/* Columna de imágenes */}
        <div className="md:order-1 md:mt-4 md:w-[10%] md:h-[100%]">
          <div className="flex justify-center items-center mx-auto border border-b-slate-400 rounded-md w-[90px] h-[90px] object-contain">
            <Image src={productById.image} width={40} height={40} />
          </div>
          {/* Agrega más imágenes aquí si es necesario */}
        </div>
        {/* Price rectangle */}
        <div className="md:order-3 md:w-[40%] md:h-[100%]">
          <div className="p-4 md:border border-t-slate-400 rounded-md w-full md:w-[450px] h-full md:h-[200px]">
            <h3 className="tex-mdfont-bold text-slate-400">Tienda: Doña Ema</h3>
            <h1 className="border-b-slate-500 font-bold text-2xl">
              {productById.name} x {productById.quantity} unidades
            </h1>
            <h3 className="mt-4 text-slate-400 text-sm line-through">${doblePrice}</h3>
            <div className="flex justify-between items-center">
              <h3 className="text-2xl text-blue-400">${productById.price}</h3>
              <Button className="bg-violet-500 hover:bg-violet-600 w-60 text-md">
                Agregar
                <span className="ml-4">
                  <ShoppingCart className="" />
                </span>
              </Button>
            </div>
          </div>
        </div>
      </div>
      {/* Description */}
      <div className="mx-auto mt-10 w-full md:w-[1280px]">
        <h3 className="mb-4 font-bold text-xl md:text-start lg:text-center">Descripción:</h3>
        <h1 className="mb-4 border-b font-bold text-2xl">{productById.name}</h1>
        <p className="mx-auto mb-4 px-4 md:w-[80%] font-light text-justify text-lg">
          {productById.description}
        </p>
      </div>
      {/* Swipper */}
      <div className="mx-auto mt-4 md:w-[1280px] md:h-full">
        <h1 className="mb-5 font-bold text-2xl">También podría interesarte</h1>
        <div className="flex justify-center w-full h-full md:h-[350px] alingn-center">
          <Carrousel productosSugeridos={productosSugeridos} />
        </div>
      </div>
      <div className="mt-4 md:w-full md:h-full">
        <h1 className="mb-5 font-bold text-2xl">Otros productos</h1>
        <div className="flex justify-center mx-auto w-full md:w-[1280px] h-full md:h-[350px] alingn-center">
          <Carrousel productosSugeridos={productosSugeridos} />
        </div>
      </div>
    </section>
  );
};
export default ProductPage;
