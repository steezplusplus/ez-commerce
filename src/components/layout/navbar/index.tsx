import Link from 'next/link';

import { getStore } from 'lib/api';
import { CircleLogo } from '../footer/circle-logo'; // TODO Move this component to ui/
import { CartModal } from './cart-modal';
import { Search } from './search';
import { SearchModal } from './search-modal';

export async function Navbar() {
  const store = await getStore();

  return (
    <nav className="flex w-full items-center justify-between p-4">
      <div className="flex flex-none md:hidden">
        <SearchModal />
      </div>

      <div className="flex w-full items-center">
        <div className="flex w-full md:w-1/3">
          <Link href="/" className="mr-2 flex w-full items-center justify-center md:w-auto">
            <CircleLogo />
            <h1 className="ml-2 flex-none text-sm font-medium">{store.name}</h1>
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
