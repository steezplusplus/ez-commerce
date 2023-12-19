import { Color } from '@prisma/client';
import Image from 'next/image';

// TODO Use ProductWithColor[] as the type.
// TODO Get new test data with that type
// TODO Show product color.name, product.name, product.price on hover.
// TODO On click route to product page with color in query params.
export function Marquee({ frames }: { frames: Color[] }) {
  const manyFrames = [...frames, ...frames, ...frames];

  return (
    <article className="flex w-full overflow-hidden whitespace-nowrap">
      <div className="relative">
        <ul className="flex animate-marquee">
          {manyFrames.map((frame) => (
            <MarqueeImage key={frame.id} frame={frame} />
          ))}
        </ul>

        <ul className="absolute top-0 flex animate-marquee2">
          {manyFrames.map((frame) => (
            <MarqueeImage key={frame.id} frame={frame} />
          ))}
        </ul>
      </div>
    </article>
  );
}

function MarqueeImage({ frame }: { frame: Color }) {
  return (
    <li className="relative mx-2 h-24 w-24 overflow-hidden rounded-md sm:h-48 sm:w-48">
      <Image src={frame.image} alt={frame.altText} fill sizes="33vw" className="object-cover object-center" />
    </li>
  );
}
