import { useEffect, useState } from "react";

/**
 * A React hook to set the root font size based on the viewport width.
 * It scales the font size up to a maximum of 2x the base font size.
 * This is useful for responsive designs where the font size needs to adapt to different screen sizes.
 * It listens for window resize events to adjust the font size dynamically.
 * 
 * @param baseWidth 
 * @param baseFontSize 
 * @example
 * ```ts
 * const isReady = useResponsive(1920, 16);
 * ```
 * // This will set the root font size based on a base width of 1920px
 * // and a base font size of 16px.
 * // The hook returns true once the font size has been set, allowing components to render correctly
 * // with the appropriate font size.
 * @returns 
 */
export function useResponsive(baseWidth = 1920, baseFontSize = 16): boolean {
  const [isReady, setIsReady] = useState(false);

  const updateRootFontSize = () => {
    const scale = document.documentElement.clientWidth / baseWidth;
    document.documentElement.style.fontSize = `${baseFontSize * Math.min(scale, 2)}px`;
  };

  useEffect(() => {
    updateRootFontSize();
    setIsReady(true);
  }, []);

  useEffect(() => {
    window.addEventListener("resize", updateRootFontSize);
    return () => window.removeEventListener("resize", updateRootFontSize);
  }, []);

  return isReady;
}
