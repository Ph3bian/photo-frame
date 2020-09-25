import React from 'react';
import { render } from '@testing-library/react';
import Home from './home'

test('renders learn react link', () => {
  const { getByText } = render(<Home />);
  const linkElement = getByText(/Upload Image/i);
  expect(linkElement).toBeInTheDocument();
});
