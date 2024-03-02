import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";


import { ProductsData } from "@/interfaces/productos";
import ProductCard from "@/app/(private)/products/_components/productcard";

const Carrousel : any =  ({ productosSugeridos }: any) =>{
  return (
    <div>
      <Carousel
        opts={{
          align: "start",
        }}
        className="w-full max-w-xs"
      >
        <CarouselContent className="w-full h-[450px]">
          {productosSugeridos.map((product: ProductsData) => (
            <CarouselItem key={product.id} className="md:w-full md:basis-1/2 lg:basis-1/3">
              <div className="p-1">
                <ProductCard product={product} />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
}

export default Carrousel;
