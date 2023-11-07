'use client';

import { useEffect, useState } from 'react';

import { Grid, GridItem } from 'components/ui/grid';
import { Price } from 'components/ui/price';
import { useCart } from 'hooks/use-cart';
import Link from 'next/link';
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
            <Link className="relative block h-full w-full" href={`/product/${item.product.slug}`}>
              <div className="flex items-center justify-between">
                <h3>{item.product.name}</h3>
                <RemoveFromCart product={item.product} />
              </div>
              <div className=" flex aspect-square h-full max-h-[550px] w-full flex-col items-center justify-center overflow-hidden">
                <div className="absolute bottom-0 left-0">
                  {item.size && <p>Size: {item.size}</p>}
                  {item.color && <p>Color: {item.color}</p>}
                  <Price amount={String(item.product.price)} />
                </div>
              </div>
            </Link>
          </GridItem>
        );
      })}
    </Grid>
  );
}
