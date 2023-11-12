import { Price } from 'components/ui/price';
import { getCategoryPage } from 'lib/api';
import { sorting } from 'lib/constants';

type CategoryPageProps = {
  params: {
    category: string;
  };
  searchParams?: {
    [key: string]: string | string[] | undefined;
  };
};

// TODO generate metadata
export default async function CategoryPage(props: CategoryPageProps) {
  const { params, searchParams } = props;

  const { sort } = searchParams as { [key: string]: string };
  const sortKey = sorting.find((item) => item.slug === sort);

  const category = await getCategoryPage({ name: params.category, order: sortKey?.order });

  if (category.products.length === 0) {
    return <p>No products found in this category.</p>;
  }

  return (
    <>
      {category.products.map((product) => {
        return (
          <div key={product.id}>
            <h2>{product.name}</h2>
            <Price amount={String(product.price)} />
          </div>
        );
      })}
    </>
  );
}
