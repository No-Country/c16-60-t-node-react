import { CategoryDat } from "@/data/category-data";

interface SidebarProps {
  links: Array<string>;
}

const Sidebar = ({}: SidebarProps) => {
  return (
    <aside className="w-[384px]  bg-violet-200 sticky top-0 bottom-0 left-0 min-h-screen p-8">
      <h3>All Products</h3>
      <ul>
        {CategoryDat.map((cat) => (
          <li key={cat.id} className="py-2 px-4 capitalize">
            {cat.name}
          </li>
        ))}
      </ul>
    </aside>
  );
};
export default Sidebar;
