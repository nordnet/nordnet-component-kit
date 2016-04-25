var path = require('path');
var pkg = require('./../package.json');

var DEBUG = process.env.npm_package_config_node_env === 'development';

var loaders = [
  {
    test: /\.jsx?$/,
    exclude: /node_modules/,
    loader: 'babel',
  },
];

module.exports = loaders;
