import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

import Page from '@/app/(routes)/search/page';

describe('Search Page', () => {
  it('Renders list of products', async () => {
    render(await Page({ searchParams: {} }));
    const productList = screen.getByRole('list');
    const productCards = screen.getAllByRole('listitem');
    expect(productList).toBeInTheDocument();
    expect(productCards.length).toBeGreaterThan(0);
  });
  it('Renders an empty list of products', async () => {
    const q = 'Product that doesnt exist';
    render(await Page({ searchParams: { q: q } }));
    const noResultsParagraph = screen.getByText(`There are no listings for your search`, { exact: false });
    expect(noResultsParagraph).toBeInTheDocument();
  });
  it('Renders an existing product', async () => {
    const q = 'Mug';
    render(await Page({ searchParams: { q: q } }));
    const productList = screen.getByRole('list');
    const productCards = screen.getAllByRole('listitem');
    expect(productList).toBeInTheDocument();
    expect(productCards.length).toBe(1);
  });
});
