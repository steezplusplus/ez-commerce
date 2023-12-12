'use client';

// import { RemoveFromCart } from 'components/cart/remove-from-cart';
import { CartItem, useCart } from 'hooks/use-cart';
import { useEffect, useState } from 'react';
import { CartCard } from './cart-card';

export function CartList() {
  const [isMounted, setIsMounted] = useState<boolean>(false);

  const cart = useCart();

  // Avoid hydration error from using localstorage from useCart()
  useEffect(() => {
    setIsMounted(true);
  }, []);

  // TODO Loading ui to avoid CLS.
  if (!isMounted) {
    return null;
  }

  if (cart.items.length === 0) {
    return (
      <div className="mb-4 lg:col-span-7">
        <p>No items added to cart.</p>
      </div>
    );
  }

  return (
    <ul className="mb-4 lg:col-span-7">
      {cart.items.map((cartItem: CartItem) => (
        <CartCard key={cartItem.id} cartItem={cartItem} />
      ))}
    </ul>
  );
}
