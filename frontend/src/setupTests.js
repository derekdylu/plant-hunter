import '@testing-library/jest-dom/vitest';
import { beforeEach } from 'vitest';

const values = new Map()
const localStorageMock = {
  clear: () => values.clear(),
  getItem: (key) => values.get(String(key)) ?? null,
  key: (index) => [...values.keys()][index] ?? null,
  get length() {
    return values.size
  },
  removeItem: (key) => values.delete(String(key)),
  setItem: (key, value) => values.set(String(key), String(value)),
}

if (typeof window !== 'undefined') {
  Object.defineProperty(window, 'localStorage', {
    configurable: true,
    value: localStorageMock,
  })
}

beforeEach(() => {
  localStorageMock.clear()
})
