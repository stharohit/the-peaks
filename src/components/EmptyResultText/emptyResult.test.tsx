import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import EmptyResultText from '.';
import MockProvider from 'src/helpers/test/MockProvider';

it('should have heading with text', () => {
  render(
    <MockProvider>
      <EmptyResultText text="no result" />
    </MockProvider>
  );

  const heading = screen.getByRole('heading');
  expect(heading).toHaveTextContent('no result');
});
