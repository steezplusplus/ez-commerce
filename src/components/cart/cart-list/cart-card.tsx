import Link from 'next/link';

import { CartItem } from 'hooks/use-cart';
import { CartImage } from './cart-image';
import { CartInfo } from './cart-info';

export function CartCard({ cartItem }: { cartItem: CartItem }) {
  return (
    <li className="flex aspect-auto">
      <Link href={`/product/${cartItem.slug}?color=${cartItem.colorValue}&size=${cartItem.sizeValue}`}>
        <CartImage src={cartItem.image} alt={cartItem.altText} />
      </Link>
      <CartInfo cartItem={cartItem} />
    </li>
  );
}
