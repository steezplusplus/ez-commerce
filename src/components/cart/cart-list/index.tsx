'use client';

// import { RemoveFromCart } from 'components/cart/remove-from-cart';
import { Grid } from 'components/ui/grid';
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
    return <p>No items added to cart.</p>;
  }

  return (
    <Grid className="grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
      {cart.items.map((cartItem: CartItem) => (
        <CartCard key={cartItem.id} cartItem={cartItem} />
      ))}
    </Grid>
  );
}
