import '@testing-library/jest-dom/extend-expect';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import React, { useState } from 'react';
import useDebounce from './useDebounce';

jest.useFakeTimers();

const DELAY = 1000;

const Input = () => {
  const [value, setValue] = useState<string>('');
  const debouncedValue = useDebounce(value, DELAY);

  return (
    <input
      value={debouncedValue}
      onChange={(e) => setValue(e.target.value)}
      placeholder="input-placeholder"
    />
  );
};

it('should delay the change of typed value', async () => {
  render(<Input />);
  const input = screen.getByPlaceholderText(
    'input-placeholder'
  ) as HTMLInputElement;
  expect(input).toBeInTheDocument();

  fireEvent.change(input, { target: { value: '123' } });
  expect(input.value).not.toBe('123');

  await waitFor(() => expect(input.value).toBe('123'), { timeout: DELAY + 1 });
});
