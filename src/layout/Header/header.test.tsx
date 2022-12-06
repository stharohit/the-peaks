import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import Header from '.';
import MockProvider from 'src/helpers/test/MockProvider';

jest.mock('next/router', () => ({
  useRouter() {
    return {
      route: '/',
      pathname: '',
      query: '',
      asPath: '',
      push: jest.fn(),
      events: {
        on: jest.fn(),
        off: jest.fn(),
      },
      beforePopState: jest.fn(() => null),
      prefetch: jest.fn(() => null),
    };
  },
}));

describe('Test navigation header', () => {
  it('should have a logo', () => {
    render(
      <MockProvider>
        <Header />
      </MockProvider>
    );

    const logo = screen.getByRole('img');
    expect(logo).toBeInTheDocument();
    expect(logo).toHaveClass('logo');
  });
});
