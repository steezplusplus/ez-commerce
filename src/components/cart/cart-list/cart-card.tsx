import Link from 'next/link';

import { CartItem } from 'hooks/use-cart';
import { CartImage } from './cart-image';
import { CartInfo } from './cart-info';

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
