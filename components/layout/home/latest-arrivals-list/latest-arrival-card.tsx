import Link from 'next/link';

import { GridItem } from '@/components/ui/grid';
import { ProductWithColor } from '@/lib/api';
import { LatestArrivalImage } from './latest-arrival-image';
import { LatestArrivalInfo } from './latest-arrival-info';

export function LatestArrivalCard({ product }: { product: ProductWithColor }) {
  const href = `/product/${product.slug}`;

  return (
    <GridItem key={product.id} className="group/card">
      <Link href={href} className="h-full w-full">
        <LatestArrivalImage product={product} />
        <LatestArrivalInfo name={product.name} price={product.price} />
      </Link>
    </GridItem>
  );
}
