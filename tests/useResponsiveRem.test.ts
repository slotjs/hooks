import { renderHook } from "@testing-library/react";
import { it, expect } from "vitest";

import { useResponsive } from "../lib/useResponsive";

it("useResponsiveRem should work", () => {
  const isReady = renderHook(() => useResponsive(1920, 16));
  expect(isReady).toBeTruthy();
});
