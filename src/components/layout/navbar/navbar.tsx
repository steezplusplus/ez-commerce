import { AlignJustify, ShoppingCart } from 'lucide-react';
import Link from 'next/link';

import { getStore } from 'lib/api';
import { Search } from './search';

export async function Navbar() {
  const store = await getStore();

  return (
    <nav className="flex w-full items-center justify-between p-4 lg:p-6">
      <div className="block flex-none md:hidden">
        <button className="mr-2 rounded-md border p-2">
          <AlignJustify size="16" />
          {/* TODO  mobile menu */}
        </button>
      </div>

      <div className="flex w-full items-center">
        <div className="flex w-full md:w-1/3 ">
          <Link href="/" className="mr-6 hover:underline">
            <h1 className="text-md font-medium">{store.name}</h1>
          </Link>
        </div>

        <div className="hidden justify-center md:flex md:w-1/3">
          <Search />
        </div>

        <div className="flex justify-end md:w-1/3">
          <Link href="/checkout" className="ml-auto rounded-md border p-2">
            <ShoppingCart size="16" />
          </Link>
        </div>
      </div>
    </nav>
  );
}
