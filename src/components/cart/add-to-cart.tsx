'use client';

import { toast } from 'react-hot-toast';

import { Color, Inventory, Product, Size } from '@prisma/client';
import { Button } from 'components/ui/button';
import { useCart } from 'hooks/use-cart';

type AddToCartProps = {
  product: Product;
  color?: Color;
  size?: Size;
  inventory?: Inventory;
  sizeRequired: boolean;
  colorRequired: boolean;
};

export function AddToCart(props: AddToCartProps) {
  const { product, color, size, inventory, sizeRequired, colorRequired } = props;

  const cart = useCart();

  const onClick = () => {
    // Validations
    if (colorRequired && color === undefined) {
      return toast.error('Please select a color');
    }

    if (sizeRequired && size === undefined) {
      return toast.error('Please select a size');
    }

    if (!inventory || !inventory.inventory) {
      return toast.error('This product is out of stock');
    }

    // Cart item template
    const cartItem = {
      id: inventory?.id as string,
      name: product?.name as string,
      size: size?.name as string,
      color: color?.name as string,
      image: color?.image as string,
      altText: color?.altText as string,
      price: product?.price as number,
    };

    cart.addItem(cartItem);
  };

  return <Button onClick={onClick}>Add to cart</Button>;
}
