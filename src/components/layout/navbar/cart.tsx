'use client';

import Link from 'next/link';
import { useRef } from 'react';

import { ArrowBigRight, ShoppingCart, X } from 'lucide-react';

export function Cart() {
  const modaDialogRef = useRef<HTMLDialogElement>(null);
  const labelId = 'cart-label'; // TODO
  const descriptionId = 'cart-description'; // TODO

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
          <li>
            <Link
              href={`/`}
              onClick={closeModalDialog}
              className="text-blue-500 hover:text-blue-700 hover:underline dark:text-violet-500  dark:hover:text-violet-700"
            >
              Item
            </Link>
          </li>
        </ul>
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
