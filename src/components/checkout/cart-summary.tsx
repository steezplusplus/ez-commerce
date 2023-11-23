'use client';

import { Price } from 'components/ui/price';
import { useCart } from 'hooks/use-cart';

export function CartSummary() {
  const cart = useCart();

  const totalPrice = cart.items.reduce((sum, item) => {
    return (sum += Number(item.price));
  }, 0);

  return (
    <div className="rounded-lg border px-4 py-6 sm:p-6 lg:col-span-5 lg:mt-0 lg:p-8">
      <h2 className="text-lg font-medium">Order summary</h2>
      <div className="mt-6 space-y-4">
        <div className="border-t border-gray-200 pt-4">
          <div className="text-base font-medium">Order total</div>
          <Price amount={String(totalPrice)} />
        </div>
      </div>
    </div>
  );
}
