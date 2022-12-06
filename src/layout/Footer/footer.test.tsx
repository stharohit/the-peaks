import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import Footer from '.';
import MockProvider from 'src/helpers/test/MockProvider';

describe('Test footer', () => {
  render(
    <MockProvider>
      <Footer />
    </MockProvider>
  );

  it('should have a copyright text', () => {
    const text = screen.getByText(/all rights reserved/i);
    expect(text).toBeInTheDocument();
  });
});
