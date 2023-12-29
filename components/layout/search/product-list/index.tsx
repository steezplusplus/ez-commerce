import { ProductCard } from '@/components/layout/search/product-list/product-card';
import { Grid } from '@/components/ui/grid';
import { ProductWithColor } from '@/lib/api';

export function ProductList({ products }: { products: ProductWithColor[] }) {
  return (
    <Grid className="grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {products.map((product) => (
        <ProductCard product={product} key={product.id} />
      ))}
    </Grid>
  );
}
