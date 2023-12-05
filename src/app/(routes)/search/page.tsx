import { ProductList } from 'components/ui/product-list/product-list';
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

  const sortItem = sorting.find((item) => item.slug === sort);
  const products = await getSearchPage({ name: searchValue, sortKey: sortItem?.sortKey, order: sortItem?.order });

  if (products.length === 0) {
    if (searchValue) {
      return <p>There are no listings for your search {searchValue && <b>&quot;{searchValue}&quot;</b>}.</p>;
    }
    return <p>There are no products in this store.</p>;
  }

  return (
    <>
      {searchValue && (
        <p className="mb-3">
          Showing {products.length} {products.length > 1 ? 'results' : 'result'} for <b>&quot;{searchValue}&quot;</b>.
        </p>
      )}
      <ProductList products={products} />
    </>
  );
}
