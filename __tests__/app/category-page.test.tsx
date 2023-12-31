import '@testing-library/jest-dom';
import { render } from '@testing-library/react';

import Page, { CategoryPageProps } from '@/app/(routes)/search/[category]/page';

const categoryPageProps: CategoryPageProps = {
  params: { category: 'sale' },
  searchParams: { sort: '' },
};

describe('Category Page', () => {
  it('renders with no errors', async () => {
    render(await Page(categoryPageProps));
  });
});
