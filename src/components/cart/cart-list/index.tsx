'use client';

import { useCart } from 'hooks/use-cart';
import { useEffect, useState } from 'react';
import { CartCard, LoadingCartCard } from './cart-card';

export function CartList() {
  const [isMounted, setIsMounted] = useState<boolean>(false);

  const cart = useCart();

  // Avoid hydration error from using localstorage from useCart()
  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return (
      <ul className="lg:col-span-7">
        <LoadingCartCard />
        <LoadingCartCard />
      </ul>
    );
  }

  if (cart.products.length === 0) {
    return (
      <ul className="flex h-full items-center justify-center rounded-md border lg:col-span-7">
        <li>
          <h3 className="text-lg">No items added to cart.</h3>
        </li>
      </ul>
    );
  }

  return (
    <ul className="lg:col-span-7">
      {cart.products.map((cartProduct) => (
        <CartCard key={cartProduct.inventoryId} cartProduct={cartProduct} />
      ))}
    </ul>
  );
}
