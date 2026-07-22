import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the game entry point', () => {
  render(<App />);
  expect(screen.getByText('找到你靈魂中的稀有植物')).toBeInTheDocument();
  expect(screen.getByText('開始探索')).toBeInTheDocument();
});
