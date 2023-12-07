'use client';

import { toast } from 'react-hot-toast';

import { useCart } from 'hooks/use-cart';

type AddToCartProps = {
  selectedProductName: string;
  selectedProductPrice: number;
  sizeRequired: boolean;
  selectedSizeName: string | undefined;
  colorRequired: boolean;
  selectedColorName: string | undefined;
  selectedColorImage: string | undefined;
  selectedColorImageAltText: string | undefined;
  selectedInventory: number | undefined;
  selectedInventoryId: string | undefined;
};

export function AddToCart(props: AddToCartProps) {
  const {
    selectedProductName,
    selectedProductPrice,
    sizeRequired,
    selectedSizeName,
    colorRequired,
    selectedColorName,
    selectedColorImage,
    selectedColorImageAltText,
    selectedInventory,
    selectedInventoryId,
  } = props;

  const cart = useCart();

  const onClick = () => {
    if (colorRequired && selectedColorName === undefined) {
      return toast.error('Please select a color');
    }

    if (sizeRequired && selectedSizeName === undefined) {
      return toast.error('Please select a size');
    }

    if (!selectedInventory) {
      return toast.error('This product is out of stock');
    }

    const product = {
      id: selectedInventoryId as string,
      name: selectedProductName as string,
      size: selectedSizeName as string,
      color: selectedColorName as string,
      image: selectedColorImage as string,
      altText: selectedColorImageAltText as string,
      price: selectedProductPrice as number,
    };

    cart.addItem(product);
  };

  return (
    <button className="w-full rounded border px-2 py-1" onClick={onClick}>
      Add to cart
    </button>
  );
}
