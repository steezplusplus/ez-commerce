'use client';

import Link from 'next/link';
import { useRef } from 'react';

import { ShoppingCart, X } from 'lucide-react';

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
        <div className="mb-2 flex justify-between">
          <h3 className="text-lg">Cart</h3>
          <button onClick={closeModalDialog} className="rounded-md border border-neutral-800 p-1">
            <X size="16" />
          </button>
        </div>
        <ul className="mb-2">
          <li>
            <Link href={`/`} onClick={closeModalDialog}>
              Item
            </Link>
          </li>
        </ul>
        <Link
          href="/checkout"
          className="rounded-mb border px-2 py-1 text-blue-500 hover:text-blue-700"
          onClick={closeModalDialog}
        >
          Check out
        </Link>
      </dialog>
    </>
  );
}
