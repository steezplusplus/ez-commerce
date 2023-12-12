'use client';

import { Price } from 'components/ui/price';
import { useCart } from 'hooks/use-cart';

export function CartSummary() {
  const cart = useCart();

  const totalPrice = cart.items.reduce((sum, item) => {
    return (sum += Number(item.price));
  }, 0);

  return (
    <div
      className="
        rounded-lg border bg-gray-50 px-4 py-6 sm:p-6 md:sticky md:top-10 lg:col-span-5
        lg:mt-0 lg:p-8
      "
    >
      <h2 className="mb-6 text-lg font-medium">Order summary</h2>
      <div className="border-t pt-4">
        <div className="mb-1 font-medium">Order total</div>
        <h3 className="text-lg font-medium">
          <Price amount={String(totalPrice)} />
        </h3>
      </div>
    </div>
  );
}
