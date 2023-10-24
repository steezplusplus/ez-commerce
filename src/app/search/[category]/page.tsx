import Link from 'next/link';

import { Grid, GridItem } from 'components/grid/grid';
import { Price } from 'components/price/price';
import { prisma } from 'lib/db';

type CategoryPageProps = {
  params: {
    category: string;
  };
  searchParams?: {
    [key: string]: string | string[] | undefined;
  };
};

// todo temp solution
const sorts: Record<string, 'asc' | 'desc'> = {
  'price-asc': 'asc',
  'price-desc': 'desc',
};

export default async function CategoryPage(props: CategoryPageProps) {
  const { params, searchParams } = props;

  const { sort = '' } = searchParams as { [key: string]: string };

  const category = await prisma.category.findFirstOrThrow({
    where: {
      name: {
        equals: params.category,
        mode: 'insensitive',
      },
    },
    include: {
      products: {
        orderBy: {
          price: sorts[sort],
        },
      },
    },
    orderBy: {},
  });

  if (category.products.length === 0) {
    return <p className="py-3 text-lg">{`No products found in this collection`}</p>;
  }

  return (
    <>
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
