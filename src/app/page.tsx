import Image from 'next/image';
import Link from 'next/link';
import { Suspense } from 'react';

import { Footer } from 'components/layout/footer';
import { getHomePage } from 'lib/api';

export default async function Home() {
  const products = await getHomePage({ take: 9 });

  return (
    <>
      <div className="w-full overflow-x-auto">
        <ul className="flex gap-4">
          {products.map((product) => {
            return (
              <li
                className="relative aspect-square h-[30vh] max-h-[275px] w-2/3 max-w-[475px] flex-none md:w-1/3"
                key={product.id}
              >
                <Link href={`/product/${product.slug}`} className="relative h-full w-full">
                  <div className="group relative flex h-full w-full items-center justify-center overflow-hidden rounded-lg border border-neutral-200 bg-white hover:border-blue-600 dark:border-neutral-800 dark:bg-black">
                    <Image
                      fill
                      sizes="(min-width: 1024px) 25vw, (min-width: 768px) 33vw, 50vw"
                      className="relative h-full w-full object-contain transition duration-300 ease-in-out group-hover:scale-105"
                      src={product.images[0] as string}
                      alt={`Image of ${product.name}`}
                    />
                  </div>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>

      <Suspense>
        <Footer />
      </Suspense>
    </>
  );
}
