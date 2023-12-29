import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import Page from '../app/(routes)/page';

describe('Home page', () => {
  it('renders with no errors', async () => {
    await act(async () => {
      render(await Page());
    });
  });
});
