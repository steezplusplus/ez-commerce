'use client';

import { useEffect, useState } from 'react';

import { Grid, GridItem } from 'components/grid/grid';
import { Price } from 'components/price/price';
import { useCart } from 'hooks/use-cart';
import { X } from 'lucide-react';

export function CartGrid() {
  const [isMounted, setIsMounted] = useState<boolean>(false);
  const cartItems = useCart((cart) => cart.items);
  const cart = useCart();

  const onRemove = (productId: string) => {
    cart.removeItem(productId);
  };

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
      {cartItems.map((product) => {
        return (
          <GridItem key={product.id}>
            <div className="flex items-center justify-between">
              {product.name}
              <button
                onClick={() => onRemove(product.id)}
                className="rounded-md border border-neutral-200 p-1 dark:border-neutral-800"
              >
                <X size="12" />
              </button>
            </div>
            <Price amount={String(product.price)} />
          </GridItem>
        );
      })}
    </Grid>
  );
}
