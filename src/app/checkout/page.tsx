import { Suspense } from 'react';

import { CartGrid } from 'components/checkout/cart-grid';
import { Footer } from 'components/layout/footer/footer';

export default function CheckoutPage() {
  return (
    <>
      <div className="mx-auto min-h-screen max-w-screen-2xl px-4">
        <div className="mb-8 space-y-4 px-4">
          <h2 className="text-4xl font-semibold">Checkout</h2>
          <CartGrid />
          <button className="w-full rounded-sm border p-2">Purchase</button>
        </div>
      </div>
      <Suspense>
        <Footer />
      </Suspense>
    </>
  );
}
