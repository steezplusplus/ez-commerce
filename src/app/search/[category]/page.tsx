import Link from 'next/link';

import { Grid, GridItem } from 'components/grid/grid';
import { Price } from 'components/price/price';
import { prisma } from 'lib/db';

type CategoryPageProps = {
  params: {
    category: string;
  };
};

export default async function CategoryPage(props: CategoryPageProps) {
  const category = await prisma.category.findFirstOrThrow({
    where: {
      name: {
        equals: props.params.category,
        mode: 'insensitive',
      },
    },
    include: {
      products: true,
    },
  });

  return (
    <>
      <h2 className="mb-2 text-sm font-light uppercase">{props.params.category}</h2>
      <Grid>
        {category.products.map((product) => {
          return (
            <GridItem key={product.id}>
              <Link href={`/product/${product.slug}`}>
                <h3>{product.name}</h3>
                <Price amount={product.price.toString()} />
              </Link>
            </GridItem>
          );
        })}
      </Grid>
    </>
  );
}
