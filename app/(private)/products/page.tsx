import { getAllProducts } from "@/actions/actions";
import ProductList from "./_components/product-list";
import Sidebar from "./_components/sidebar";

const Product = async () => {
  const products = await getAllProducts();

  return (
    <div className="mx-auto max-w-screen-2xl flex items-start justify-around relative  p-10">
      <Sidebar links={[]} />
      <section>
        <ProductList products={products} />
      </section>
    </div>
  );
};

export default Product;
