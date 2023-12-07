'use client';

import { useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';

import { useCart } from 'hooks/use-cart';

export function CheckoutButton() {
  const [isMounted, setIsMounted] = useState<boolean>(false);
  const cart = useCart();

  // Avoid hydration error from using localstorage from useCart()
  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  const handleCheckout = () => {
    if (cart.items.length > 0) {
      toast.success('Thanks for checking out my demo.');
    } else {
      toast.error('Your cart is empty.');
    }
  };

  return (
    <button onClick={handleCheckout} className="w-full rounded-sm border p-2">
      Purchase
    </button>
  );
}
