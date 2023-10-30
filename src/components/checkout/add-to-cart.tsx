'use client';

import { toast } from 'react-hot-toast';

import { Product } from '@prisma/client';
import { useCart } from 'hooks/use-cart';
import { useSearchParams } from 'next/navigation';

type AddToCartProps = {
  product: Product;
};

export function AddToCart(props: AddToCartProps) {
  const { product } = props;
  const searchParams = useSearchParams();

  const cart = useCart();
  const color = searchParams.get('color');
  const size = searchParams.get('size');

  const addToCart = () => {
    if (color === null) {
      return toast.error('Please select a color');
    }
    if (size === null) {
      return toast.error('Please select a size');
    }
    cart.addItem(product, color, size);
  };

  return (
    <button className="w-full rounded border px-2 py-1" onClick={addToCart}>
      Add to cart
    </button>
  );
}
