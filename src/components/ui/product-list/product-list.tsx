import { Product } from 'lib/types';
import { ProductCard } from './product-card';

type ProductListProps = {
  products: Product[];
};

export function ProductList(props: ProductListProps) {
  const { products } = props;
  return (
    <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {products.map((product, i) => (
        <ProductCard product={product} key={`${product.id}-${i}`} />
      ))}
    </ul>
  );
}
