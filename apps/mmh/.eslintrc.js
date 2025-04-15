const path = require('path');

module.exports = {
  root: true,
  extends: [path.resolve(__dirname, '../../.eslintrc.js')],
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: ['./tsconfig.json'],
  },
};
