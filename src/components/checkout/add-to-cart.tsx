'use client';

import { useSearchParams } from 'next/navigation';
import { toast } from 'react-hot-toast';

import { useCart } from 'hooks/use-cart';

type AddToCartProps = {
  sizeRequired: boolean;
  colorRequired: boolean;
  productId: string;
};

export function AddToCart(props: AddToCartProps) {
  const { sizeRequired, colorRequired, productId } = props;
  const cart = useCart();
  const searchParams = useSearchParams();
  const size = searchParams.get('size');
  const color = searchParams.get('color');

  const addToCart = () => {
    if (colorRequired && !color) {
      return toast.error('Please select a color');
    }

    if (sizeRequired && !size) {
      return toast.error('Please select a size');
    }

    cart.addItem({ id: productId, color, size });
  };

  return (
    <button className="w-full rounded border px-2 py-1" onClick={addToCart}>
      Add to cart
    </button>
  );
}
