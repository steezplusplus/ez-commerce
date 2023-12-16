'use client';

import { Loader, ShoppingBag } from 'lucide-react';
import Link from 'next/link';
import { useEffect, useState } from 'react';

import { useCart } from 'hooks/use-cart';

// TODO Use the other loading animation
export function CheckoutLink() {
  const cart = useCart();

  const [isMounted, setIsMounted] = useState<boolean>(false);
  // Avoid hydration error from using localstorage from useCart()
  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return (
      <span className="flex items-center rounded-md border p-2">
        <ShoppingBag size="18" />
        <Loader className="ml-2 animate-pulse" size="8" />
      </span>
    );
  }

  return (
    <Link href="/checkout" className="flex items-center rounded-md border p-2">
      <ShoppingBag size="18" />
      <span className="ml-2 text-xs font-medium dark:text-white">{cart.products.length}</span>
    </Link>
  );
}