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

// TODO Should link to the product page with the color already selected
export function Carousel(props: CarouselProps) {
  const { items } = props;

  return (
    <div className="w-full overflow-x-auto">
      <ul className="flex h-full gap-4">
        {items.map((item) => {
          return (
            <li
              className="relative aspect-square w-1/5 flex-none snap-center first:pl-2 last:pr-2 md:w-1/4"
              key={item.id}
            >
              <Link href={`/product/${item.productSlug}`} className="group relative inline-block h-full w-full">
                <Image
                  fill
                  sizes="(min-width: 1024px) 25vw, (min-width: 768px) 20vw"
                  className="relative h-full w-full object-contain transition duration-300 ease-in-out group-hover:scale-105"
                  src={item.image}
                  alt={item.altText}
                />
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
