'use client';

import { Product } from '@prisma/client';
import { X } from 'lucide-react';

import { useCart } from 'hooks/use-cart';

type RemoveFromCartProps = {
  product: Product;
};

export function RemoveFromCart(props: RemoveFromCartProps) {
  const { product } = props;
  const cart = useCart();

  const removeFromCart = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    cart.removeItem(product);
  };

  return (
    <button onClick={(e) => removeFromCart(e)}>
      <X size="18" />
    </button>
  );
}
