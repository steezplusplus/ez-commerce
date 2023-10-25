import Link from 'next/link';

import { Grid, GridItem } from 'components/grid/grid';
import { Price } from 'components/price/price';
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

  const category = await getCategoryPage({
    name: params.category,
    order: sortKey?.order,
  });

  if (category.products.length === 0) {
    return <p>No products found in this collection</p>;
  }

  return (
    <Grid>
      {category.products.map((product) => {
        return (
          <GridItem key={product.id}>
            <Link href={`/product/${product.slug}`}>
              <h3>{product.name}</h3>
              <Price amount={String(product.price)} />
            </Link>
          </GridItem>
        );
      })}
    </Grid>
  );
}
