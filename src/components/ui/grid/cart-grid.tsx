'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';

import { RemoveFromCart } from 'components/checkout/remove-from-cart';
import { Grid, GridItem } from 'components/ui/grid';
import { Price } from 'components/ui/price';
import { useCart } from 'hooks/use-cart';
import { Palette, Ruler } from 'lucide-react';
import Image from 'next/image';

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
            {/* Image */}
            <Link href={`/product/${item.product.slug}`}>
              <div className="relative flex aspect-square h-full max-h-[550px] w-full flex-col overflow-hidden">
                {item.product.images.length === 0 ? (
                  <p className="text-sm">No images found for this product.</p>
                ) : (
                  <Image
                    className="aspect-square object-cover"
                    src={item.product.images[0] || ''}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                    alt={`Image of ${item.product.name}`}
                  />
                )}
              </div>
            </Link>
            {/* Actions */}
            <div className="flex items-center justify-between">
              <h3 className="mb-1 text-lg">{item.product.name}</h3>
              <RemoveFromCart product={item.product} />
            </div>
            {/* Info */}
            {item.size && (
              <div className="flex items-center">
                <Ruler size="18" className="mr-1" />
                {item.size}
              </div>
            )}
            {item.color && (
              <div className="flex items-center">
                <Palette size="18" className="mr-1" />
                {item.color}
              </div>
            )}
            <Price amount={String(item.product.price)} />
          </GridItem>
        );
      })}
    </Grid>
  );
}
