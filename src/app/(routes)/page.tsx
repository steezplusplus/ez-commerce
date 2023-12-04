import { Suspense } from 'react';

import { Footer } from 'components/layout/footer';
import { Container } from 'components/ui/container';
import { ProductList } from 'components/ui/product-list/product-list';
import { getFeaturedProducts, getLatestProducts } from 'lib/api';

// TODO ProductList can cause duplicate key with these queries
export default async function HomePage() {
  const latestProducts = await getLatestProducts({ take: 4 });
  const featuredProducts = await getFeaturedProducts({ take: 4 });

  return (
    <>
      <Container className="px-4 pb-4">
        <h2 className="my-3 pl-2 text-xl">Latest Arrivals</h2>
        {latestProducts.length === 0 ? <NoResults /> : <ProductList products={latestProducts} />}
        <h2 className="my-3 pl-2 text-xl">Featured Products</h2>
        {latestProducts.length === 0 ? <NoResults /> : <ProductList products={featuredProducts} />}
      </Container>
      <Suspense>
        <Footer />
      </Suspense>
    </>
  );
}

function NoResults() {
  return (
    <div className="flex h-full w-full items-center justify-center">
      <p className="text-neutral-500">No results found.</p>
    </div>
  );
}
