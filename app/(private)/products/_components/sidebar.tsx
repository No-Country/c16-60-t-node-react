"use client";
import { CategoryDat } from "@/data/category-data";
import { cn } from "@/lib/utils";
import { useCategoryState } from "@/store/category-state";

const Sidebar = () => {
  // Zustand
  const addOrRemoveCategory = useCategoryState((state: any) => state.addOrRemoveCategory);
  const state = useCategoryState((state: any) => state.categories);

  return (
    <aside className="w-[300px] bg-white border-r sticky top-0 bottom-0 left-0 min-h-screen p-8">
      <h3 className="text-xl lg:text-2xl font-bold   text-gray-700 mb-5">All Products</h3>
      <ul className="space-y-2">
        {CategoryDat.map((cat) => (
          <li
            key={cat.id}
            className={cn(
              "py-2 px-4  capitalize cursor-pointer font-medium rounded hover:shadow hover:scale-105 transition-all ",
              state.includes(cat.name) ? "text-white bg-violet-500 shadow" : ""
            )}
            onClick={() => addOrRemoveCategory(cat.name)}
          >
            {cat.name}
          </li>
        ))}
      </ul>
    </aside>
  );
};
export default Sidebar;
