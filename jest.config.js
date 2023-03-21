const path = require('path')

module.exports = {
  moduleNameMapper: {
    '\\.(jpg|jpeg|png)$': 'identity-obj-proxy',
    '\\.(css|scss)$': 'identity-obj-proxy',
    '^@assets(.*)$': path.join(__dirname, 'src/assets$1'),
    '^@fonts(.*)$': path.join(__dirname, 'src/assets/fonts$1'),
    '^@components(.*)$': path.join(__dirname, 'src/components$1'),
    '^@routes(.*)$': path.join(__dirname, 'src/routing$1'),
    '^@styles(.*)$': path.join(__dirname, 'src/styles$1'),
  },
  transform: {
    '^.+\\.jsx?$': 'babel-jest'
  },
  transformIgnorePatterns: ['[/\\\\]node_modules[/\\\\].+\\.(js|jsx|mjs|cjs|ts|tsx)$'],
  testMatch: [
    '<rootDir>/src/**/__tests__/**/*.{js,jsx,ts,tsx}',
    '<rootDir>/src/**/*.{spec,test}.{js,jsx,ts,tsx}'
  ],
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['@testing-library/jest-dom/extend-expect']
}
