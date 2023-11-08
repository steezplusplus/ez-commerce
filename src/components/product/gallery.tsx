import Image from 'next/image';

type GalleryProps = {
  images: string[];
};

// TODO Alt text
// TODO if images.length > 1 show rest of images
export function Gallery(props: GalleryProps) {
  const { images } = props;

  if (images.length === 0) {
    return (
      <div className="flex aspect-square h-full max-h-[550px] w-full items-center justify-center overflow-hidden">
        <p>No images found for this product.</p>
      </div>
    );
  }

  return (
    <div className="relative aspect-square h-full max-h-[550px] w-full overflow-hidden">
      <Image
        className="h-full w-full object-contain"
        fill
        sizes="(min-width: 1024px) 66vw, 100vw"
        alt="TODO"
        src={images[0] as string}
        priority={true}
      />
    </div>
  );
}
