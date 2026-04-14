import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the core portfolio sections', () => {
  render(<App />);
  expect(screen.getByRole('heading', { name: /experience/i })).toBeInTheDocument();
  expect(screen.getByRole('heading', { name: /frontend, cms & workflow/i })).toBeInTheDocument();
  expect(screen.getByRole('heading', { name: /client & product work/i })).toBeInTheDocument();
  expect(screen.getByRole('heading', { name: /contact us/i })).toBeInTheDocument();
});
