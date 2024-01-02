'use client';

import { ArrowLeft, ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export function Carousel2() {
  return (
    <div className="flex gap-x-4">
      <CarouselPrevious />
      <Carousel2Item />
      <CarouselNext />
    </div>
  );
}

function Carousel2Item() {
  return (
    <Link href="#" className="relative block aspect-square h-24 w-24 rounded-md bg-gray-100 dark:bg-gray-700">
      <Image src="/logo.jpg" alt="logo" fill sizes="33vw" className="aspect-square rounded-md object-cover" />
    </Link>
  );
}

function CarouselNext() {
  return (
    <button onClick={() => console.log('next')}>
      <ArrowRight />
    </button>
  );
}

function CarouselPrevious() {
  return (
    <button onClick={() => console.log('previous')}>
      <ArrowLeft />
    </button>
  );
}
