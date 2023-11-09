import Image from 'next/image';

type GalleryProps = {
  images: string[];
};

// TODO Alt text
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
    <>
      {images.map((image) => {
        return (
          <div
            key={image}
            className="relative aspect-square h-full max-h-[550px] w-full overflow-hidden"
          >
            <Image
              src={image}
              alt="TODO"
              fill
              className="h-full w-full object-contain"
              sizes="(min-width: 1024px) 66vw, 100vw"
              priority={true}
            />
          </div>
        );
      })}
    </>
  );
}
