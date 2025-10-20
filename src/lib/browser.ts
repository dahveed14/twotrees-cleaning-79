/**
 * Browser utility functions for SSR-safe code
 */

export const isBrowser = () => typeof window !== 'undefined';

export const isServer = () => !isBrowser();

export const safeWindow = <T>(callback: (window: Window) => T, fallback?: T): T | undefined => {
  if (isBrowser()) {
    return callback(window);
  }
  return fallback;
};

export const safeDocument = <T>(callback: (document: Document) => T, fallback?: T): T | undefined => {
  if (isBrowser() && typeof document !== 'undefined') {
    return callback(document);
  }
  return fallback;
};
