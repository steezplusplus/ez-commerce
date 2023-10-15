import { ShoppingCart } from 'lucide-react';
import Link from 'next/link';

import { prisma } from 'lib/db';
import { Search } from './search';

export async function Navbar() {
  const store = await prisma.store.findFirstOrThrow({});

  return (
    <nav className="flex w-full items-center justify-between p-4 lg:p-6">
      <div className="flex w-full items-center md:w-1/3">
        <Link href="/" className="mr-6 hover:underline">
          <h1 className="text-md font-medium md:hidden lg:block">{store.name}</h1>
        </Link>
      </div>

      <div className="hidden items-center justify-center md:flex md:w-1/3">
        <Search />
      </div>

      <div className="flex justify-end md:w-1/3">
        <Link href="/checkout" className="ml-auto rounded-md border p-2">
          <ShoppingCart size="16" />
        </Link>
      </div>
    </nav>
  );
}
