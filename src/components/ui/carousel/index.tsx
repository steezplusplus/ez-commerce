import { Color } from '@prisma/client';

export function Carousel({ frames }: { frames: Color[] }) {
  return (
    <div className="w-full overflow-x-auto">
      <ul className="flex h-full gap-4 pl-2">
        {frames.map((frame) => {
          return <CarouselFrame key={frame.id} frame={frame} />;
        })}
      </ul>
    </div>
  );
}

function CarouselFrame({ frame }: { frame: Color }) {
  return (
    <li className="relative aspect-square w-1/5 flex-none snap-center md:w-1/4">
      <div className="relative inline-block h-full w-full bg-gray-100 dark:bg-gray-700">
        <div className="relative h-full w-full object-contain">{frame.name}</div>
      </div>
    </li>
  );
}
