import { Suspense } from 'react';

import { CartGrid } from 'components/checkout/cart-grid';
import { Container } from 'components/container/container';
import { Footer } from 'components/layout/footer';

export default function CheckoutPage() {
  return (
    <>
      <Container className="px-4">
        <div className="mb-8 space-y-4 px-4">
          <h2 className="text-4xl font-semibold">Checkout</h2>
          <CartGrid />
          <button className="w-full rounded-sm border p-2">Purchase</button>
        </div>
      </Container>
      <Suspense>
        <Footer />
      </Suspense>
    </>
  );
}
