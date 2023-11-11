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

export function ProductCell({ products }: { products: Product[] }) {
  return (
    <>
      {products.map((product) => (
        <GridItem key={product.id} className="animate-fadeIn">
          <Link className="relative inline-block h-full w-full" href={`/product/${product.slug}`}>
            <Image
              alt="todo"
              src={product.images[0] ?? ''}
              fill
              sizes="(min-width: 768px) 33vw, (min-width: 640px) 50vw"
            />
            <div className="absolute bottom-0 left-0 p-1 text-sm text-black backdrop-blur-sm dark:text-white">
              <h3 className="leading-non line-clamp-2 tracking-tight">{product.name}</h3>
              <Price amount={String(product.price)} />
            </div>
          </Link>
        </GridItem>
      ))}
    </>
  );
}
