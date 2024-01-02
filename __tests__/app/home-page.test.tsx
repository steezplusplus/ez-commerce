import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

import Page from '@/app/(routes)/page';

describe('Home Page', () => {
  it('renders expected elements', async () => {
    render(await Page());
    const marqueeh2 = screen.getByRole('heading', { level: 2, name: 'Build your dream closet' });
    const marqueeh3 = screen.getByRole('heading', { level: 3, name: '& inspire your next style' });
    expect(marqueeh2).toBeInTheDocument();
    expect(marqueeh3).toBeInTheDocument();
  });
});
