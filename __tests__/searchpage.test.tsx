import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import Page, { SearchPageProps } from '../app/(routes)/search/page';

// TODO How to mock search params?
describe('Search page', () => {
  it('renders with no errors', async () => {
    const searchPageProps: SearchPageProps = { searchParams: { q: 'asd', sort: '' } };

    await act(async () => {
      render(<Page searchParams={searchPageProps.searchParams} />);
    });
  });
});
