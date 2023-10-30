'use client';

import { X } from 'lucide-react';

import { useCart } from 'hooks/use-cart';

type RemoveFromCartProps = {
  productId: string;
  name: string;
};

export function RemoveFromCart(props: RemoveFromCartProps) {
  const { productId, name } = props;
  const cart = useCart();

  const removeFromCart = () => {
    cart.removeItem(productId, name);
  };

  return (
    <button onClick={removeFromCart}>
      <X size="12" />
    </button>
  );
}
