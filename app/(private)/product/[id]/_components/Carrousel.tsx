import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import ProductCard from "@/app/(private)/products/_components/productcard";
import { ProductsData } from "@/interfaces/productos";

const Carrousel: any = ({ productosSugeridos }: any) => {
  return (
    <div>
      <Carousel
        opts={{
          align: "start",
        }}
        className="w-full md:max-w-[1080px]"
      >
        <CarouselContent className="w-full">
          {productosSugeridos.map((product: ProductsData) => (
            <CarouselItem key={product.id} className="basis-1/2 lg:basis-1/4 xl:basis-1/5">
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
};

export default Carrousel;
