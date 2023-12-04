'use client';

import { ShoppingBag } from 'lucide-react';
import Link from 'next/link';
import { useEffect, useState } from 'react';

import { useCart } from 'hooks/use-cart';

export function CheckoutLink() {
  const cart = useCart();

  const [isMounted, setIsMounted] = useState<boolean>(false);
  // Avoid hydration error from using localstorage from useCart()
  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <Link
      href="/checkout"
      className="flex items-center rounded-md border border-neutral-200 p-2 dark:border-neutral-800"
    >
      <ShoppingBag size="18" />
      <span className="ml-2 text-sm font-medium dark:text-white">{cart.items.length}</span>
    </Link>
  );
}
