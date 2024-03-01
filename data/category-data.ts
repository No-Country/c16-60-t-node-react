export interface CategoryData {
  id: number;
  name: Category;
  icon: IconType;
}

export enum Category {
  BEBIDA = "bebidas",
  ALIMENTOS_SECOS = "alimentos secos",
  ALIMENTOS_CONSERVADOS = "alimentos conservados",
  PRODUCTOS_HIGIENE = "productos de higiene",
  PRODUCTOS_LIMPIEZA = "productos de limpieza",
  ALIMENTOS_NECESIDAD = "alimentos de necesidad",
}

// Iconos para el Sidebar
import { FaBottleWater, FaBowlFood } from "react-icons/fa6";
import { IconType } from "react-icons/lib";
import { MdCleaningServices, MdOutlineEmojiFoodBeverage, MdPersonalInjury } from "react-icons/md";
import { PiBowlFoodFill } from "react-icons/pi";

export const CategoryDat: CategoryData[] = [
  {
    id: 1,
    name: Category.BEBIDA,
    icon: FaBottleWater,
  },

  {
    id: 2,
    name: Category.ALIMENTOS_SECOS,
    icon: PiBowlFoodFill,
  },

  {
    id: 3,
    name: Category.ALIMENTOS_CONSERVADOS,
    icon: FaBowlFood,
  },
  {
    id: 4,
    name: Category.PRODUCTOS_HIGIENE,
    icon: MdPersonalInjury,
  },
  {
    id: 5,
    name: Category.PRODUCTOS_LIMPIEZA,
    icon: MdCleaningServices,
  },
  {
    id: 6,
    name: Category.ALIMENTOS_NECESIDAD,
    icon: MdOutlineEmojiFoodBeverage,
  },
];
