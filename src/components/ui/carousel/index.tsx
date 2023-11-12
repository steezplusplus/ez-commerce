// import Image from 'next/image';
import Image from 'next/image';
import Link from 'next/link';

type CarouselProps = {
  items: {
    id: string;
    name: string;
    value: string;
    image: string;
    altText: string;
    productName: string;
    productSlug: string;
    price: number;
  }[];
};

export function Carousel(props: CarouselProps) {
  const { items } = props;

  return (
    <div className="w-full overflow-x-auto">
      <ul className="flex gap-4">
        {items.map((item) => {
          return (
            <li
              className="relative aspect-square h-[30vh] max-h-[275px] w-2/3 max-w-[475px] flex-none snap-center first:pl-2 last:pr-2 md:w-1/3"
              key={item.id}
            >
              <Link href={`/product/${item.productSlug}`} className="relative h-full w-full">
                <div className="group relative flex h-full w-full items-center justify-center overflow-hidden rounded-lg border border-neutral-200 bg-white hover:border-blue-600 dark:border-neutral-800 dark:bg-black">
                  <Image
                    fill
                    sizes="(min-width: 1024px) 25vw, (min-width: 768px) 33vw, 50vw"
                    className="relative h-full w-full object-contain transition duration-300 ease-in-out group-hover:scale-105"
                    src={item.image}
                    alt={item.altText}
                  />
                </div>
                <div className="absolute bottom-2 left-2">
                  <h3>{item.productName}</h3>
                </div>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
