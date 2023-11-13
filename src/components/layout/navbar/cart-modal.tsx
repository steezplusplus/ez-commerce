'use client';

import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';

import { RemoveFromCart } from 'components/checkout/remove-from-cart';
import { Modal } from 'components/ui/modal';
import { useCart } from 'hooks/use-cart';
import { ShoppingBag, ShoppingCart } from 'lucide-react';

export function CartModal() {
  const modaDialogRef = useRef<HTMLDialogElement>(null);
  const [isMounted, setIsMounted] = useState<boolean>(false);
  const cart = useCart();

  // Avoid hydration error from using localstorage from useCart()
  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  const labelId = 'cart-label'; // TODO
  const descriptionId = 'cart-description'; // TODO

  const showModal = () => {
    if (modaDialogRef.current) {
      modaDialogRef.current.showModal();
    }
  };

  const closeModal = () => {
    if (modaDialogRef.current) {
      modaDialogRef.current.close();
    }
  };

  return (
    <>
      <button
        className="flex items-center rounded-md border border-neutral-200 p-2 dark:border-neutral-800"
        onClick={showModal}
      >
        <ShoppingBag size="18" />
        <span className="ml-2 text-sm font-medium dark:text-white">{cart.items.length}</span>
      </button>
      <Modal modalDialogRef={modaDialogRef} labelId={labelId} descriptionId={descriptionId} title="Cart">
        {cart.items.map((item) => {
          return (
            <div key={item.productId} className="border">
              <p>{item.productId}</p>
              <p>{item.colorId}</p>
              <p>{item.sizeId}</p>
              <RemoveFromCart productId={item.productId} />
            </div>
          );
        })}
        <Link
          href="/checkout"
          className="mt-4 flex w-full items-center justify-center rounded-md border border-neutral-200 px-2 py-1 dark:border-neutral-800"
          onClick={closeModal}
        >
          Check out
          <ShoppingCart className="ml-1" size="18" />
        </Link>
      </Modal>
    </>
  );
}
