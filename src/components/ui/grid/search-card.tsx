import Link from 'next/link';

import { Price } from 'components/ui/price';
import { Product } from 'lib/types';
import { SearchCardImage } from './search-card-image';

export function SearchCard({ product }: { product: Product }) {
  const { id, name, slug, handle, image, altText, price } = product;

  const href = `/product/${slug}?color=${handle}`;

  return (
    <li key={id} className="group">
      <Link href={href} className="h-full w-full">
        <SearchCardImage altText={altText} image={image} />
        <SearchCardInfo name={name} price={price} />
      </Link>
    </li>
  );
}

function SearchCardInfo({ name, price }: { name: string; price: number }) {
  return (
    <div>
      <p className="text-lg font-semibold group-hover:underline">{name}</p>
      <span className="text-sm text-gray-500">
        <Price amount={String(price)} />
      </span>
    </div>
  );
}
