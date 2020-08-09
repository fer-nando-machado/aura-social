import React from 'react';
import { render } from '@testing-library/react';
import Header from './Header';

test('renders Header title', () => {
  const { getByText } = render(<Header />);
  const title = getByText(/Aura Social/i);
  expect(title).toBeInTheDocument();
});
