import Link from 'next/link';

import { CartItem } from 'hooks/use-cart';
import { CartImage, LoadingCartImage } from './cart-image';
import { CartInfo, LoadingCartInfo } from './cart-info';

// TODO Doesnt show indication of link back to product page
export function CartCard({ cartItem }: { cartItem: CartItem }) {
  const href = `/product/${cartItem.slug}?color=${cartItem.colorValue}&size=${cartItem.sizeValue}`;

  return (
    <li className="flex border-b py-6 first:pt-0">
      <Link href={href}>
        <CartImage src={cartItem.image} alt={cartItem.altText} />
      </Link>
      <CartInfo cartItem={cartItem} />
    </li>
  );
}

export function LoadingCartCard() {
  return (
    <li className="flex border-b py-6 first:pt-0">
      <LoadingCartImage />
      <LoadingCartInfo />
    </li>
  );
}
