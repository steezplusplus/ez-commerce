import Image from 'next/image';
import Link from 'next/link';

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
                  group
                  flex
                  h-full
                  w-full
                  items-center
                  justify-center
                  overflow-hidden
                  rounded-lg
                  border
                  bg-white
                  dark:bg-black
                "
              >
                <Image src={color.image} alt={color.altText} fill sizes="33vw" className="object-cover object-center" />
                {/* TODO Modal Disclosure */}
              </div>
            </Link>
          </li>
        );
      })}
    </>
  );
}
