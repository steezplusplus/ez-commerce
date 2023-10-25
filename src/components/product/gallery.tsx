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
    <div className="aspect-square h-full max-h-[550px] w-full overflow-hidden">
      {images.map((image) => {
        return <p key={image}>{image}</p>;
      })}
    </div>
  );
}
