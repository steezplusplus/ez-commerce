import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

import Page from '@/app/(routes)/page';

describe('Home Page', () => {
  it('renders expected elements', async () => {
    render(await Page());
    const Marqueeh2 = screen.getByText('Build your dream closet');
    const Marqueeh3 = screen.getByText('& inspire your next style');
    expect(Marqueeh2).toBeInTheDocument();
    expect(Marqueeh3).toBeInTheDocument();
  });
});
