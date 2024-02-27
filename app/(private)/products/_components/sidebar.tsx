"use client";
import { CategoryDat } from "@/data/category-data";
import { useCategoryState } from "@/store/category-state";

interface SidebarProps {
  links: Array<string>;
}

const Sidebar = ({}: SidebarProps) => {
  const addOrRemoveCategory = useCategoryState((state: any) => state.addOrRemoveCategory);

  return (
    <aside className="w-[384px]  bg-violet-200 sticky top-0 bottom-0 left-0 min-h-screen p-8">
      <h3 className="text-xl font-medium  text-gray-800 mb-5">All Products</h3>
      <ul className="space-y-2">
        {CategoryDat.map((cat) => (
          <li
            key={cat.id}
            className="py-2 px-4 capitalize cursor-pointer bg-red-200"
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
