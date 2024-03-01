import { CategoryData } from "@/data/category-data";
import { cn } from "@/lib/utils";

interface Props {
  cat: CategoryData;
  state: string[];
  addOrRemoveCategory: (category: string) => void;
}

const CategoryItem = ({ cat, state, addOrRemoveCategory }: Props) => {
  return (
    <li
      key={cat.id}
      className={cn(
        "py-2 px-4  capitalize cursor-pointer font-medium rounded hover:shadow hover:scale-105 hover:bg-violet-400 hover:text-white hover:font-semibold transition-all ",
        state.includes(cat.name) ? "text-white bg-violet-500 shadow hover:bg-violet-500" : ""
      )}
      onClick={() => addOrRemoveCategory(cat.name)}
    >
      <cat.icon className="inline-block align-middle mr-2" />
      <span>{cat.name}</span>
    </li>
  );
};
export default CategoryItem;
