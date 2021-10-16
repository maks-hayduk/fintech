module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true
  },
  extends: ['plugin:react/recommended', 'airbnb'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 12,
    sourceType: 'module'
  },
  plugins: ['react', 'only-warn'],
  settings: {
    'import/resolver': {
      node: {
        paths: ['.']
      }
    }
  },
  rules: {
    'comma-dangle': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/jsx-one-expression-per-line': 'off',
    'arrow-parens': 'off',
    'object-curly-newline': 'off',
    'function-paren-newline': 'off',
    'implicit-arrow-linebreak': 'off',
    'react/prop-types': 'off',
    'import/prefer-default-export': 'off',
    camelcase: 'off',
    'react/jsx-pascal-case': 'off',
    'react/jsx-props-no-spreading': 'off'
  }
};
