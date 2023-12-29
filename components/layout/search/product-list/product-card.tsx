import Link from 'next/link';

import { ProductImage } from 'components/layout/search/product-list/product-image';
import { ProductInfo } from 'components/layout/search/product-list/product-info';
import { GridItem } from 'components/ui/grid';
import { ProductWithColor } from 'lib/api';

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
