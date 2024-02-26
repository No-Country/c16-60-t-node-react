export interface CategoryData {
  id: number;
  name: Category;
}

export enum Category {
  BEBIDA = "bebida",
  LIMPIEZA = "limpieza",
  ALIMENTOS_SECOS = "alimentos secos",
  ALIMENTOS_CONSERVADOS = "alimentos conservados",
  PRODUCTOS_HIGIENE = "productos de higiene",
  PRODUCTOS_LIMPIEZA = "productos de limpieza",
  ALIMENTOS_NECESIDAD = "alimentos de necesidad",
}

// Agregar a Prisma

export const CategoryDat: CategoryData[] = [
  {
    id: 1,
    name: Category.BEBIDA,
  },

  {
    id: 2,
    name: Category.LIMPIEZA,
  },

  {
    id: 3,
    name: Category.ALIMENTOS_SECOS,
  },

  {
    id: 4,
    name: Category.ALIMENTOS_CONSERVADOS,
  },
  {
    id: 5,
    name: Category.PRODUCTOS_HIGIENE,
  },
  {
    id: 6,
    name: Category.PRODUCTOS_LIMPIEZA,
  },
  {
    id: 7,
    name: Category.ALIMENTOS_NECESIDAD,
  },
];
