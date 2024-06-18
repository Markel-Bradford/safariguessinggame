import { render, screen } from '@testing-library/react';
import WordGame from './WordGame';
import WordGame from './WordGame';

test('renders learn react link', () => {
  render(<WordGame />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
