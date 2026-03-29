import { CartItem } from "@/types/cart";
import { Product } from "@/types/product";
import { create } from "zustand";
import { persist } from "zustand/middleware";

interface CartStore {
  items: CartItem[];
  addToCart: (product: Product) => void;
  removeFromCart: (id: number) => void;
  updateQuantities: (id: number, quantity: number) => void;
  clearCart: () => void;
}

export const useCartStore = create<CartStore>()(
  persist(
    (set) => ({
      items: [],

      addToCart: (product) =>
        set((state) => {
          const exists = state.items.find((i) => i.product.id === product.id);
          if (exists) {
            return {
              items: state.items.map((i) =>
                i.product.id === product.id
                  ? { ...i, quantity: i.quantity + 1 }
                  : i,
              ),
            };
          }
          return { items: [...state.items, { product, quantity: 1 }] };
        }),
      removeFromCart: (id) =>
        set((state) => ({
          items: state.items.filter((i) => i.product.id !== id),
        })),

      updateQuantities: (id, quantity) =>
        set((state) => ({
          items:
            quantity <= 0
              ? state.items.filter((i) => i.product.id !== id)
              : state.items.map((i) =>
                  i.product.id === id ? { ...i, quantity } : i,
                ),
        })),

      clearCart: () => set({ items: [] }),
    }),
    {
      name: "cart-data",
    },
  ),
);
