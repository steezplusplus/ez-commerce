import Image from 'next/image';
import Link from 'next/link';

import { Grid, GridItem } from 'components/ui/grid';
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

  // TODO duplicate grid with search page
  return (
    <Grid className="sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {category.products.map((product) => {
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
  );
}
