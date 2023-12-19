import { Color } from '@prisma/client';
import Image from 'next/image';

export function FastMarquee({ frames }: { frames?: Color[] }) {
  return (
    <div className="flex select-none gap-x-4 overflow-hidden">
      <ul className="animate-marquee-fast flex min-w-full shrink-0 justify-around gap-x-4">
        <li>Item 1</li>
        <li>Item 2</li>
        <li>Item 3</li>
        <li>Item 4</li>
      </ul>

      <ul className="animate-marquee-fast flex min-w-full shrink-0 justify-around gap-x-4" aria-hidden="true">
        <li>display only 1</li>
        <li>display only 2</li>
        <li>display only 3</li>
        <li>display only 4</li>
      </ul>
    </div>
  );
}

export function SlowMarquee({ frames }: { frames?: Color[] }) {
  return (
    <div className="flex select-none gap-x-4 overflow-hidden">
      <ul className="animate-marquee-slow flex min-w-full shrink-0 justify-around gap-x-4">
        <li>Item 1</li>
        <li>Item 2</li>
        <li>Item 3</li>
        <li>Item 4</li>
      </ul>

      <ul className="animate-marquee-slow flex min-w-full shrink-0 justify-around gap-x-4" aria-hidden="true">
        <li>display only 1</li>
        <li>display only 2</li>
        <li>display only 3</li>
        <li>display only 4</li>
      </ul>
    </div>
  );
}

function MarqueFrame({ frame }: { frame?: Color }) {
  return (
    <Image
      fill
      src={frame?.image || ''}
      alt={frame?.altText || ''}
      className="object-cover object-center"
      sizes="30vw"
    />
  );
}
