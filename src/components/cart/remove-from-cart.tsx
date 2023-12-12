'use client';

import { X } from 'lucide-react';

import { useCart } from 'hooks/use-cart';

type RemoveFromCartProps = {
  inventoryId: string;
};

export function RemoveFromCart(props: RemoveFromCartProps) {
  const { inventoryId } = props;
  const cart = useCart();

  const removeFromCart = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    cart.removeItem(inventoryId);
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
      onClick={(e) => removeFromCart(e)}
    >
      <X size="18" />
    </button>
  );
}
