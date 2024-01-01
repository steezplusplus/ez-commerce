import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

import Page, { CategoryPageProps } from '@/app/(routes)/search/[category]/page';

describe('Category Page', () => {
  it('Renders products in category', async () => {
    const categoryPageProps: CategoryPageProps = {
      params: { category: 'Tops' },
      searchParams: { sort: '' },
    };

    render(await Page(categoryPageProps));
    const productList = screen.getByRole('list');
    const productCards = screen.getAllByRole('listitem');
    expect(productList).toBeInTheDocument();
    expect(productCards.length).toBeGreaterThan(0);
  });
  it('Renders category with no products', async () => {
    const categoryPageProps: CategoryPageProps = {
      params: { category: 'Sale' },
      searchParams: { sort: '' },
    };
    render(await Page(categoryPageProps));
    const noResultsParagraph = screen.getByText('No products found in this category.');
    expect(noResultsParagraph).toBeInTheDocument();
  });
});
