import Link from 'next/link';

import { CartItem } from 'hooks/use-cart';
import { CartImage } from './cart-image';
import { CartInfo } from './cart-info';

// TODO Add slug to CartItem so I can link back to the product
export function CartCard({ cartItem }: { cartItem: CartItem }) {
  return (
    <li className="flex aspect-auto">
      <Link href={`/`}>
        <CartImage src={cartItem.image} alt={cartItem.altText} />
      </Link>
      <CartInfo cartItem={cartItem} />
    </li>
  );
}
