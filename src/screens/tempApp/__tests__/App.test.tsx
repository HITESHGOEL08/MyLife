import React from 'react';
import { render, screen } from '@testing-library/react';
import TempApp from '../TempApp';


test('renders learn react link', () => {
  render(<TempApp />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
