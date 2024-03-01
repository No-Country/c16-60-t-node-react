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
    <section className="max-w-screen-2xl mx-auto">
      <div className="flex flex-col md:flex-row justify-center items-center mx-auto md:mt-10 p-4 md:max-w-[1200px] md:h-[550px] sm:w-full">
        <div className="w-full md:w-[50%] h-full md:max-w-2xl md:max-h-2xl flex items-center justify-center relative overflow-hidden">
          {productById && <Badge quantity={productById.quantity} />}
          <Image
            src={productById.image}
            alt={productById.name}
            width={378}
            height={478}
            className="object-cover"
          />
        </div>
        <div className="w-full md:w-[50%] h-full flex flex-col md:border-l pl-6 mt-4 md:mt-0 md:ml-4 gap-4">
          <h1 className="text-lg md:text-xl font-extrabold">{productById.name}</h1>
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
