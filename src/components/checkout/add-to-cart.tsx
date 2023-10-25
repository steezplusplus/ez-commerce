'use client';

import { Product } from '@prisma/client';
import { useCart } from 'hooks/use-cart';

type AddToCartProps = {
  product: Product;
};

export function AddToCart(props: AddToCartProps) {
  const { product } = props;
  const cart = useCart();

  const addToCart = () => {
    cart.addItem(product);
  };

  return (
    <button className="w-full rounded border px-2 py-1" onClick={addToCart}>
      Add to cart
    </button>
  );
}
