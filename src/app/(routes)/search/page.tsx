import Image from 'next/image';
import Link from 'next/link';

import { Grid, GridItem } from 'components/ui/grid';
import { Price } from 'components/ui/price';
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
  const products = await getSearchPage({ name: searchValue, order: sortKey?.order });

  if (products.length === 0) {
    if (searchValue) {
      return (
        <p>
          There are no listings for your search {searchValue && <b>&quot;{searchValue}&quot;</b>}.
        </p>
      );
    }
    return <p>There are no products in this store.</p>;
  }

  // TODO duplicate grid with category page
  return (
    <>
      {searchValue && (
        <p className="mb-3">
          Showing {products.length} {products.length > 1 ? 'results' : 'result'} for{' '}
          <b>&quot;{searchValue}&quot;</b>.
        </p>
      )}
      <Grid className="sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {products.map((product) => {
          return (
            <GridItem key={product.id}>
              <Link href={`/product/${product.slug}`}>
                <Image
                  width="64"
                  height="64"
                  alt={product.variants[0]?.altText || ''}
                  src={product.variants[0]?.image || ''}
                />
              </Link>
              <h2>{product.name}</h2>
              <Price amount={String(product.price)} />
            </GridItem>
          );
        })}
      </Grid>
    </>
  );
}
