import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

import Page from '@/app/(routes)/checkout/page';

// const productPrice = screen.getByRole('heading', { level: 4 });
describe('Checkout Page', () => {
  it('Renders expected elements', () => {
    render(<Page />);
    const checkoutHeading = screen.getByRole('heading', { level: 2, name: 'Checkout' });
    const emptyCartHeading = screen.getByRole('heading', { level: 3, name: 'Your cart currently has no products.' });
    const summaryHeading = screen.getByRole('heading', { level: 2, name: 'Order summary' });
    const totalHeading = screen.getByRole('heading', { level: 3, name: 'Order total' });
    const checkoutBtn = screen.getByRole('button', { name: 'Checkout' });
    expect(checkoutHeading).toBeInTheDocument();
    expect(emptyCartHeading).toBeInTheDocument();
    expect(summaryHeading).toBeInTheDocument();
    expect(totalHeading).toBeInTheDocument();
    expect(checkoutBtn).toBeInTheDocument();
  });
});
