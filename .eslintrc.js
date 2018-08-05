module.exports = {
  'env': {
    'browser': true,
    'jest': true,
    'es6': true,
    'node': true,
  },
  'extends': [
    'airbnb'
  ],
  'plugins': [
    'react',
  ],
  'rules': {
    'linebreak-style': 0,
    'comma-dangle': 0,
    'arrow-parens': 0,
    'camelcase': 0,
    'import/prefer-default-export': 'off',
    'react/jsx-one-expression-per-line': 0,
    'react/jsx-filename-extension': [
      1,
      {
        'extensions': [
          '.js',
          '.jsx'
        ]
      }
    ]
  },
  'parser': "babel-eslint",
  'parserOptions': {
    "ecmaVersion": 2017,
    "sourseType": "module",
    'ecmaFeatures': {
      'jsx': true,
    }
  },
  'env': {
    'browser': true,
    'es6': true,
    'jest': true,
    'node': true
  }
}