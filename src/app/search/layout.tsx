import { Suspense } from 'react';

import { Footer } from 'components/layout/footer/footer';
import { Categories } from 'components/layout/search/categories/categories';
import { MobileCategories } from 'components/layout/search/categories/mobile-categories';
import { Filter } from 'components/layout/search/filter/filter';
import { MobileFiltersSelect } from 'components/layout/search/filter/mobile-filters-select';

type SearchLayoutProps = {
  children: React.ReactNode;
};

export default async function SearchLayout(props: SearchLayoutProps) {
  const { children } = props;

  return (
    <Suspense>
      <div className="mx-auto flex max-w-screen-2xl flex-col gap-8 px-4 pb-4 md:flex-row">
        <div className="order-first w-full flex-none md:max-w-[9rem]">
          <div className="hidden md:block">
            <Categories />
          </div>
          <div className="block md:hidden">
            <MobileCategories />
          </div>
        </div>
        <div className="order-last min-h-screen w-full md:order-none">{children}</div>
        <div className="order-none flex-none md:order-last md:w-[9rem]">
          <div className="hidden md:block">
            <Filter />
          </div>
          <div className="block md:hidden">
            <MobileFiltersSelect />
          </div>
        </div>
      </div>
      <Footer />
    </Suspense>
  );
}
