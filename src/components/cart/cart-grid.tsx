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
    return <LoadingCartGrid />;
  }

  if (cart.items.length === 0) {
    return <h3>No items in your cart.</h3>;
  }

  return (
    <ul>
      {cart.items.map((item) => {
        return (
          <li key={item.id} className="flex border-b py-6 first:pt-0">
            {/* Image */}
            <div className="relative h-24 w-24 overflow-hidden rounded-md sm:h-48 sm:w-48">
              <Image fill src={item.image} alt={item.altText} className="object-cover object-center" sizes="30vw" />
            </div>
            {/* Info */}
            <div className="ml-4 flex flex-1 flex-col sm:ml-6">
              <div className="flex justify-between">
                <p className="text-lg font-semibold">{item.name}</p>
                <RemoveFromCart inventoryId={item.id} />
              </div>
              <p>{item.color}</p>
              <p>{item.size}</p>
              <Price amount={String(item.price)} />
            </div>
          </li>
        );
      })}
    </ul>
  );
}

function LoadingCartGrid() {
  return (
    <ul>
      <LoadingCartItem />
      <LoadingCartItem />
    </ul>
  );
}

function LoadingCartItem() {
  return (
    <li className="flex border-b py-6 first:pt-0">
      {/* Image */}
      <div className="h-24 w-24 animate-pulse rounded-md bg-gray-100 dark:bg-gray-700 sm:h-48 sm:w-48" />
      {/* Info */}
      <div className="ml-4 flex flex-1 flex-col space-y-1 sm:ml-6">
        <div className="flex justify-between">
          {/* Name */}
          <div className="h-6 w-3/4 animate-pulse rounded-md bg-gray-100 dark:bg-gray-700" />
          {/* X Ixon */}
          <div className="h-[10px] w-[10px] animate-pulse rounded bg-gray-100 dark:bg-gray-700" />
        </div>
        {/* Color */}
        <div className="h-5 w-1/2 animate-pulse rounded-md bg-gray-100 dark:bg-gray-700" />
        {/* Size */}
        <div className="h-5 w-1/2 animate-pulse rounded-md bg-gray-100 dark:bg-gray-700" />
        {/* Price */}
        <div className="mt-1 h-4 w-full animate-pulse rounded-md bg-gray-100 dark:bg-gray-700" />
      </div>
    </li>
  );
}
