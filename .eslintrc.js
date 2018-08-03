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
    'arrow-parens': 0
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