import { CartProduct } from "@/interfaces/product-cart";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";


interface State {
  cart: CartProduct[],
  addProductToCart: (product: CartProduct) => void,
}


export const useCartStore = create<State>()(
  persist(
    (set, get) => ({
      cart: [],
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
            }
          }
          return item
        })

        set({ cart: updatedCart })

      },
    }),

    {
      name: "cart",
      storage: createJSONStorage(() => localStorage),
    }
  )
);