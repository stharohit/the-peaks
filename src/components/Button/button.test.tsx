import { fireEvent, render, screen } from '@testing-library/react';
import Button from '.';
import MockProvider from 'src/helpers/test/MockProvider';

describe('Test button', () => {
  const mockClick = jest.fn();

  beforeEach(() => {
    render(
      <MockProvider>
        <Button onClick={mockClick}>click</Button>
      </MockProvider>
    );
  });

  it('should render text click', () => {
    const btn = screen.getByRole('button');
    expect(btn.textContent).toEqual('click');
  });

  it('should trigger click event', () => {
    const btn = screen.getByRole('button');
    fireEvent.click(btn);
    expect(mockClick).toHaveBeenCalledTimes(1);
  });
});
