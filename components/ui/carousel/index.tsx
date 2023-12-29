import Link from 'next/link';

import { Color } from '@prisma/client';
import Image from 'next/image';
import { ProductWithColor } from '../../../lib/api';

export function Carousel({ products, ariaLabelledBy }: { products: ProductWithColor[]; ariaLabelledBy: string }) {
  return (
    <article aria-labelledby={ariaLabelledBy} className="w-full overflow-x-auto">
      <ul className="flex h-full gap-4">
        {products.map((product) => {
          return <CarouselFrame key={product.id} colors={product.colors} name={product.name} slug={product.slug} />;
        })}
      </ul>
    </article>
  );
}

function CarouselFrame({ colors, name, slug }: { colors: Color[]; name: string; slug: string }) {
  return (
    <>
      {colors.map((color) => {
        return (
          <li className="relative aspect-square w-1/5 flex-none snap-center md:w-1/4" key={color.id}>
            <div className="relative inline-block h-full w-full bg-gray-100 dark:bg-gray-700">
              <Link href={`/product/${slug}?color=${color.value}`} className="relative h-full w-full">
                <div className="group flex h-full w-full items-center justify-center overflow-hidden rounded-lg border bg-white dark:bg-black">
                  <Image
                    src={color.image}
                    alt={color.altText}
                    fill
                    sizes="20vw"
                    className="object-cover object-center"
                  />
                </div>
              </Link>
            </div>
          </li>
        );
      })}
    </>
  );
}
