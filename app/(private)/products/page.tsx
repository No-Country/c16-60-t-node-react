import { getAllProducts } from "@/actions/actions";

//TODO : Crear diseño para los productos
// TODO: Agregar Filtrado de productos

const Product = async () => {
  const products = (await getAllProducts()) ?? [];

  return (
    <div>
      {products.length > 0 ? (
        <pre>{JSON.stringify(products, null, 2)}</pre>
      ) : (
        <div>
          <p>No hay productos</p>
        </div>
      )}
    </div>
  );
};
export default Product;
