import { useCartStore } from "@/store/cart.store";
import { Product } from "@/types/product";
import { toast } from "sonner";

export const addToCart = (product: Product, quantity: number = 1) => {
  const { addToCart } = useCartStore.getState();
  for (let i = 0; i < quantity; i++) {
    addToCart(product);
  }
  toast.success("Product added to cart");
};

export const removeFromCart = (id: number) => {
  useCartStore.getState().removeFromCart(id);
  toast.success("Product removed to cart");
};

export const updateQuantity = (id: number, quantity: number) => {
  useCartStore.getState().updateQuantities(id, quantity);
  toast.success("Product quantity updated to cart");
};

export const clearCart = () => {
  useCartStore.getState().clearCart();
      toast.success("Product cleared from cart")
};
