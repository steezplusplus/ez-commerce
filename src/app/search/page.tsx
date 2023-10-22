import { Product } from '@prisma/client';
import Link from 'next/link';

import { Grid, GridItem } from 'components/grid/grid';
import { Price } from 'components/price/price';
import { prisma } from 'lib/db';

export const metadata = {
  title: 'Search',
  description: 'Search for products in the store.',
};

type SearchPageProps = {
  searchParams?: {
    [key: string]: string | string[] | undefined;
  };
};

export default async function SearchPage({ searchParams }: SearchPageProps) {
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
    return <NoData searchValue={searchValue} />;
  }

  return (
    <>
      <ResultsText numProducts={products.length} searchValue={searchValue} />
      <Grid>
        {products.map((product) => {
          return (
            <GridItem key={product.id}>
              <ProductLink {...product} />
            </GridItem>
          );
        })}
      </Grid>
    </>
  );
}

function NoData(props: { searchValue?: string }) {
  return (
    <p>
      There are no listings for your search{' '}
      {props.searchValue && <b>&quot;{props.searchValue}&quot;</b>}.
    </p>
  );
}

function ResultsText(props: { searchValue?: string; numProducts: number }) {
  const resultsText = props.numProducts > 1 ? 'results' : 'result';
  if (!props.searchValue) {
    return <></>;
  }

  return (
    <p className="mb-3">
      Showing {props.numProducts} {resultsText} for <b>&quot;{props.searchValue}&quot;</b>.
    </p>
  );
}

function ProductLink(props: Product) {
  return (
    <Link className="block h-full w-full" href={`/product/${props.slug}`}>
      <h3>{props.name}</h3>
      <Price amount={props.price.toString()} />
    </Link>
  );
}
