'use client';

import { useEffect, useState } from 'react';

import { useCart } from 'hooks/use-cart';
import { RemoveFromCart } from './remove-from-cart';

// TODO Link href
// TODO Image src
export function CartGrid() {
  const [isMounted, setIsMounted] = useState<boolean>(false);
  const cart = useCart();

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
          <li key={item.id} className="border">
            <p>{item.image}</p>
            <p>{item.name}</p>
            <p>{item.color}</p>
            <p>{item.size}</p>
            <p>{item.price}</p>
            <RemoveFromCart inventoryId={item.id} />
          </li>
        );
      })}
    </ul>
  );
}
