import Link from 'next/link';

import { GridItem } from 'components/ui/grid';
import { Product } from 'lib/types';
import { ProductImage } from './product-image';
import { ProductInfo } from './product-info';

export function ProductCard({ product }: { product: Product }) {
  const { id, name, slug, handle, image, altText, price } = product;

  const href = `/product/${slug}?color=${handle}`;

  return (
    <GridItem key={id} className="group/card">
      <Link href={href} className="h-full w-full">
        <ProductImage altText={altText} image={image} />
        <ProductInfo name={name} price={price} />
      </Link>
    </GridItem>
  );
}
