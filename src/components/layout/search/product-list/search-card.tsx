import Link from 'next/link';

import { Price } from 'components/ui/price';
import { Product } from 'lib/types';
import { ProductImage } from './product-image';

export function ProductCard({ product }: { product: Product }) {
  const { id, name, slug, handle, image, altText, price } = product;

  const href = `/product/${slug}?color=${handle}`;

  return (
    <li key={id} className="group">
      <Link href={href} className="h-full w-full">
        <ProductImage altText={altText} image={image} />
        <ProductInfo name={name} price={price} />
      </Link>
    </li>
  );
}

function ProductInfo({ name, price }: { name: string; price: number }) {
  return (
    <div>
      <p className="text-lg font-semibold group-hover:underline">{name}</p>
      <span className="text-sm text-gray-500">
        <Price amount={String(price)} />
      </span>
    </div>
  );
}
