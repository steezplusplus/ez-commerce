'use client';

import { toast } from 'react-hot-toast';

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
      if (selectedProduct.inventory < 0) {
        toast('This product is out of inventory.');
      } else {
        cart.addItem(selectedProduct);
      }
    } else {
      toast('Please finish selecting a product.');
    }
  };

  return (
    <button className="w-full rounded border px-2 py-1" onClick={onClick}>
      Add to cart
    </button>
  );
}
