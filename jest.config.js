module.exports = {
  clearMocks: true,
  collectCoverage: true,
  coverageReporters: ['html', 'json', 'text-summary', 'lcov'],
  testResultsProcessor: 'jest-sonar-reporter',
  collectCoverageFrom: [
    '!<rootDir>/pages/**/*.{js,jsx,mjs}',
    '!<rootDir>/public/**/*.{js,jsx,mjs}',
    '!<rootDir>/.next/**/*.{js,jsx,mjs}',
    '!<rootDir>/coverage/**/*.{js,jsx,mjs}',
    '!<rootDir>/store.{js,jsx,mjs}'
  ],
  coveragePathIgnorePatterns: [
    "node_modules",
    "next.config.js",
    "jest.config.js",
    "postcss.config.js",
    "tailwind.config.js"
],
  coverageDirectory: 'coverage',
  moduleFileExtensions: ['js', 'json', 'jsx'],
  moduleNameMapper: {
    '.+\\.(css|styl|less|sass|scss|jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': `<rootDir>/CSSStub.js`
  },
  setupFiles: ['<rootDir>/enzyme.setup.js'],
  testEnvironment: 'jsdom',
  testMatch: ['**/__tests__/**/*.js?(x)', '**/?(*.)+(spec|test).js?(x)'],
  testPathIgnorePatterns: ['\\\\node_modules\\\\','package.json','.eslintrc.json'],
  testURL: 'http://localhost',
  transformIgnorePatterns: ['<rootDir>/node_modules/'],
  verbose: false
}
