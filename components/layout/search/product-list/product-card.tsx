import Link from 'next/link';

import { ProductWithColor } from '../../../../lib/api';
import { GridItem } from '../../../ui/grid';
import { ProductImage } from './product-image';
import { ProductInfo } from './product-info';

export function ProductCard({ product }: { product: ProductWithColor }) {
  const href = `/product/${product.slug}`;

  return (
    <GridItem key={product.id} className="group/card">
      <Link href={href} className="h-full w-full">
        <ProductImage product={product} />
        <ProductInfo name={product.name} price={product.price} />
      </Link>
    </GridItem>
  );
}
