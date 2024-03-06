import { CartProduct } from "@/interfaces/product-cart";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

interface State {
  cart: CartProduct[];
  getTotalItems: () => number;
  addProductToCart: (product: CartProduct) => void;
}

export const useCartStore = create<State>()(
  persist(
    (set, get) => ({
      cart: [],
      getTotalItems: () => {
        const { cart } = get();
        return cart.reduce((total, item) => total + item.quantity, 0);
      },
      addProductToCart: (product: CartProduct) => {
        const { cart } = get();
        const productInCart = cart.some((item) => item.id === product.id);

        if (!productInCart) {
          set({
            cart: [...cart, product],
          });
          return;
        }

        const updatedCart = cart.map((item) => {
          if (item.id === product.id) {
            return {
              ...item,
              quantity: item.quantity + product.quantity,
            };
          }
          return item;
        });

        set({ cart: updatedCart });
      },
    }),

    {
      name: "cart",
      storage: createJSONStorage(() => localStorage),
    }
  )
);
