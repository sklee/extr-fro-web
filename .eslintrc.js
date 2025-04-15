module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  extends: [
    'airbnb-typescript/base', // airbnb style + typescript (no React)
    'plugin:@typescript-eslint/recommended', // TS best practices
    'plugin:prettier/recommended', // Prettier 연동 (eslint-config-prettier 포함)
  ],
  plugins: ['@typescript-eslint'],
  parserOptions: {
    project: './tsconfig.json',
    tsconfigRootDir: __dirname,
  },
  rules: {
    // ❗ 여기서 필요 없는 airbnb 규칙을 꺼줄 수 있어요
    'no-console': 'warn',
    'import/prefer-default-export': 'off',
    '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
    'class-methods-use-this': 'off',
    'no-param-reassign': ['error', { props: false }],
  },
  ignorePatterns: ['.eslintrc.js'], // 이 파일 자체는 검사 제외
};
