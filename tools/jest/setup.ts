// import "@testing-library/jest-dom/extend-expect";
import '@testing-library/jest-dom';
import 'regenerator-runtime/runtime';
import 'core-js/stable';

Object.defineProperty(window, 'matchMedia', {
  value: () => ({
    matches: false,
    addListener: () => ({}),
    removeListener: () => ({}),
  }),
});

Object.defineProperty(window, 'getComputedStyle', {
  value: () => ({
    getPropertyValue: () => ({}),
  }),
});
