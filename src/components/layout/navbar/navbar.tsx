import { ShoppingCart } from 'lucide-react';
import Link from 'next/link';

import { prisma } from 'lib/db';
import { Search } from './search';

export async function Navbar() {
  const store = await prisma.store.findFirstOrThrow({});
  const categories = await prisma.category.findMany({
    where: {
      storeId: store.id,
    },
    take: 2,
  });

  return (
    <nav className="flex w-full items-center justify-between p-4 lg:p-6">
      <div className="flex w-full items-center md:w-1/3">
        <Link href="/" className="mr-6 hover:underline">
          <h1 className="text-md font-medium md:hidden lg:block">Jb.</h1>
        </Link>
        <div>
          <ul className="mr-6 flex w-full gap-x-6 text-sm font-light">
            <li>
              <Link href="/search" className="hover:underline">
                All
              </Link>
            </li>
            {categories.map((category) => (
              <li key={category.id}>
                <Link href={`/search/${category.slug}`} className="hover:underline">
                  {category.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
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
