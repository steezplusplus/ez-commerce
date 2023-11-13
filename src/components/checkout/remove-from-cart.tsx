'use client';

import { X } from 'lucide-react';

import { useCart } from 'hooks/use-cart';

type RemoveFromCartProps = {
  productId: string;
};

export function RemoveFromCart(props: RemoveFromCartProps) {
  const { productId } = props;
  const cart = useCart();

  const removeFromCart = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    cart.removeItem(productId);
  };

  return (
    <button onClick={(e) => removeFromCart(e)}>
      <X size="18" />
    </button>
  );
}
