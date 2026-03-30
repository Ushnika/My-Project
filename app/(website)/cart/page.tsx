"use client";
import { DeleteModal } from "@/components/common/DeleteModal";
import { useCartColumns } from "@/components/modules/cart/CartColumns";
import { CartProductTable } from "@/components/modules/cart/CartProductTable";
import { Button } from "@/components/ui/button";
import { clearCart, removeFromCart } from "@/lib/cart";
import { useCartStore } from "@/store/cart.store";
import { useState } from "react";


export default function Cart() {
  const [deleteOpen, setDeleteOpen] = useState(false);
  const [deleteId, setDeleteId] = useState<number>(0);
  const items = useCartStore((state) => state.items);
  const columns = useCartColumns({
    setDeleteId: setDeleteId,
    setDeleteOpen: setDeleteOpen,
  });
  const handleDelete = () => {
    removeFromCart(deleteId);
    setDeleteOpen(false);
  };
  const total = items.reduce(
    (sum, item) => sum + item.product.price * item.quantity,
    0,
  );
  return (
    <div className="px-8 py-6">
      <h3 className="text-3xl md:text-center pb-6">My Cart</h3>
      <div className="mb-4 flex justify-end">
        <Button variant={"outline"} onClick={() => clearCart()}>Clear</Button>
      </div>
      <div>
        <CartProductTable columns={columns} data={items} />
      </div>
      <div className="py-6 flex flex-col items-end">
        <p className="text-sm text-gray-500">
          Discount: <span className="font-medium">$0</span>
        </p>
        <p className="text-lg">
          Total : <span className="font-medium">${total}</span>{" "}
        </p>
      </div>
      {deleteOpen && (
        <DeleteModal
          open={deleteOpen}
          onOpenChange={setDeleteOpen}
          description="Are you sure you want to delete this product from cart?"
          onDelete={handleDelete}
        />
      )}
    </div>
  );
}
