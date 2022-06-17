const esModules = ['d3', 'react-perfect-scrollbar', 'ion-rangeslider'].join(
  '|'
);
module.exports = {
  roots: ['<rootDir>'],
  collectCoverageFrom: ['src/**/*.{js,jsx}'],
  testMatch: [
    '<rootDir>/test/**/*?(*.)+(spec|test).{js,jsx}',
    '<rootDir>\\test\\**\\*?(*.)+(spec|test).{js,jsx}',
  ],
  transform: {
    [`(${esModules}).+\\.js$`]: 'babel-jest',
    '^.+\\.(js|jsx)$': '<rootDir>/config/jest/jest-transformer.js',
    '.+\\.(css|styl|less|sass|scss|png|jpg|ttf|woff|woff2|svg)$':
      'jest-transform-stub',
  },
  moduleFileExtensions: ['js', 'jsx', 'json', 'node'],
  moduleDirectories: ['node_modules'],
  transformIgnorePatterns: [
    '[/\\\\]node_modules[/\\\\].+\\.(js|jsx|mjs)$',
    '^.+\\.module\\.(css|sass|scss)$',
    `[/\\\\]node_modules/(?!${esModules})`,
  ],
  setupFilesAfterEnv: [
    '@testing-library/jest-dom/extend-expect',
    '<rootDir>/test/setupTests.js',
  ],
  testPathIgnorePatterns: [
    '/node_modules/',
    '/public/',
    '/build/',
    '/coverage/',
  ],
  verbose: true,
  coverageThreshold: {
    global: {
      branches: 10.92,
      functions: 12.61,
      lines: 19.73,
      statements: 19.29,
    },
  },
};
