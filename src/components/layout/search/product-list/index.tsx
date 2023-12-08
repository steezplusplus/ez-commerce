import { Product } from 'lib/types';
import { ProductCard } from './search-card';

export function ProductList({ products }: { products: Product[] }) {
  return (
    <ul
      className="
        grid grid-cols-1 gap-4
        sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4
      "
    >
      {products.map((product) => (
        <ProductCard product={product} key={product.id} />
      ))}
    </ul>
  );
}
