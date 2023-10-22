'use client';

import Link from 'next/link';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';

import { AlignCenter } from 'lucide-react';
import { Search } from './search';

export function MobileSearch() {
  const router = useRouter();
  const path = usePathname();
  const params = useSearchParams();

  const newParams = new URLSearchParams(params.toString());
  newParams.delete('mobile-navbar'); // ensure user doesnt change params
  newParams.append('mobile-navbar', 'true');

  const onOpen = `${path}?${newParams.toString()}`;
  console.log(params.get('mobile-navbar'));
  const isOpen = params.get('mobile-navbar') === 'true';

  const onClose = () => {
    newParams.delete('mobile-navbar');
    router.push(`${path}?${newParams}`);
  };

  return (
    <>
      <Link href={onOpen} className="mr-2 inline-block rounded-md border p-2">
        <AlignCenter size="18" />
      </Link>
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
        <button onClick={onClose} className="rounded-md border border-neutral-800 px-2 py-1">
          Close
        </button>
      </dialog>
    </>
  );
}
