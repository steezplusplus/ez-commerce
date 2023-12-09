import Image from 'next/image';
import { ProductModalDisclosure } from './product-modal-disclosure';

export function ProductImage({ image, altText }: { image: string; altText: string }) {
  return (
    <div
      className="
        group/image relative aspect-square 
        rounded-md bg-gray-100
        dark:bg-gray-700
      "
    >
      <Image
        fill
        alt={altText}
        src={image}
        className="aspect-square rounded-md object-cover"
        sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
      />
      <div className="absolute bottom-0 w-full opacity-0 transition group-hover/image:opacity-100 ">
        <ProductModalDisclosure />
      </div>
    </div>
  );
}
