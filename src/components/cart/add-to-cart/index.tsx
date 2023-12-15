'use client';

import { toast } from 'react-hot-toast';

import { Color, Inventory, Size } from '@prisma/client';
import { CartProduct, useCart } from 'hooks/use-cart';
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
      return toast.error('A color is required but has not been selected.');
    }

    if (isSizeRequired && !props.selectedSize) {
      return toast.error('A size is required but has not been selected.');
    }

    if (props.selectedInventory === undefined || props.selectedInventory.inventory === 0) {
      return toast.error('This product is temporarily out of stock');
    }

    const cartItem: CartProduct = {
      inventoryId: props.selectedInventory.id,
      productId: props.product.id,
      productName: props.product.name,
      productSlug: props.product.slug,
      productPrice: props.product.price,
      colorId: props.selectedColor?.id,
      colorName: props.selectedColor?.name,
      colorValue: props.selectedColor?.value,
      colorImage: props.selectedColor?.image,
      colorAltText: props.selectedColor?.altText,
      sizeId: props.selectedSize?.id,
      sizeName: props.selectedSize?.name,
      sizeValue: props.selectedSize?.value,
    };

    cart.addProduct(cartItem);
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
