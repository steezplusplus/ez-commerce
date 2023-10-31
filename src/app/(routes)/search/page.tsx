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

  const products = await getSearchPage({ searchValue: searchValue, order: sortKey?.order });
  const numProducts = products.length;
  const resultsText = numProducts > 1 ? 'results' : 'result';

  if (products.length === 0) {
    return (
      <p>
        There are no listings for your search {searchValue && <b>&quot;{searchValue}&quot;</b>}.
      </p>
    );
  }

  // TODO Use Next.js <Image /> component
  return (
    <>
      {searchValue && (
        <p className="mb-3">
          Showing {products.length} {resultsText} for <b>&quot;{searchValue}&quot;</b>.
        </p>
      )}
      <Grid>
        {products.map((product) => {
          return (
            <GridItem key={product.id}>
              <Link className="block h-full w-full" href={`/product/${product.slug}`}>
                <div className="relative flex aspect-square h-full max-h-[550px] w-full flex-col items-center justify-center overflow-hidden">
                  <p className="text-sm">No images found for this product.</p>
                  <div className="absolute bottom-0 left-0">
                    <h3>{product.name}</h3>
                    <Price amount={String(product.price)} />
                  </div>
                </div>
              </Link>
            </GridItem>
          );
        })}
      </Grid>
    </>
  );
}
