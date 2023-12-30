import '@testing-library/jest-dom';
import { render } from '@testing-library/react';

import Page from '@/app/(routes)/search/[category]/page';

describe('Category Page', () => {
  it('renders with no errors', async () => {
    render(await Page({ params: { category: '' }, searchParams: { sort: '' } }));
  });
});
