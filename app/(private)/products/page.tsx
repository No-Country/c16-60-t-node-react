import { currentUser } from "@clerk/nextjs";
import { getAllProducts } from "@/actions/actions";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import ProductCard from "./_components/productcard";

const Product = async () => {
  const products = (await getAllProducts()) ?? []
  const user = await currentUser();

  return (
    <>
      {/* Sidebar */}
      <Sheet>
        <SheetTrigger>Open</SheetTrigger>
        <SheetContent className="w-[412px] sm:w-[540px]" side="left">
          <SheetHeader>
            <SheetTitle>Are you absolutely sure?</SheetTitle>
            <SheetDescription>
              This action cannot be undone. This will permanently delete your account and remove your
              data from our servers.
            </SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>

      <div className="p-8">
        <div className="flex justify-between items-center mb-8">
        </div>
        <h1 className="text-2xl font-bold">Bienvenido {user?.firstName}</h1>
        {/* Product list */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-4 mt-10">
          {products.map((product) => (
            <div key={product.id}>
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Product;
