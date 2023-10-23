'use client';

import Link from 'next/link';
import { useRef } from 'react';

import { ShoppingCart } from 'lucide-react';

export function Cart() {
  const modaDialogRef = useRef<HTMLDialogElement>(null);
  const labelId = 'cart-label';
  const descriptionId = 'cart-description';

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
      <button onClick={showModalDialog} className="rounded-md border p-2">
        <ShoppingCart size="18" />
      </button>
      <dialog
        ref={modaDialogRef}
        aria-labelledby={labelId}
        aria-describedby={descriptionId}
        autoFocus
        className="rounded-lg border p-2"
      >
        <div className="mb-4">
          <h3 className="mb-2">Cart</h3>
          <ul className="pl-2">
            <li>
              <Link href={`/`}>Item</Link>
            </li>
          </ul>
        </div>
        <button
          onClick={closeModalDialog}
          className="rounded-md border border-neutral-800 px-2 py-1"
        >
          Close
        </button>
        <Link href="/checkout" className="text-blue-500 hover:text-blue-700 hover:underline">
          Check out
        </Link>
      </dialog>
    </>
  );
}
