'use client';

import { useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';

import { Button } from 'components/ui/button';
import { useCart } from 'hooks/use-cart';

export function CartCheckoutButton() {
  const [isMounted, setIsMounted] = useState<boolean>(false);
  const cart = useCart();

  // Avoid hydration error from using localstorage from useCart()
  useEffect(() => {
    setIsMounted(true);
  }, []);

  // TODO Avoid CLS
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
    <Button onClick={handleCheckout} className="w-full text-xl">
      Purchase
    </Button>
  );
}
