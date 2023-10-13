import Link from 'next/link';

import { prisma } from 'lib/db';
import { Search, ShoppingCart } from 'lucide-react';

export async function Navbar() {
  const store = await prisma.store.findFirstOrThrow({});
  const categories = await prisma.category.findMany({
    where: {
      storeId: store.id
    }
  });

  return (
    <nav className="flex w-full items-center px-2 py-1">
      <div className="flex w-full md:w-1/3">
        <Link href="/" className="mr-2 flex w-full items-center justify-center md:w-auto lg:mr-6">
          <h1 className="ml-2 flex-none text-sm font-medium">
            Jb.
          </h1>
        </Link>
        <ul className="hidden gap-6 text-sm md:flex md:items-center">     
          <li>
            <Link
              href="/search"
              className="text-neutral-500 underline-offset-4 hover:text-black hover:underline dark:text-neutral-400 dark:hover:text-neutral-300"
            >
              All
            </Link>
          </li>       
          {categories.map((category) => (
            <li key={category.id}>
              <Link
                href={`/search/${category.name.toLocaleLowerCase()}`}
                className="text-neutral-500 underline-offset-4 hover:text-black hover:underline dark:text-neutral-400 dark:hover:text-neutral-300"
              >
                {category.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="hidden justify-center md:flex md:w-1/3">
        <div className="flex items-center">
          <input type="search" />
          <Search size="16" />
        </div>
      </div>
      <div className="flex justify-end md:w-1/3">
        <button className="p-2 border rounded-md">
          <ShoppingCart size="16" />
        </button>
      </div>
    </nav>
  );
}