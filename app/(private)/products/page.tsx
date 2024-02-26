import { getAllProducts } from "@/actions/actions";
import { currentUser } from "@clerk/nextjs";
import ProductCard from "./_components/productcard";
import Sidebar from "./_components/sidebar";

const Product = async () => {
  const products = (await getAllProducts()) ?? [];
  const user = await currentUser();

  return (
    <div className="mx-auto max-w-screen-2xl flex items-start justify-around relative  p-10">
      <Sidebar links={[]} />
      <section>
        {/* Product list */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-4 ">
          {products.map((product) => (
            <div key={product.id}>
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Product;
