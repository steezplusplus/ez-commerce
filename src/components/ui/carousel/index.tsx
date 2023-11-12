import type { Product } from '@prisma/client';
// import Image from 'next/image';
import Link from 'next/link';

type CarouselProps = {
  products: Product[];
};

// TODO Images
export function Carousel(props: CarouselProps) {
  const { products } = props;

  return (
    <div className="w-full overflow-x-auto">
      <ul className="flex gap-4">
        {products.map((product) => {
          return (
            <li
              className="relative aspect-square h-[30vh] max-h-[275px] w-2/3 max-w-[475px] flex-none snap-center first:pl-2 last:pr-2 md:w-1/3"
              key={product.id}
            >
              <Link href={`/product/${product.slug}`} className="relative h-full w-full">
                <div className="group relative flex h-full w-full items-center justify-center overflow-hidden rounded-lg border border-neutral-200 bg-white hover:border-blue-600 dark:border-neutral-800 dark:bg-black">
                  {/* <Image
                    fill
                    sizes="(min-width: 1024px) 25vw, (min-width: 768px) 33vw, 50vw"
                    className="relative h-full w-full object-contain transition duration-300 ease-in-out group-hover:scale-105"
                    src={product.images[0] as string}
                    alt={`Image of ${product.name}`}
                  /> */}
                </div>
                <div className="absolute bottom-2 left-2">
                  <h3>{product.name}</h3>
                </div>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
