'use client';

import { useEffect, useState } from 'react';

import { useCart } from 'hooks/use-cart';
import { RemoveFromCart } from './remove-from-cart';

// TODO Link href
// TODO Image src
export function CartGrid() {
  const cart = useCart();

  const [isMounted, setIsMounted] = useState<boolean>(false);
  // Avoid hydration error from using localstorage from useCart()
  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <ul>
      {cart.items.map((item) => {
        return (
          <li key={`${item.productId}-${item.sizeId}-${item.colorId}`} className="border">
            <p>{item.productId}</p>
            <p>{item.colorId}</p>
            <p>{item.sizeId}</p>
            <RemoveFromCart inventoryId={item.id} />
          </li>
        );
      })}
    </ul>
  );
}
