import { CartCheckoutButton } from 'components/cart/cart-checkout-button';
import { CartList } from 'components/cart/cart-list';
import { CartSummary } from 'components/cart/cart-summary'; // TODO Replace
import { Container } from 'components/ui/container';

export const metadata = {
  title: 'Checkout',
};

export default function CheckoutPage() {
  return (
    <Container className="space-y-4 px-4 pb-4">
      <h2 className="mb-4 text-4xl font-semibold">Checkout</h2>
      <CartList />
      <CartSummary />
      <CartCheckoutButton />
    </Container>
  );
}
