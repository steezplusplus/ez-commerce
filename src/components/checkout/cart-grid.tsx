'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';

import { Price } from 'components/ui/price';
import { useCart } from 'hooks/use-cart';
import { RemoveFromCart } from './remove-from-cart';

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
          <li key={item.id} className="flex border-b py-6 first:pt-0">
            <div className="relative h-24 w-24 overflow-hidden rounded-md sm:h-48 sm:w-48">
              <Image fill src={item.image} alt={item.altText} className="object-cover object-center" sizes="30vw" />
            </div>
            <div className="relative ml-4 flex flex-1 flex-col justify-between sm:ml-6">
              <div className="absolute right-0 top-0 z-10">
                <RemoveFromCart inventoryId={item.id} />
              </div>
              <div className="relative pr-9 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:pr-0">
                <div className="flex justify-between">
                  <p className=" text-lg font-semibold">{item.name}</p>
                </div>

                <div className="mt-1 flex text-sm">
                  <p>{item.color}</p>
                </div>
                <Price amount={String(item.price)} />
              </div>
            </div>
          </li>
        );
      })}
    </ul>
  );
}
