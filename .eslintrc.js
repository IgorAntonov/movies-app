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
  'parser': "babel-eslint",
  'parserOptions': {
    "ecmaVersion": 2017,
    "sourseType": "module",
    'ecmaFeatures': {
      'jsx': true,
    }
  }
}