import '@testing-library/jest-dom';
import { render } from '@testing-library/react';

import Page from '@/app/(routes)/page';

describe('Home Page', () => {
  it('renders with no errors', async () => {
    render(await Page());
  });
});
