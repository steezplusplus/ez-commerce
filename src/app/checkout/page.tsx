import { Footer } from 'components/layout/footer/footer';
import { Suspense } from 'react';

// TODO Get items from localstorage
export default function CheckoutPage() {
  return (
    <>
      <div className="mx-auto min-h-screen max-w-screen-2xl px-4">
        <h2 className="text-4xl font-semibold">Checkout</h2>
      </div>
      <Suspense>
        <Footer />
      </Suspense>
    </>
  );
}
