// jest.config.mjs
// HEllo
export default {
  testEnvironment: 'jest-environment-jsdom',
  roots: ['<rootDir>/src', '<rootDir>/test'],
  setupFilesAfterEnv: ['@testing-library/jest-dom'],
  transform: {
    '^.+\\.jsx?$': 'babel-jest', // For JavaScript (with Babel)
    '^.+\\.tsx?$': 'ts-jest',     // For TypeScript (if applicable)
  },
  moduleFileExtensions: ['js', 'mjs', 'cjs', 'jsx', 'ts', 'tsx', 'json', 'node'],
  coverageDirectory: 'coverage',
  collectCoverageFrom: [
    'src/**/*.{js,jsx,ts,tsx}',
    '!src/**/*.d.ts',
  ],
  testMatch: [
    '**/test/**/*.test.[jt]s?(x)', // Adjust the pattern to match your test folder and file naming
  ],
  coverageReporters: ['lcov', 'text'], // Generates lcov report and displays text summary in the console
};
