'use client';

import Link from 'next/link';
import { useRef } from 'react';

import { AlignCenter } from 'lucide-react';
import { Search } from './search';

export function MobileSearch() {
  const modaDialogRef = useRef<HTMLDialogElement>(null);
  const labelId = 'mobile-search-label';
  const descriptionId = 'mobile-search-description';

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
      <button onClick={showModalDialog} className="mr-2 rounded-md border p-2">
        <AlignCenter size="18" />
      </button>
      <dialog
        ref={modaDialogRef}
        aria-labelledby={labelId}
        aria-describedby={descriptionId}
        autoFocus
        className="rounded-lg border p-2"
      >
        <div className="mb-4">
          <h3 className="mb-2">Search products</h3>
          <Search />
        </div>
        <div className="mb-4">
          <h3 className="mb-2">Categories</h3>
          <ul className="pl-2">
            <li>
              <Link href={`/search/`}>1</Link>
            </li>
            <li>
              <Link href={`/search/`}>2</Link>
            </li>
            <li>
              <Link href={`/search/`}>3</Link>
            </li>
          </ul>
        </div>
        <button
          onClick={closeModalDialog}
          className="rounded-md border border-neutral-800 px-2 py-1"
        >
          Close
        </button>
      </dialog>
    </>
  );
}
