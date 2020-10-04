module.exports = {
  preset: 'ts-jest',
  setupFilesAfterEnv: ['<rootDir>/tools/jest/setup.ts'],
  globals: {
    __DEV__: true,
  },
  testMatch: ['**/__tests__/**/*.[jt]s?(x)', '**/?(*.)+(test).[jt]s?(x)'],
  collectCoverage: true,
  moduleNameMapper: {
    '.*\\.(css|scss|sass)$': '<rootDir>/tools/jest/styleMock.ts',
    '.*\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/tools/jest/assetMock.ts',
  },
};
