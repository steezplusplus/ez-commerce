import Image from 'next/image';

export function CartImage({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="relative h-24 w-24 overflow-hidden rounded-md sm:h-48 sm:w-48">
      <Image fill src={src} alt={alt} className="object-cover object-center" sizes="30vw" />
    </div>
  );
}