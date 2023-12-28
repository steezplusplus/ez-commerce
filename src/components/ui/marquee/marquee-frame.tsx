import Image from 'next/image';
import Link from 'next/link';

import { ProductModalDisclosure } from 'components/layout/search/product-list/product-modal-disclosure'; // TODO Move Modal components
import { ProductWithColor } from 'lib/api';

// TODO Wrong `sizes` attribute on <Image />
export function MarqueeFrame({ product }: { product: ProductWithColor }) {
  const { colors, slug } = product;

  return (
    <>
      {colors.map((color) => {
        const href = `/product/${slug}?color=${color.value}`;
        return (
          <li
            key={color.id}
            className="
              relative
              mx-2
              h-24
              w-24
              overflow-hidden
              rounded-md
              sm:h-48
              sm:w-48
            "
          >
            <Link href={href} className="relative h-full w-full">
              <div
                className="
                  group/image relative aspect-square 
                  rounded-md bg-gray-100
                  dark:bg-gray-700
                "
              >
                <Image
                  src={color.image}
                  alt={color.altText}
                  fill
                  sizes="33vw"
                  className="aspect-square rounded-md object-cover"
                />
                <div className="absolute bottom-0 w-full opacity-0 transition group-hover/image:opacity-100">
                  <ProductModalDisclosure product={product} />
                </div>
              </div>
            </Link>
          </li>
        );
      })}
    </>
  );
}
