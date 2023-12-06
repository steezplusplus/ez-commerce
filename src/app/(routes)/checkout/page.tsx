import { Suspense } from 'react';

import { CartGrid } from 'components/cart/cart-grid';
import { CartSummary } from 'components/cart/cart-summary';
import { CheckoutButton } from 'components/checkout/checkout-button';
import { Footer } from 'components/layout/footer';
import { Container } from 'components/ui/container';

export const metadata = {
  title: 'Checkout',
};

export default function CheckoutPage() {
  return (
    <>
      <Container className="px-4 pb-4">
        <div className="mb-8 space-y-4 px-4">
          <h2 className="text-4xl font-semibold">Checkout</h2>
          <CartGrid />
          <CartSummary />
          <CheckoutButton />
        </div>
      </Container>
      <Suspense>
        <Footer />
      </Suspense>
    </>
  );
}
