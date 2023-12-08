import { CartGrid } from 'components/cart/cart-grid';
import { CartSummary } from 'components/cart/cart-summary';
import { CheckoutButton } from 'components/checkout/checkout-button';
import { Container } from 'components/ui/container';
import { AlertTriangle } from 'lucide-react';

export const metadata = {
  title: 'Checkout',
};

export default function CheckoutPage() {
  return (
    <>
      <Container className="px-4 pb-4">
        <div className="mb-8 space-y-4 px-4">
          <h2 className="text-4xl font-semibold">Checkout</h2>
          <div className="flex items-center rounded-md border p-2">
            <AlertTriangle className="mr-2" />
            <p className="text-lg">This is just a demo site.</p>
          </div>
          <CartGrid />
          <CartSummary />
          <CheckoutButton />
        </div>
      </Container>
    </>
  );
}
