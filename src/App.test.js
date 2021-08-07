import { render, screen } from '@testing-library/react';
import App from './App';

test('renders pages', () => {
  render(<App />);
  render(<Home />)
});
