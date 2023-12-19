import { Color } from '@prisma/client';
import Image from 'next/image';

export function FastMarquee({ frames }: { frames: Color[] }) {
  return (
    <div className="flex select-none gap-x-4 overflow-hidden">
      <ul className="animate-marquee-fast flex min-w-full shrink-0 justify-around gap-x-4">
        {frames?.map((frame) => {
          return <MarqueFrame key={frame.id} frame={frame} />;
        })}
      </ul>

      <ul className="animate-marquee-fast flex min-w-full shrink-0 justify-around gap-x-4" aria-hidden="true">
        {frames?.map((frame) => {
          return <MarqueFrame key={frame.id} frame={frame} />;
        })}
      </ul>
    </div>
  );
}

export function SlowMarquee({ frames }: { frames: Color[] }) {
  return (
    <div className="flex select-none gap-x-4 overflow-hidden">
      <ul className="animate-marquee-slow flex min-w-full shrink-0 justify-around gap-x-4">
        {frames.map((frame) => {
          return <MarqueFrame key={frame.id} frame={frame} />;
        })}
      </ul>

      <ul className="animate-marquee-slow flex min-w-full shrink-0 justify-around gap-x-4" aria-hidden="true">
        {frames.map((frame) => {
          return <MarqueFrame key={frame.id} frame={frame} />;
        })}
      </ul>
    </div>
  );
}

function MarqueFrame({ frame }: { frame: Color }) {
  return (
    <div className="relative aspect-square rounded-md bg-gray-100 dark:bg-gray-700">
      <Image fill src={frame.image} alt={frame.altText} className="object-cover object-center" sizes="30vw" />
    </div>
  );
}
