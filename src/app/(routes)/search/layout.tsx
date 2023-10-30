import { Suspense } from 'react';

import { Container } from 'components/container/container';
import { Footer } from 'components/layout/footer';
import { Categories } from 'components/layout/search/categories/categories';
import { Filter } from 'components/layout/search/filter/filter';
import { sorting } from 'lib/constants';

type SearchLayoutProps = {
  children: React.ReactNode;
};

export default async function SearchLayout(props: SearchLayoutProps) {
  const { children } = props;

  return (
    <Suspense>
      <Container className="flex flex-col gap-8 px-4 pb-4 md:flex-row">
        <div className="order-first w-full flex-none md:max-w-[9rem]">
          <Categories title="Categories" />
        </div>
        <div className="order-last min-h-screen w-full md:order-none">{children}</div>
        <div className="order-none flex-none md:order-last md:w-[9rem]">
          <Filter list={sorting} title="Sort by" />
        </div>
      </Container>
      <Footer />
    </Suspense>
  );
}
