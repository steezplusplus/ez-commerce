import Image from 'next/image';
import Link from 'next/link';
import { Suspense } from 'react';

import { Footer } from 'components/layout/footer';
import { Container } from 'components/ui/container';
import { getFeaturedProducts, getLatestProducts } from 'lib/api';

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

type Product = {
  id: string;
  slug: string;
  image: string;
  handle: string;
  altText: string;
};

type ProductListProps = {
  products: Product[];
};

function ProductList(props: ProductListProps) {
  const { products } = props;
  return (
    <ul className="grid grid-cols-1 gap-4 px-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {products.map((product, i) => {
        return <ProductCard product={product} key={`${product.id}-${i}`} />;
      })}
    </ul>
  );
}

type ProductCardProps = {
  product: Product;
};
function ProductCard(props: ProductCardProps) {
  const { product } = props;
  return (
    <li key={product.id}>
      <Link href={`/product/${product.slug}?color=${product.handle}`} className="h-full w-full">
        <div className="relative aspect-square rounded-md bg-gray-100">
          <Image
            fill
            alt={product.altText}
            src={product.image}
            className="aspect-square rounded-md object-cover"
            sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
          />
        </div>
      </Link>
    </li>
  );
}

function NoResults() {
  return (
    <div className="flex h-full w-full items-center justify-center">
      <p className="text-neutral-500">No results found.</p>
    </div>
  );
}
