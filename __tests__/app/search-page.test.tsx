import '@testing-library/jest-dom';
import { render } from '@testing-library/react';

import Page from '@/app/(routes)/search/page';

describe('Search Page', () => {
  it('renders with no errors', async () => {
    render(await Page({ searchParams: { q: '', sort: '' } }));
  });
});
