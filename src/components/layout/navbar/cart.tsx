'use client';

import { useCart } from 'hooks/use-cart';
import Link from 'next/link';
import { useRef } from 'react';

import { Price } from 'components/price/price';
import { ArrowBigRight, ShoppingCart, X } from 'lucide-react';

// TODO Break down into components
export function Cart() {
  const modaDialogRef = useRef<HTMLDialogElement>(null);
  const labelId = 'cart-label'; // TODO
  const descriptionId = 'cart-description'; // TODO

  const cartItems = useCart((cart) => cart.items);

  const totalPrice = cartItems.reduce((sum, item) => {
    return (sum += Number(item.price));
  }, 0);

  const showModalDialog = () => {
    if (modaDialogRef.current) {
      modaDialogRef.current.showModal();
    }
  };

  const closeModalDialog = () => {
    if (modaDialogRef.current) {
      modaDialogRef.current.close();
    }
  };

  return (
    <>
      <button
        onClick={showModalDialog}
        className="rounded-md border border-neutral-200 p-2 dark:border-neutral-800"
      >
        <ShoppingCart size="18" />
      </button>
      <dialog
        ref={modaDialogRef}
        aria-labelledby={labelId}
        aria-describedby={descriptionId}
        autoFocus
        className="rounded-lg border border-neutral-200 p-2 dark:border-neutral-800"
      >
        <div className="mb-2 flex items-center justify-between">
          <h3 className="text-lg">Cart</h3>
          <button
            onClick={closeModalDialog}
            className="rounded-md border border-neutral-200 p-1 dark:border-neutral-800"
          >
            <X size="16" />
          </button>
        </div>
        <ul className="mb-2">
          {cartItems.map((product) => {
            return (
              <li
                key={product.id}
                className="aspect-square rounded-sm border border-neutral-200 px-2 py-1 text-sm font-extralight hover:border-blue-500 dark:border-neutral-800"
              >
                <Link
                  href="/" // TODO need category
                  onClick={closeModalDialog}
                  className="text-blue-500 hover:text-blue-700 hover:underline dark:text-violet-500  dark:hover:text-violet-700"
                >
                  {product.name}
                  <Price amount={String(product.price)} />
                </Link>
              </li>
            );
          })}
        </ul>
        <Price amount={String(totalPrice)} />
        <Link
          href="/checkout"
          className="flex w-full rounded-md border border-neutral-200 px-2 py-1 dark:border-neutral-800"
          onClick={closeModalDialog}
        >
          <span className="mr-2">Check out</span>
          <ArrowBigRight />
        </Link>
      </dialog>
    </>
  );
}
