import Link from 'next/link';

import { CheckoutLink } from 'components/checkout/checkout-link';
import { CircleLogo } from 'components/ui/circle-logo';
import { SearchModalDisclosure } from 'components/ui/modal/search-modal';
import { getStore } from 'lib/api';
import { Search } from './search';

export async function Navbar() {
  const store = await getStore();

  return (
    <nav className="flex w-full items-center justify-between p-4">
      <div className="flex flex-none md:hidden">
        <SearchModalDisclosure />
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
          <CheckoutLink />
        </div>
      </div>
    </nav>
  );
}
