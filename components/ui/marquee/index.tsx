import { MarqueeFrame } from '@/components/ui/marquee/marquee-frame';
import { ProductWithColor } from '@/lib/api';

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
        <ul className="flex motion-safe:animate-marquee-slow">
          {products.map((product) => {
            return <MarqueeFrame product={product} key={product.id} />;
          })}
        </ul>
        <ul className="absolute top-0 flex motion-safe:animate-marquee-slow2">
          {products.map((product) => {
            return <MarqueeFrame product={product} key={product.id} />;
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
        <ul className="flex motion-safe:animate-marquee-fast">
          {products.map((product) => {
            return <MarqueeFrame product={product} key={product.id} />;
          })}
        </ul>
        <ul className="absolute top-0 flex motion-safe:animate-marquee-fast2">
          {products.map((product) => {
            return <MarqueeFrame product={product} key={product.id} />;
          })}
        </ul>
      </div>
    </article>
  );
}
