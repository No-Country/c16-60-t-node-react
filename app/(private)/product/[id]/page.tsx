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

  const productosSugeridos = allProducts;

  return (
    <section className="max-w-screen-2xl mx-auto mt-8">
      {/* top content */}
      <div className="flex flex-col md:flex-row items-center md:w-full md:h-[700px] mx-auto">
        {/* img box */}
        <div className="md:w-[50%] h-[100%] md:order-2 flex items-center justify-center overflow-hidden">
          <Image src={productById.image} width={700} height={700} className="w-full h-full" />
        </div>
        {/* Columna de imágenes */}
        <div className="md:w-[10%] md:h-[100%] md:order-1 md:mt-4">
          <div className="w-[90px] h-[90px] border border-b-slate-400 rounded-md mx-auto my-6 flex items-center justify-center object-contain">
            <Image src={productById.image} width={80} height={80} />
          </div>
          {/* Agrega más imágenes aquí si es necesario */}
        </div>
        {/* Price rectangle */}
        <div className="md:w-[40%] md:h-[100%] md:order-3">
          <div className="w-full h-full md:w-[500px] md:h-[200px] md:border border-t-slate-400 rounded-md mx-auto p-4">
            <h1 className="font-bold text-2xl mt-4 border-b-slate-500">
              {productById.name} x {productById.quantity} unidades
            </h1>
            <div className="flex items-center justify-between mt-10">
              <h3 className="text-2xl text-blue-400">${productById.price}</h3>
              <Button className="w-60 bg-violet-500 hover:bg-violet-600 text-md">
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
      <div className="w-full hmd:w-full md:h-[280px]">
        <h3 className="text-center text-xl font-bold mb-10">Descripción:</h3>
        <h1 className="text-2xl font-bold mb-10 border-b">{productById.name}</h1>
        <p className="px-4 text-justify text-lg font-light">{productById.description}</p>
      </div>
      {/* Swipper */}
      <div className="md:w-full md:h-full mt-5">
        <h1 className="font-bold text-2xl mb-5">También podría interesarte</h1>
        <div className="w-full h-full  md:h-[450px] bg-red-500 flex alingn-center justify-center">
          <Carrousel productosSugeridos={productosSugeridos} />
        </div>
      </div>
    </section>
  );
};
export default ProductPage;
