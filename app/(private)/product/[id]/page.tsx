import { getProductById } from "@/actions/actions";
import { Button } from "@/components/ui/button";
import Badge from "../../_components/Badge";
import Image from "next/image";

interface Props {
  params: {
    id: string;
  };
}

const ProductPage = async ({ params: { id } }: Props) => {
  const productById = await getProductById(Number(id));

  return (
    <section className="max-w-screen-2xl mx-auto h-full">
      <div className="md:flex justify-center mx-auto md:mt-5 p-2 md:w-[950px]">
        <div className="w-full md:max-w-2xl h-full md: max-h-2xl flex items-center justify-center relative overflow-hidden">
          <Badge quantity={productById.quantity} />
          <Image
            src={productById.image}
            alt={productById.name}
            width={500}
            height={500}
            className="object-cover"
          />
        </div>
        <div className="w-full md:max-w-xl h-full flex flex-col ml-0 md:ml-4 gap-4 mt-4  md:mt-0 md:border-l pl-6">
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
          <p className="text-xs md:text-base text-justify">{productById.description}</p>
        </div>
      </div>
    </section>
  );
};
export default ProductPage;
