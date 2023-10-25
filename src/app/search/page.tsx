import Link from 'next/link';

import { Grid, GridItem } from 'components/grid/grid';
import { Price } from 'components/price/price';
import { getSearchPage } from 'lib/api';
import { sorting } from 'lib/constants';

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
  const { q: searchValue, sort } = searchParams as { [key: string]: string };
  const sortKey = sorting.find((item) => item.slug === sort);

  const products = await getSearchPage({ searchValue: searchValue, order: sortKey?.order });

  if (products.length === 0) {
    return (
      <p>
        There are no listings for your search {searchValue && <b>&quot;{searchValue}&quot;</b>}.
      </p>
    );
  }

  return (
    <>
      <ResultsText numProducts={products.length} searchValue={searchValue} />
      <Grid>
        {products.map((product) => {
          return (
            <GridItem key={product.id}>
              <Link className="block h-full w-full" href={`/product/${product.slug}`}>
                <h3>{product.name}</h3>
                <Price amount={String(product.price)} />
              </Link>
            </GridItem>
          );
        })}
      </Grid>
    </>
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
