import { act, renderHook } from '@testing-library/react';
import useThemeSwitcher from '.';

describe('Test theme switcher', () => {
  it('should switch theme', () => {
    const { result } = renderHook(() => useThemeSwitcher());

    expect(result.current.theme).toEqual('light');
    act(() => {
      result.current.switchTheme('dark');
    });
    expect(result.current.theme).toEqual('dark');
  });
});
