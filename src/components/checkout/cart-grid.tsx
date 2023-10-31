'use client';

import { useEffect, useState } from 'react';

import { Grid, GridItem } from 'components/ui/grid';
import { Price } from 'components/ui/price';
import { useCart } from 'hooks/use-cart';
import { RemoveFromCart } from './remove-from-cart';

export function CartGrid() {
  const [isMounted, setIsMounted] = useState<boolean>(false);
  const cartItems = useCart((cart) => cart.items);

  // Avoid hydration error from using localstorage from useCart()
  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  if (cartItems.length === 0) {
    return <p>No products have been added to your cart</p>;
  }

  return (
    <Grid>
      {cartItems.map((item) => {
        return (
          <GridItem key={item.product.id}>
            <div className="flex items-center justify-between">
              <p>{item.product.name}</p>

              <RemoveFromCart product={item.product} />
            </div>
            <p>{item.size}</p>
            <p>{item.color}</p>
            <Price amount={String(item.product.price)} />
          </GridItem>
        );
      })}
    </Grid>
  );
}
