'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';

import { Price } from 'components/ui/price';
import { useCart } from 'hooks/use-cart';
import { RemoveFromCart } from './remove-from-cart';

// TODO Link href
// TODO Image src
export function CartGrid() {
  const [isMounted, setIsMounted] = useState<boolean>(false);
  const cart = useCart();

  const totalPrice = cart.items.reduce((sum, item) => {
    return (sum += Number(item.price));
  }, 0);

  // Avoid hydration error from using localstorage from useCart()
  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  // TODO alt text from database
  // TODO Order summary its own component
  return (
    <>
      <ul>
        {cart.items.map((item) => {
          return (
            <li key={item.id} className="flex border-b py-6 first:pt-0">
              <div className="relative h-24 w-24 overflow-hidden rounded-md sm:h-48 sm:w-48">
                <Image
                  fill
                  src={item.image}
                  alt={`Image of ${item.name}`}
                  className="object-cover object-center"
                  sizes="30vw"
                />
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
      <div className="rounded-lg border px-4 py-6 sm:p-6 lg:col-span-5 lg:mt-0 lg:p-8">
        <h2 className="text-lg font-medium">Order summary</h2>
        <div className="mt-6 space-y-4">
          <div className="border-t border-gray-200 pt-4">
            <div className="text-base font-medium">Order total</div>
            <Price amount={String(totalPrice)} />
          </div>
        </div>
      </div>
    </>
  );
}
