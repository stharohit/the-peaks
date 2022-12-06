import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import Container from '.';
import MockProvider from 'src/helpers/test/MockProvider';

it('should render', () => {
  render(
    <MockProvider>
      <Container />
    </MockProvider>
  );
  const container = screen.getByRole('main');
  expect(container).toHaveStyle(
    'padding-left: 12px; padding-right: 12px; margin-left: auto; margin-right: auto;'
  );
});
