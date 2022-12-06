import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import MockProvider from 'src/helpers/test/MockProvider';
import SectionTitle from '.';

it('should render heading with text', () => {
  render(
    <MockProvider>
      <SectionTitle>section title</SectionTitle>
    </MockProvider>
  );

  const title = screen.getByRole('heading');
  expect(title).toBeInTheDocument();
  expect(title).toHaveTextContent('section title');
});
