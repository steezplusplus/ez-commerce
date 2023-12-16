import Image from 'next/image';

import { Color } from '@prisma/client';

type GalleryProps = {
  colors: Color[];
};

export function Gallery(props: GalleryProps) {
  const { colors } = props;

  if (colors.length === 0) {
    return (
      <div className="flex aspect-square h-full max-h-[550px] w-full items-center justify-center overflow-hidden">
        <p>No images found for this product.</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-y-4">
      {colors.map((color) => {
        return (
          <div key={color.id} className="relative aspect-square rounded-md bg-gray-100 dark:bg-gray-700">
            <Image
              src={color.image}
              alt={color.altText}
              fill
              className="aspect-square rounded-md object-cover"
              sizes="(min-width: 1024px) 66vw, 100vw"
              priority={true}
            />
          </div>
        );
      })}
    </div>
  );
}
