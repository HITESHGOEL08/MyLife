import React from 'react';
import { render, screen } from '@testing-library/react';
import TempApp from '../TempApp';


test('renders learn react link', () => {
  render(<TempApp />);
  const linkElement = screen.getByText(/Site Under Process/i);
  expect(linkElement).toBeInTheDocument();
});
