import { render, screen } from '@testing-library/react';
import App from './App';

test('renders landing page', () => {
  render(<App />);
  const linkElement = screen.getByText(/Hello, I am Thomas!/i);
  expect(linkElement).toBeInTheDocument();
});
