import { renderHook, act } from '@testing-library/react';
import '@testing-library/jest-dom'
import { useRootFontSize } from '../src/useRootFontSize';

test('useCounter should work', () => {
  const { result } = renderHook(() => useRootFontSize(1920, 16));
  act(() => {
    result.current.inc();
  });
  expect(result.current.count).toBe(1);
});
