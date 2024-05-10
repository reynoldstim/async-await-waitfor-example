import { render, fireEvent, screen, waitFor } from '@testing-library/react';
import { describe, expect, it} from 'vitest';
import App from './App';

describe('App', () => {
  // This test will pass, even though the functionality is broken. What's wrong?
  it('reverses entered text and displays reversed text to user', () => {
    // arrange
    render(<App />);
    const input = screen.getByPlaceholderText('Enter text...');
    const reverseButton = screen.getByText('Reverse!');

    // act
    fireEvent.change(input, { target: { value: 'hello' } }); 
    fireEvent.click(reverseButton);

    // assert
    waitFor(() => {
      expect(screen.getByText('olleh')).toBeInTheDocument();
    });
  });
});