import { Grid } from '@/components/ui/grid';
import { ProductWithColor } from '@/lib/api';
import { LatestArrivalCard, LoadingLatestArrivalCard } from './latest-arrival-card';

export function LatestArrivalList({ products }: { products: ProductWithColor[] }) {
  return (
    <Grid className="grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
      {products.map((product) => (
        <LatestArrivalCard product={product} key={product.id} />
      ))}
    </Grid>
  );
}

export function LoadingLatestArrivalsList() {
  return (
    <Grid className="grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
      <LoadingLatestArrivalCard />
      <LoadingLatestArrivalCard />
      <LoadingLatestArrivalCard />
      <LoadingLatestArrivalCard />
    </Grid>
  );
}
