import '@testing-library/jest-dom/extend-expect';
import { ORDER_TYPE } from 'src/constants/orderType';
import { fireEvent, render, screen } from '@testing-library/react';
import ArticleSortingHeader from '.';
import MockProvider from 'src/helpers/test/MockProvider';

const mockSort = jest.fn();

describe('Test sorting header', () => {
  beforeEach(() => {
    render(
      <MockProvider>
        <ArticleSortingHeader onSort={mockSort} title="sorting header" />
      </MockProvider>
    );
  });

  it('should sort by oldest or newest', () => {
    const select = screen.getByTestId('sort-select') as HTMLSelectElement;
    const options = screen.getAllByTestId(
      'sort-select-option'
    ) as HTMLOptionElement[];
    fireEvent.change(select, { target: { value: ORDER_TYPE.oldest } });
    expect(options[0].selected).toBeFalsy();
    expect(options[1].selected).toBeTruthy();
    fireEvent.change(select, { target: { value: ORDER_TYPE.newest } });
    expect(options[0].selected).toBeTruthy();
    expect(options[1].selected).toBeFalsy();
  });
});

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
