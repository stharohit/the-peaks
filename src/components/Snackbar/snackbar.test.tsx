import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import MockProvider from 'src/helpers/test/MockProvider';
import Snackbar from '.';

describe('Test snackbar', () => {
  beforeEach(() => {
    render(
      <MockProvider>
        <Snackbar />
      </MockProvider>
    );
  });

  it('should have be hidden', () => {
    const snackbar = screen.getByTestId('snackbar');
    expect(snackbar).not.toBeVisible();
  });

  it('should have be visible', () => {
    const snackbar = screen.getByTestId('snackbar');
    snackbar.classList.add('active');
    expect(snackbar).toBeVisible();
  });
});
