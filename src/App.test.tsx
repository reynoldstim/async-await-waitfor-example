import { render, fireEvent, screen, waitFor } from '@testing-library/react';
import { describe, expect, it, vi, afterEach } from 'vitest';
import App from './App';

describe('App', () => {
  const getItemSpy = vi.spyOn(Storage.prototype, 'getItem')
  const setItemSpy = vi.spyOn(Storage.prototype, 'setItem')

  afterEach(() => {
    localStorage.clear()
    getItemSpy.mockClear()
    setItemSpy.mockClear()
  })

  it('saves input text to local storage.', () => {
    // arrange
    render(<App />);
    const input = screen.getByPlaceholderText('Enter text...');
    const saveButton = screen.getByText('Save');

    //act
    fireEvent.change(input, { target: { value: 'hello' } });
    fireEvent.click(saveButton);

    //assert
    waitFor(() => {
        expect(localStorage.setItem).toHaveBeenCalledWith('inputText', JSON.stringify('hello'));
        console.log("In wait for!")
    });
  });
});