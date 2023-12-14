'use client';

import { toast } from 'react-hot-toast';

import { Color, Inventory, Size } from '@prisma/client';
import { CartItem, useCart } from 'hooks/use-cart';
import { FullProduct } from 'lib/api';

type AddToCartProps = {
  product: FullProduct;
  selectedSize?: Size;
  selectedColor?: Color;
  selectedInventory?: Inventory;
};

// TODO Missing loading
export function AddToCart(props: AddToCartProps) {
  const cart = useCart();

  const isColorRequired = props.product.colors.length > 0;
  const isSizeRequired = props.product.sizes.length > 0;

  const validateCart = () => {
    if (isColorRequired && !props.selectedColor) {
      return toast.error('A color is required but has not been selected. Please select a color to continue.');
    }

    if (isSizeRequired && !props.selectedSize) {
      return toast.error('A size is required but has not been selected. Please select a size to continue.');
    }

    if (props.selectedInventory === undefined || props.selectedInventory.inventory === 0) {
      return toast.error('This product is temporarily out of stock');
    }

    const cartItem: CartItem = {
      id: props.selectedInventory.id,
      name: props.product.name,
      slug: props.product.slug,
      price: props.product.price,
      size: props.selectedSize?.name,
      sizeValue: props.selectedSize?.value,
      color: props.selectedColor?.name,
      colorValue: props.selectedColor?.value,
      image: props.selectedColor?.image,
      altText: props.selectedColor?.altText,
    };

    cart.addItem(cartItem);
  };

  return (
    <button
      onClick={validateCart}
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
    >
      Add To Cart
    </button>
  );
}
