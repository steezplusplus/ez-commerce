import Link from 'next/link';

import { GridItem } from 'components/ui/grid';
import { CartItem } from 'hooks/use-cart';
import { CartImage } from './cart-image';
import { CartInfo } from './cart-info';

export function CartCard({ cartItem }: { cartItem: CartItem }) {
  return (
    <GridItem className="flex aspect-auto">
      <Link href="/">
        <CartImage src={cartItem.image} alt={cartItem.altText} />
      </Link>
      <CartInfo cartItem={cartItem} />
    </GridItem>
  );
}
