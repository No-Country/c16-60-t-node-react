"use client";
import { CategoryDat } from "@/data/category-data";
import { useCategoryState } from "@/store/category-state";
import CategoryItem from "./category-item";

const Sidebar = () => {
  // Zustand
  const addOrRemoveCategory = useCategoryState((state: any) => state.addOrRemoveCategory);
  const state = useCategoryState((state: any) => state.categories);

  return (
    <aside className="w-[330px] bg-white p-6 hidden xl:block  sticky top-0 bottom-0 left-0 xl:py-8 xl:px-10 rounded-lg">
      <h3 className="text-lg lg:text-lg  font-bold text-violet-400  text-normal  mb-5">Categorías</h3>
      <ul className="space-y-2">
        {CategoryDat.map((cat) => (
          <CategoryItem key={cat.id} cat={cat} state={state} addOrRemoveCategory={addOrRemoveCategory} />
        ))}
      </ul>
    </aside>
  );
};
export default Sidebar;
