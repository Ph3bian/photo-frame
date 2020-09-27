import React from 'react';
import { render } from '@testing-library/react';
import Home from './home'

test('render "Upload Image" in DOM', () => {
  const { getByText } = render(<Home />);
  const HeaderElement = getByText(/Upload Image/i);
  expect( HeaderElement).toBeInTheDocument();
});

