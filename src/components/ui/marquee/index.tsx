import { Color } from '@prisma/client';
import { ProductWithColor } from 'lib/api';
import Image from 'next/image';

export function Marquee({ products }: { products: ProductWithColor[] }) {
  return (
    <article className="flex w-full overflow-hidden whitespace-nowrap">
      <div className="relative">
        <ul className="flex animate-marquee">
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
        <ul className="absolute top-0 flex animate-marquee2">
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

// TODO Show product color.name, product.name, product.price on hover.
// TODO On click route to product page with color in query params.
function MarqueeFrame({ colors, price, name, slug }: { colors: Color[]; price: number; name: string; slug: string }) {
  const manyColors = [...colors, ...colors, ...colors];
  return (
    <>
      {manyColors.map((color) => {
        return (
          <li key={color.id} className="relative mx-2 h-24 w-24 overflow-hidden rounded-md sm:h-48 sm:w-48">
            <Image src={color.image} alt={color.altText} fill sizes="33vw" className="object-cover object-center" />
          </li>
        );
      })}
    </>
  );
}
