import Image from 'next/image';

type GalleryProps = {
  images: {
    id: string;
    src: string;
    alt: string;
    name: string;
    value: string;
  }[];
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
    <div className="flex flex-col gap-y-4">
      {images.map((image) => {
        return (
          <div key={image.id} className="relative aspect-square">
            <Image
              src={image.src}
              alt={image.alt}
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
