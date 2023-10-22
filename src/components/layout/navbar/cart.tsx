'use client';

import Link from 'next/link';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';

import { ShoppingCart } from 'lucide-react';

// TODO open close state belongs in react state
export function Cart() {
  const router = useRouter();
  const path = usePathname();
  const params = useSearchParams();

  const newParams = new URLSearchParams(params.toString());
  newParams.delete('cart'); // ensure user doesnt change params
  newParams.append('cart', 'true');

  const onOpen = `${path}?${newParams.toString()}`;
  const isOpen = params.get('cart') === 'true';

  const onClose = () => {
    newParams.delete('cart');
    router.push(`${path}?${newParams}`);
  };

  return (
    <>
      <Link href={onOpen} className="mr-2 inline-block rounded-md border p-2">
        <ShoppingCart size="18" />
      </Link>
      <dialog open={isOpen} className="rounded-lg border p-2">
        <div className="mb-4">
          <h3 className="mb-2">Cart</h3>
          <ul className="pl-2">
            <li>
              <Link href={`/`}>1</Link>
            </li>
            <li>
              <Link href={`/`}>2</Link>
            </li>
            <li>
              <Link href={`/`}>3</Link>
            </li>
          </ul>
        </div>
        <button onClick={onClose} className="rounded-md border border-neutral-800 px-2 py-1">
          Close
        </button>
        <Link href="/checkout" className="text-blue-500 hover:text-blue-700 hover:underline">
          Check out
        </Link>
      </dialog>
    </>
  );
}
