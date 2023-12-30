import '@testing-library/jest-dom';
import { render } from '@testing-library/react';

import Page, { ProductPageProps } from '@/app/(routes)/product/[product]/page';

const productPageProps: ProductPageProps = {
  params: { product: 'Mug' },
  searchParams: { color: '', size: '' },
};

describe('Product Page', () => {
  it('renders with no errors', async () => {
    render(await Page(productPageProps));
  });
});
