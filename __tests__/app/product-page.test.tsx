import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

import Page, { ProductPageProps } from '@/app/(routes)/product/[product]/page';

const productPageProps: ProductPageProps = {
  params: { product: 'Mug' },
  searchParams: { color: '', size: '' },
};

// TODO Test selecting color and size updates params.
// TODO Test "add to cart" btn
describe('Product Page', () => {
  it('Renders expected elements', async () => {
    render(await Page(productPageProps));
    // TODO Color, size, description.
    const productName = screen.getByRole('heading', { level: 2 });
    const productPrice = screen.getByRole('heading', { level: 4 });
    const addToCartBtn = screen.getByRole('button', { name: 'Add To Cart' });
    expect(productName).toBeInTheDocument();
    expect(productPrice).toBeInTheDocument();
    expect(addToCartBtn).toBeInTheDocument();
  });
});
