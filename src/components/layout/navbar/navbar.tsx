import Link from 'next/link';

import { getStore } from 'lib/api';
import { CartModal } from './cart-modal';
import { Search } from './search';
import { SearchModal } from './search-modal';

export async function Navbar() {
  const store = await getStore();

  return (
    <nav className="flex w-full items-center justify-between p-4 lg:p-6">
      <div className="flex flex-none md:hidden">
        <SearchModal />
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
          <CartModal />
        </div>
      </div>
    </nav>
  );
}
