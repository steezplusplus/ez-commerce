'use client';

import { Price } from 'components/ui/price';
import { useCart } from 'hooks/use-cart';
import { CartCheckoutButton } from '../cart-checkout-button';

// TODO Redo component architecture. The only part of this that needs the cart is the <Price> cmomponent.?
// TODO Not mounted logic missing. See the loding ui in browser, see its wgon. Price and Checkout butotn share the same loading square
export function CartSummary() {
  const cart = useCart();

  const totalPrice = cart.items.reduce((sum, item) => {
    return (sum += Number(item.price));
  }, 0);

  return (
    <div
      className="
        rounded-lg border px-4 py-6 sm:p-6 md:sticky md:top-10 lg:col-span-5
        lg:mt-0 lg:p-8
      "
    >
      <h2 className="mb-6 text-lg font-medium">Order summary</h2>
      <div className="border-t py-4">
        <div className="mb-1 font-medium">Order total</div>
        <h3 className="text-lg font-medium">
          <Price amount={String(totalPrice)} />
        </h3>
      </div>
      <CartCheckoutButton />
    </div>
  );
}
