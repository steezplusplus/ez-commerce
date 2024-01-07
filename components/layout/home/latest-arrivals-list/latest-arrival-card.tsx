import Link from 'next/link';

import { GridItem } from '@/components/ui/grid';
import { ProductWithColor } from '@/lib/api';
import { LatestArrivalImage, LoadingLatestArrivalImage } from './latest-arrival-image';
import { LatestArrivalInfo, LoadingLatestArrivalInfo } from './latest-arrival-info';

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

export function LoadingLatestArrivalCard() {
  return (
    <GridItem>
      <LoadingLatestArrivalImage />
      <LoadingLatestArrivalInfo />
    </GridItem>
  );
}
