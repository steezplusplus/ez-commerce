'use client';

import { X } from 'lucide-react';

import { useCart } from 'hooks/use-cart';

type RemoveFromCartProps = {
  inventoryId: string;
};

export function RemoveFromCart({ inventoryId }: RemoveFromCartProps) {
  const cart = useCart();

  const removeProduct = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    cart.removeProduct(inventoryId);
  };

  return (
    <button
      className="
        disabled:cursor-opacity-50 
        w-auto
        rounded-md
        border
        px-1
        py-1
        text-sm
        tracking-widest
        transition
        hover:opacity-75
        disabled:cursor-not-allowed
      "
      onClick={removeProduct}
    >
      <X size="18" />
    </button>
  );
}
