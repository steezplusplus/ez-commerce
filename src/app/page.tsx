import Image from 'next/image';
import Link from 'next/link';
import { Suspense } from 'react';

import { Footer } from 'components/layout/footer';
import { Container } from 'components/ui/container';
import { getFeaturedProducts, getLatestProducts } from 'lib/api';

export default async function Home() {
  const latestProducts = await getLatestProducts({ take: 4 });
  const featuredProducts = await getFeaturedProducts({ take: 4 });

  return (
    <>
      <Container className="px-4 pb-4">
        <h2 className="my-3 pl-2 text-xl">Latest Arrivals</h2>
        <ul className="grid grid-cols-1 gap-4 px-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {latestProducts.map((product) => {
            return (
              <li key={product.image}>
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
          })}
        </ul>
        <h2 className="my-3 pl-2 text-xl">Featured Products</h2>
        <ul className="grid grid-cols-1 gap-4 px-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {featuredProducts.map((product) => {
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
          })}
        </ul>
      </Container>
      <Suspense>
        <Footer />
      </Suspense>
    </>
  );
}
