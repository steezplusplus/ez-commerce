import { Metadata } from 'next';

import { ProductList } from 'components/layout/search/product-list';
import { getCategory, getCategoryPage } from 'lib/api';
import { sorting } from 'lib/constants';

type CategoryPageProps = {
  params: {
    category: string;
  };
  searchParams?: {
    [key: string]: string | string[] | undefined;
  };
};

export async function generateMetadata({ params }: { params: { category: string } }): Promise<Metadata> {
  const category = await getCategory({ name: params.category });
  return {
    title: category.name,
  };
}

export default async function CategoryPage(props: CategoryPageProps) {
  const { params, searchParams } = props;

  const { sort } = searchParams as { [key: string]: string };
  const selectedSort = sorting.find((item) => item.slug === sort);

  const category = await getCategoryPage({
    name: params.category,
    sortKey: selectedSort?.sortKey,
    order: selectedSort?.order,
  });

  if (category.products.length === 0) {
    return <NoResults />;
  }

  return <ProductList products={category.products} />;
}

function NoResults() {
  return (
    <div className="flex h-full w-full items-center justify-center">
      <p className="text-neutral-300">No products found in this category.</p>
    </div>
  );
}
