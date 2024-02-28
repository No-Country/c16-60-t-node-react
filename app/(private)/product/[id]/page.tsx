import { getProductById } from "@/actions/actions";
import { Button } from "@/components/ui/button";
import Image from "next/image";

interface Props {
  params: {
    id: string;
  };
}

const ProductPage = async ({ params: { id } }: Props) => {
  const productById = await getProductById(Number(id));
  console.log(productById);

  const badge: boolean = productById !== null && productById.quantity >= 0 ? true : false;
  return (
    <section className="max-w-screen-2xl mx-auto h-full">
      <div className="md:flex justify-center mx-auto md:mt-12 p-4 md:w-[950px]">
        <div className="w-full md:max-w-2xl h-[450px] flex items-center justify-center md:border-r border-slate-300 relative">
          {badge ? (
            <div className="absolute right-1 rounded-sm top-0 px-4 py-2 bg-green-500 text-xs text-white font-extrabold">
              In Stock
            </div>
          ) : (
            <div className="absolute right-1 rounded-sm top-0 px-4 py-2 bg-red-500 text-xs text-white font-extrabold">
              Out Stock
            </div>
          )}
          <Image src={productById.image} alt={productById.name} width={500} height={500} />
        </div>
        <div className="w-full md:max-w-xl h-full flex flex-col ml-0 md:ml-4 gap-4 mt-4 md:mt-0">
          <h1 className="text-lg md:text-xl font-extrabold ">{productById.name}</h1>
          <h3 className="text-lg md:text-xl font-extrabold">$ {productById.price}</h3>
          <div className="flex items-center justify-between">
            <h3 className="text-lg md:text-xl font-extrabold">Cantidad</h3>
            <div className="flex items-center justify-center gap-2">
              <Button className="bg-violet-500">+</Button>
              <span className="px-4 py-2 border border-slate-300 rounded-sm">1</span>
              <Button className="bg-violet-500">-</Button>
            </div>
          </div>{" "}
          <Button className="bg-violet-500 hover:bg-violet-600 font-semibold">Add to Cart</Button>
          <Button className="bg-black font-semibold">Buy now</Button>
          <h1 className="text-lg md:text-xl font-extrabold">Descripción</h1>
          <p className="text-sm md:text-base text-justify">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates voluptate a ea quae! Eos,
            eligendi sint. Impedit cupiditate praesentium repellat. <br />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam ipsum inventore quibusdam
            repudiandae porro architecto, qui rem esse distinctio. Architecto.
          </p>
        </div>
      </div>
    </section>
  );
};
export default ProductPage;
