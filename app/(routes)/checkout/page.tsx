import { CartList } from '../../../components/cart/cart-list';
import { CartSummary } from '../../../components/cart/cart-summary';
import { Container } from '../../../components/ui/container';

export const metadata = {
  title: 'Checkout',
};

export default function CheckoutPage() {
  return (
    <Container className="px-4 pb-4">
      <h2 className="mb-4 text-4xl font-semibold">Checkout</h2>
      <section className="lg:grid lg:grid-cols-12 lg:items-start lg:gap-x-12">
        <CartList />
        <CartSummary />
      </section>
    </Container>
  );
}
