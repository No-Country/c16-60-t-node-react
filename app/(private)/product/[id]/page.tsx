import { getProductById } from "@/actions/actions";

interface Props {
  params: {
    id: string;
  };
}

const ProductPage = async ({ params: { id } }: Props) => {
  const productById = await getProductById(Number(id));

  return (
    <section className="bg-red-100 max-w-screen-2xl mx-auto h-full">
      {/* <h1>Product {id}</h1>
      <pre>{JSON.stringify(productById, null, 2)}</pre> */}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 ">
        <div></div>
        <div></div>
      </div>
    </section>
  );
};
export default ProductPage;
