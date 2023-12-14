'use client';

import { toast } from 'react-hot-toast';

import { Color, Size } from '@prisma/client';
import { CartItem, useCart } from 'hooks/use-cart';
import { FullProduct } from 'lib/api';

type AddToCartProps = {
  product: FullProduct;
  selectedSize?: Size;
  selectedColor?: Color;
};

// TODO Missing loading UI.
export function AddToCart(props: AddToCartProps) {
  const cart = useCart();

  const validateCart = () => {
    if (!props.selectedColor) {
      return toast.error('A color is required but has not been selected. Please select a color to continue.');
    }

    if (!props.selectedSize) {
      return toast.error('A size is required but has not been selected. Please select a size to continue.');
    }

    const relatedInventory = props.product.inventory.find(
      (inventory) => inventory.colorId === props?.selectedColor?.id && inventory.sizeId === props?.selectedSize?.id
    );

    if (relatedInventory === undefined || relatedInventory.inventory === 0) {
      return toast.error('This product is temporarily out of stock');
    }

    // TODO Create CartItem to add item to cart.
    const cartItem: CartItem = {
      id: relatedInventory.id,
      name: props.product.name,
      slug: props.product.slug,
      size: '',
      sizeValue: '',
      color: '',
      colorValue: '',
      image: '',
      altText: '',
      price: 0,
    };

    cart.addItem(cartItem);
  };

  return (
    <button
      className="
      disabled:cursor-opacity-50
      w-auto
      rounded-md
      border
      px-2
      py-1
      text-sm
      tracking-widest
      transition
      hover:opacity-75
      disabled:cursor-not-allowed
    "
      onClick={validateCart}
    >
      Add To Cart
    </button>
  );
}
