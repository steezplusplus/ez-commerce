'use client';

import { useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';

import { useCart } from 'hooks/use-cart';

export function CartCheckoutButton() {
  const [isMounted, setIsMounted] = useState<boolean>(false);

  const cart = useCart();

  // Avoid hydration error from using localstorage from useCart()
  useEffect(() => {
    setIsMounted(true);
  }, []);

  // TODO Avoid CLS. Missing loading ui.
  if (!isMounted) {
    return null;
  }

  const handleCheckout = () => {
    if (!cart.items.length) {
      return toast.error('There are no products in your cart. Add products to your cart to continue.');
    }
    return toast.success('Thanks for checking out my demo.');
  };

  return (
    <button
      className="
        disabled:cursor-opacity-50
        w-full
        rounded-md
        border
        px-2
        py-1
        text-xl
        tracking-widest
        transition
        hover:opacity-75
        disabled:cursor-not-allowed
      "
      onClick={handleCheckout}
    >
      Checkout
    </button>
  );
}
