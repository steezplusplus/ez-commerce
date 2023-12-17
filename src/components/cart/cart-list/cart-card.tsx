import Link from 'next/link';

import { CartProduct } from 'hooks/use-cart';
import { CartImage, LoadingCartImage } from './cart-image';
import { CartInfo, LoadingCartInfo } from './cart-info';

export function CartCard({ cartProduct }: { cartProduct: CartProduct }) {
  const href = `/product/${cartProduct.productSlug}?color=${cartProduct.colorValue}&size=${cartProduct.sizeValue}`;

  return (
    <li className="flex border-b border-neutral-200 py-6 first:pt-0 dark:border-neutral-800">
      <Link href={href}>
        <CartImage src={cartProduct.colorImage} alt={cartProduct.colorAltText} />
      </Link>
      <CartInfo cartProduct={cartProduct} />
    </li>
  );
}

export function LoadingCartCard() {
  return (
    <li className="flex border-b border-neutral-200 py-6 first:pt-0 dark:border-neutral-800">
      <LoadingCartImage />
      <LoadingCartInfo />
    </li>
  );
}
