import React from 'react';
import { render } from '@testing-library/react';
import Footer from './Footer';

test('renders Footer', () => {
  const { getByText } = render(<Footer />);

  const author = getByText(/Made with ♡ by Fernando Machado/i);
  expect(author).toBeInTheDocument();

  const icons = getByText(/Icons by Good Ware/i)
  expect(icons).toBeInTheDocument();
});
