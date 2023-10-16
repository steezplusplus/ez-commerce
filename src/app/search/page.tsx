import { Product } from '@prisma/client';
import Link from 'next/link';

import { Price } from 'components/price/price';
import { prisma } from 'lib/db';

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
              <li
                className="rounded-sm border px-2 py-1 text-sm font-extralight hover:border-blue-500"
                key={product.id}
              >
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
    <Link href={`/product/${props.slug}`}>
      <h3>{props.name}</h3>
      <Price amount={props.price.toString()} />
    </Link>
  );
}
