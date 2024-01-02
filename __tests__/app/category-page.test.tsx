import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

import Page, { CategoryPageProps } from '@/app/(routes)/search/[category]/page';

// TODO Sort by
describe('Category Page', () => {
  it('Renders every product in a category', async () => {
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
  it('Renders no products in an empty category', async () => {
    const categoryPageProps: CategoryPageProps = {
      params: { category: 'Sale' },
      searchParams: { sort: '' },
    };
    render(await Page(categoryPageProps));
    const noResultsParagraph = screen.getByText('No products found in this category.');
    expect(noResultsParagraph).toBeInTheDocument();
  });
});
