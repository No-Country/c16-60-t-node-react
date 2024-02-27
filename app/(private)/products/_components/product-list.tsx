"use client";
import { ProductsData } from "@/interfaces/productos";
import { useCategoryState } from "@/store/category-state";
import { useEffect, useState } from "react";
import ProductCard from "./productcard";

const ProductList = ({ products }: { products: ProductsData[] }) => {
  const [productState, setProductState] = useState<ProductsData[]>(products);
  const state = useCategoryState((state: any) => state.categories);

  useEffect(() => {
    if (state.length > 0) {
      setProductState(products.filter((product) => state.includes(product.category)));
    } else {
      setProductState(products);
    }
  }, [state, products]);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-4 ">
      {productState.map((product) => (
        <div key={product.id}>
          <ProductCard product={product} />
        </div>
      ))}
    </div>
  );
};
export default ProductList;
