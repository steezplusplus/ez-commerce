import Image from 'next/image';
import Link from 'next/link';

import { Product } from 'lib/types';

type ProductCardProps = {
  product: Product;
};

export function ProductCard(props: ProductCardProps) {
  const { product } = props;
  return (
    <li key={product.id}>
      <Link href={`/product/${product.slug}?color=${product.handle}`} className="h-full w-full">
        <div className="relative aspect-square rounded-md bg-gray-100 dark:bg-gray-700">
          <Image
            fill
            alt={product.altText}
            src={product.image}
            className="aspect-square rounded-md object-cover"
            sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
          />
        </div>
      </Link>
    </li>
  );
}