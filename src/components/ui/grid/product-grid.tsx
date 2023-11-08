import Image from 'next/image';
import Link from 'next/link';

import { Product } from '@prisma/client';
import { Price } from 'components/ui/price';
import { Grid, GridItem } from '.';

type ProductGridProps = {
  products: Product[];
};

export function ProductGrid(props: ProductGridProps) {
  const { products } = props;

  return (
    <Grid>
      {products.map((product) => {
        return (
          <GridItem key={product.id}>
            <Link href={`/product/${product.slug}`}>
              <div className="relative flex aspect-square h-full max-h-[550px] w-full flex-col overflow-hidden">
                {product.images.length === 0 ? (
                  <p className="text-sm">No images found for this product.</p>
                ) : (
                  <Image
                    className="aspect-square object-cover"
                    src={product.images[0] || ''}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                    alt={`Image of ${product.name}`}
                  />
                )}
              </div>
              <div>
                <h3>{product.name}</h3>
                <Price amount={String(product.price)} />
              </div>
            </Link>
          </GridItem>
        );
      })}
    </Grid>
  );
}
