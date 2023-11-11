import { Product } from '@prisma/client';
import Image from 'next/image';
import Link from 'next/link';
import { Price } from '../price';

export function Grid(props: React.ComponentProps<'ul'>) {
  return (
    <ul {...props} className={`grid grid-flow-row gap-4 ${props.className ?? ''}`}>
      {props.children}
    </ul>
  );
}

export function GridItem(props: React.ComponentProps<'li'>) {
  return (
    <li {...props} className={`aspect-square transition-opacity ${props.className ?? ''}`}>
      {props.children}
    </li>
  );
}

export function GridItemProduct({ products }: { products: Product[] }) {
  return (
    <>
      {products.map((product) => (
        <GridItem key={product.slug} className="animate-fadeIn">
          <Link className="relative inline-block h-full w-full" href={`/product/${product.slug}`}>
            <GridItemProductImage
              name={product.name}
              alt={`Image of ${product.name}`}
              price={String(product.price)}
              src={product.images[0] ?? ''}
              fill={true}
              sizes="(min-width: 768px) 33vw, (min-width: 640px) 50vw, 100vw"
            />
          </Link>
        </GridItem>
      ))}
    </>
  );
}

export function GridItemProductImage(props: {
  name: string;
  alt: string;
  price: string;
  src: string;
  fill: boolean;
  sizes: string;
}) {
  return (
    <div
      className="
        group flex h-full 
        w-full items-center justify-center 
        overflow-hidden rounded-lg border 
        bg-white dark:bg-black
      "
    >
      <Image alt={props.alt} src={props.src} fill={props.fill} sizes={props.sizes} />
      <div className="absolute bottom-0 left-0 p-1 text-sm text-black backdrop-blur-sm dark:text-white">
        <h3 className="leading-non line-clamp-2 tracking-tight">{props.name}</h3>
        <Price amount={props.price} />
      </div>
    </div>
  );
}
