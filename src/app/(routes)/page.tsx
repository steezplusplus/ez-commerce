import { Suspense } from 'react';

import { Footer } from 'components/layout/footer';
import { Container } from 'components/ui/container';
import { ProductList } from 'components/ui/product-list/product-list';
import { getFeaturedProducts } from 'lib/api';

export default async function HomePage() {
  const featuredProducts = await getFeaturedProducts({ take: 8 });

  return (
    <>
      <Container className="px-4 pb-4">
        <h2 className="my-3 pl-2 text-xl">Featured Products</h2>
        {featuredProducts.length === 0 ? <NoResults /> : <ProductList products={featuredProducts} />}
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
