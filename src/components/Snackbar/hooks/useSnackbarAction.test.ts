import { act, renderHook } from '@testing-library/react';
import useSnackbarAction from './useSnackbarAction';

const getSnackbar = () => renderHook(() => useSnackbarAction());

describe('Test snackbar', () => {
  test('initial snackbar state', () => {
    const { result } = getSnackbar();
    expect(result.current.isVisible).toBeFalsy();
  });

  test('snackbar success', () => {
    const { result } = getSnackbar();
    act(() => {
      result.current.snackbar({
        title: 'success',
        type: 'success',
        duration: 5000,
      });
    });
    expect(result.current.duration).toEqual(5000);
    expect(result.current.isVisible).toBeTruthy();
    expect(result.current.title).toEqual('success');
    expect(result.current.type).toEqual('success');
  });

  test('snackbar danger', () => {
    const { result } = getSnackbar();
    act(() => {
      result.current.snackbar({
        title: 'danger',
        type: 'danger',
        duration: 200,
      });
    });
    expect(result.current.isVisible).toBeTruthy();
    expect(result.current.duration).toEqual(200);
    expect(result.current.title).toEqual('danger');
    expect(result.current.type).toEqual('danger');
  });
});
