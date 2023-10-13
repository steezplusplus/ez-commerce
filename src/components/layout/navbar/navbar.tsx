import Link from 'next/link';

import { prisma } from 'lib/db';
import { Search, ShoppingCart } from 'lucide-react';

export async function Navbar() {
  const store = await prisma.store.findFirstOrThrow({});
  const categories = await prisma.category.findMany({
    where: {
      storeId: store.id
    },
    take: 2,
  });

  return (
    <nav className="flex w-full items-center justify-between p-4 lg:p-6">
      <div className="flex w-full md:w-1/3">
        <Link href="/" className='hover:underline mr-6'>
          <h1 className="text-md font-medium md:hidden lg:block">
            Jb.
          </h1>
        </Link>
        <div>
          <ul className="flex w-full gap-x-6 text-sm font-light mr-6">  
            <li>
              <Link
                href="/search"
                className="hover:underline"
              >
                All
              </Link>
            </li>       
            {categories.map((category) => (
              <li key={category.id}>
                <Link
                  href={`/search/${category.slug}`}
                  className="hover:underline"
                >
                  {category.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>


      <div className="hidden justify-center items-center md:flex md:w-1/3">
        <input type="search" />
        <Search size="16" />
      </div>

      <div className="flex justify-end md:w-1/3">
        <button className="ml-auto p-2 border rounded-md">
          <ShoppingCart size="16" />
        </button>
      </div>
    </nav>
  );
}