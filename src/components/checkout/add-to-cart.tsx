'use client';

import { Product } from '@prisma/client';
import { toast } from 'react-hot-toast';

import { useCart } from 'hooks/use-cart';
import { useSearchParams } from 'next/navigation';

type AddToCartProps = {
  product: Product;
};

export function AddToCart(props: AddToCartProps) {
  const { product } = props;
  const searchParams = useSearchParams();
  const size = searchParams.get('size');
  const color = searchParams.get('color');

  const cart = useCart();

  const addToCart = () => {
    if (product.sizes.length > 0 && size === null) {
      return toast.error('Please select a size');
    }

    if (product.colors.length > 0 && color == null) {
      if (color === null) {
        return toast.error('Please select a color');
      }
    }

    cart.addItem(product, color, size);
  };

  return (
    <button className="w-full rounded border px-2 py-1" onClick={addToCart}>
      Add to cart
    </button>
  );
}
