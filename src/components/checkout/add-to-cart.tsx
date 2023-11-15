'use client';

import { Inventory } from '@prisma/client';
import { useCart } from 'hooks/use-cart';

type AddToCartProps = {
  selectedProduct?: Inventory;
};

// TODO check inventory
export function AddToCart(props: AddToCartProps) {
  const { selectedProduct } = props;
  const cart = useCart();

  const onClick = () => {
    if (selectedProduct) {
      cart.addItem(selectedProduct);
    }
  };

  return (
    <button className="w-full rounded border px-2 py-1" onClick={onClick}>
      Add to cart
    </button>
  );
}
