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
              <ProductImage image={product.images[0]} price={product.price} name={product.name} />
            </Link>
          </GridItem>
        );
      })}
    </Grid>
  );
}

type ProductImage = {
  image?: string;
  price: number;
  name: string;
};
// TODO Alt text, image
function ProductImage(props: ProductImage) {
  if (props.image === undefined) {
    return (
      <div className="relative flex aspect-square h-full max-h-[550px] w-full flex-col items-center justify-center overflow-hidden">
        <p className="text-sm">No images found for this product.</p>
        <div className="absolute bottom-0 left-0">
          <h3>{props.name}</h3>
          <Price amount={String(props.price)} />
        </div>
      </div>
    );
  }

  return <div className="aspect-square h-full max-h-[550px] w-full overflow-hidden">Todo</div>;
}
