import { ProductWithColor } from 'lib/api';

export function Carousel({ products, ariaLabelledBy }: { products: ProductWithColor[]; ariaLabelledBy: string }) {
  return (
    <article aria-labelledby={ariaLabelledBy} className="w-full overflow-x-auto">
      <ul className="flex h-full gap-4 pl-2">
        {products.map((product) => {
          return <CarouselFrame key={product.id} product={product} />;
        })}
      </ul>
    </article>
  );
}

function CarouselFrame({ product }: { product: ProductWithColor }) {
  return (
    <li className="relative aspect-square w-1/5 flex-none snap-center md:w-1/4">
      <div className="relative inline-block h-full w-full bg-gray-100 dark:bg-gray-700">
        <div className="relative h-full w-full object-contain">{product.name}</div>
      </div>
    </li>
  );
}
