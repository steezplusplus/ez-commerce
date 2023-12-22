import Image from 'next/image';
import Link from 'next/link';

import { Color } from '@prisma/client';
import { Price } from 'components/ui/price';
import { ProductWithColor } from 'lib/api';

// TODO A11y: Buttons to pause and resume where the user left off
// TODO A11y: a11y attributes
// TODO Feat: Adjustable animation speed
// TODO Feat: Show color name
// TODO Style: Label looks bad while Price loading.

export function Marquee({ products, ariaLabelledBy }: { products: ProductWithColor[]; ariaLabelledBy: string }) {
  return (
    <article aria-labelledby={ariaLabelledBy} className="flex w-full overflow-hidden whitespace-nowrap">
      <div className="relative">
        <ul className="flex motion-safe:animate-marquee">
          {products.map((product) => {
            return (
              <MarqueeFrame
                colors={product.colors}
                name={product.name}
                price={product.price}
                key={product.id}
                slug={product.slug}
              />
            );
          })}
        </ul>
        <ul className="absolute top-0 flex motion-safe:animate-marquee2">
          {products.map((product) => {
            return (
              <MarqueeFrame
                colors={product.colors}
                name={product.name}
                price={product.price}
                key={product.id}
                slug={product.slug}
              />
            );
          })}
        </ul>
      </div>
    </article>
  );
}

function MarqueeFrame({ colors, price, name, slug }: { colors: Color[]; price: number; name: string; slug: string }) {
  return (
    <>
      {colors.map((color) => {
        return (
          <li key={color.id} className="relative mx-2 h-24 w-24 overflow-hidden rounded-md sm:h-48 sm:w-48">
            <Link href={`/product/${slug}?color=${color.value}`} className="relative h-full w-full">
              <div className="group flex h-full w-full items-center justify-center overflow-hidden rounded-lg border bg-white hover:border-blue-600 dark:bg-black">
                <Image src={color.image} alt={color.altText} fill sizes="33vw" className="object-cover object-center" />
                <MarqueeLabel price={price} name={name} />
              </div>
            </Link>
          </li>
        );
      })}
    </>
  );
}

function MarqueeLabel({ price, name }: { price: number; name: string }) {
  return (
    <div className="absolute bottom-0 left-2 hidden w-full px-4 pb-4 group-hover:flex">
      <div className="flex items-center rounded-full border bg-white/70 p-1 px-2 text-xs font-semibold text-black backdrop-blur-md dark:border-neutral-800 dark:bg-black/70 dark:text-white">
        <h3 className="mr-4 line-clamp-2 flex-grow leading-none tracking-tight">{name}</h3>
        <Price amount={String(price)} />
      </div>
    </div>
  );
}
