import Image from 'next/image';
import Link from 'next/link';

import { Price } from 'components/ui/price';
import { getCategoryPage } from 'lib/api';
import { sorting } from 'lib/constants';

type CategoryPageProps = {
  params: {
    category: string;
  };
  searchParams?: {
    [key: string]: string | string[] | undefined;
  };
};

// TODO generate metadata
export default async function CategoryPage(props: CategoryPageProps) {
  const { params, searchParams } = props;

  const { sort } = searchParams as { [key: string]: string };
  const sortKey = sorting.find((item) => item.slug === sort);

  const products = await getCategoryPage({ name: params.category, order: sortKey?.order });

  if (products.length === 0) {
    return <p>No products found in this category.</p>;
  }

  return (
    <ul className="grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {products.map((product) => {
        return (
          <li key={product.id}>
            <Link href={`/product/${product.slug}`} className="h-full w-full">
              <div className="relative aspect-square rounded-md bg-gray-100">
                <Image
                  fill
                  alt={product.altText}
                  src={product.image}
                  className="aspect-square rounded-md object-cover"
                  sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw"
                />
              </div>
            </Link>
            <h2>{product.name}</h2>
            <Price amount={String(product.price)} />
          </li>
        );
      })}
    </ul>
  );
}
