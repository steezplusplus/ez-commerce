import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

import Page, { ProductPageProps } from '@/app/(routes)/product/[product]/page';

const productPageProps: ProductPageProps = {
  params: { product: 'Mug' },
  searchParams: { color: '', size: '' },
};

describe('Product Page', () => {
  it('Renders expected elements', async () => {
    render(await Page(productPageProps));
    const productName = screen.getByRole('heading', { level: 2 });
    const productColor = screen.getByRole('heading', { level: 3, name: 'Colors' });
    const productSize = screen.getByRole('heading', { level: 3, name: 'Sizes' });
    const productPrice = screen.getByRole('heading', { level: 4 });
    const addToCartBtn = screen.getByRole('button', { name: 'Add To Cart' });
    expect(productName).toBeInTheDocument();
    expect(productColor).toBeInTheDocument();
    expect(productSize).toBeInTheDocument();
    expect(productPrice).toBeInTheDocument();
    expect(addToCartBtn).toBeInTheDocument();
  });
});
