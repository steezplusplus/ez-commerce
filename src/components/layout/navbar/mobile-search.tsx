'use client';

import Link from 'next/link';
import { useState } from 'react';

import { AlignCenter } from 'lucide-react';
import { Search } from './search';

export function MobileSearch() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <>
      <button onClick={() => setIsOpen(true)} className="mr-2 rounded-md border p-2">
        <AlignCenter size="18" />
      </button>
      <dialog open={isOpen} className="rounded-lg border p-2">
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
          onClick={() => setIsOpen(false)}
          className="rounded-md border border-neutral-800 px-2 py-1"
        >
          Close
        </button>
      </dialog>
    </>
  );
}
