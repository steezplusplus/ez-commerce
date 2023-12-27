import { ProductWithColor } from 'lib/api';
import { MarqueeFrame } from './marquee-frame';

export function SlowMarquee({ products }: { products: ProductWithColor[] }) {
  return (
    <article
      className="
        pause-animations-on-hover
        flex w-full
        overflow-hidden
        whitespace-nowrap
      "
    >
      <div className="relative">
        <ul className="motion-safe:animate-marquee-slow flex">
          {products.map((product) => {
            return <MarqueeFrame colors={product.colors} name={product.name} key={product.id} slug={product.slug} />;
          })}
        </ul>
        <ul className="motion-safe:animate-marquee-slow2 absolute top-0 flex">
          {products.map((product) => {
            return <MarqueeFrame colors={product.colors} name={product.name} key={product.id} slug={product.slug} />;
          })}
        </ul>
      </div>
    </article>
  );
}

export function FastMarquee({ products }: { products: ProductWithColor[] }) {
  return (
    <article
      className="
        pause-animations-on-hover
        flex w-full
        overflow-hidden
        whitespace-nowrap
      "
    >
      <div className="relative">
        <ul className="motion-safe:animate-marquee-fast flex">
          {products.map((product) => {
            return <MarqueeFrame colors={product.colors} name={product.name} key={product.id} slug={product.slug} />;
          })}
        </ul>
        <ul className="motion-safe:animate-marquee-fast2 absolute top-0 flex">
          {products.map((product) => {
            return <MarqueeFrame colors={product.colors} name={product.name} key={product.id} slug={product.slug} />;
          })}
        </ul>
      </div>
    </article>
  );
}
