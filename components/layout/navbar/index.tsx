import { CheckoutLink } from 'components/cart/checkout-link';
import { NavLogo } from 'components/layout/navbar/nav-logo';
import { ProductSearch } from 'components/layout/navbar/product-search';
import { SearchModalDisclosure } from 'components/layout/navbar/search-modal-disclosure';

import { getStore } from 'lib/api';

export async function Navbar() {
  const store = await getStore();

  return (
    <nav className="flex w-full items-center justify-between p-4">
      {/* Mobile search */}
      <div className="flex flex-none md:hidden">
        <SearchModalDisclosure />
      </div>

      <div className="flex w-full items-center">
        {/* Logo */}
        <div className="flex w-full md:w-1/3">
          <NavLogo storeName={store.name} />
        </div>

        {/* Desktop & Laptop search */}
        <div className="hidden justify-center md:flex md:w-1/3">
          <ProductSearch />
        </div>

        {/* Checkout Link */}
        <div className="flex justify-end md:w-1/3">
          <CheckoutLink />
        </div>
      </div>
    </nav>
  );
}
