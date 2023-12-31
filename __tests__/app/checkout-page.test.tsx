import '@testing-library/jest-dom';
import { render } from '@testing-library/react';

import Page from '@/app/(routes)/checkout/page';

describe('Checkout Page', () => {
  it('renders with no errors', () => {
    render(<Page />);
  });
});
