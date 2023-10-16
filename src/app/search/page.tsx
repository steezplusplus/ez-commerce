import { Product } from '@prisma/client';
import Link from 'next/link';

import { Price } from 'components/price/price';
import { prisma } from 'lib/db';
import Image from 'next/image';

export const metadata = {
  title: 'Search',
  description: 'Search for products in the store.',
};

export default async function SearchPage({
  searchParams,
}: {
  searchParams?: {
    [key: string]: string | string[] | undefined;
  };
}) {
  const { q: searchValue } = searchParams as { [key: string]: string };

  const products = await prisma.product.findMany({
    where: {
      name: {
        contains: searchValue || '',
        mode: 'insensitive',
      },
    },
    take: 9,
  });

  if (products.length === 0) {
    return (
      <div className="mx-auto min-h-screen max-w-screen-2xl px-4">
        <NoData searchValue={searchValue} />
      </div>
    );
  }

  return (
    <div className="mx-auto min-h-screen max-w-screen-2xl px-4">
      <section>
        {searchValue && <ResultsText numProducts={products.length} searchValue={searchValue} />}
        <ul className="grid grid-flow-row grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => {
            return (
              <li className="animate-fadeIn aspect-square transition-opacity" key={product.id}>
                <ProductLink {...product} />
              </li>
            );
          })}
        </ul>
      </section>
    </div>
  );
}

function NoData(props: { searchValue?: string }) {
  return (
    <h3>
      There are no listings for your search{' '}
      {props.searchValue && <b>&quot;{props.searchValue}&quot;</b>}.
    </h3>
  );
}

function ResultsText(props: { searchValue: string; numProducts: number }) {
  const resultsText = props.numProducts > 1 ? 'results' : 'result';
  return (
    <p className="mb-3">
      Showing {props.numProducts} {resultsText} for <b>&quot;{props.searchValue}&quot;</b>.
    </p>
  );
}

function ProductLink(props: Product) {
  return (
    <Link href={`/product/${props.slug}`} className="relative inline-block h-full w-full">
      <div className="group relative flex h-full w-full items-center justify-center overflow-hidden rounded-lg border border-neutral-200 bg-white hover:border-blue-600 dark:border-neutral-800 dark:bg-black">
        <Image
          className="relative h-full w-full object-contain transition duration-300 ease-in-out group-hover:scale-105"
          alt="TODO"
          fill
          sizes="(min-width: 768px) 33vw, (min-width: 640px) 50vw, 100vw"
          src={props.images[0] || ''}
          priority={true}
        />
        <div className="absolute bottom-0 left-0 flex w-full px-4 pb-4">
          <div className="flex items-center rounded-full border bg-white/70 p-1 text-xs font-semibold text-black backdrop-blur-md dark:border-neutral-800 dark:bg-black/70 dark:text-white">
            <h3 className="mr-4 line-clamp-2 flex-grow pl-2 leading-none tracking-tight">
              {props.name}
            </h3>
            <Price amount={props.price.toString()} />
          </div>
        </div>
      </div>
    </Link>
  );
}
