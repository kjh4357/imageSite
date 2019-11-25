module.exports = {
  parser: "babel-eslint",
  extends: [
    'airbnb',
    'prettier',
    'eslint:recommended',
    'plugin:prettier/recommended',
  ],
  env: {
    browser: true,
    node: true,
    jest: true,
  },
  rules: {
    "react/jsx-filename-extension": [1, { extensions: ['.js', '.jsx'] }],
    'react/jsx-one-expression-per-line': [
      '<disabled>',
      { allow: 'none' | 'literal' | 'single-child' },
    ],
    'no-console': 1,
  },
  plugins: ['prettier'],
  parser: 'babel-eslint',
  settings: {
    react: {
      version: 'detect', // Tells eslint-plugin-react to automatically detect the version of React to use
    },
    'import/resolver': {
      webpack: {
        config: './webpack.config.js',
      },
    },
  },
};
