import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import Loader from '.';
import MockProvider from 'src/helpers/test/MockProvider';

it('should have animation', () => {
  render(
    <MockProvider>
      <Loader />
    </MockProvider>
  );
  const loader = screen.getByTestId('loader');
  expect(loader).toBeInTheDocument();
});
