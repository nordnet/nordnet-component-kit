var path = require('path');
var util = require('util');
var autoprefixer = require('autoprefixer');
var pkg = require('../package.json');

var loaders = require('./loaders');
var plugins = require('./plugins');

var DEBUG = process.env.npm_package_config_node_env === 'development';
var VERSION = process.env.VERSION || 'dev';
var publicPath = DEBUG ? '/' : '/sc/' + pkg.name + '/cache/' + VERSION;

const SRC_DIR = path.resolve(__dirname, './../src');

var entry = {
  index: ['./index.jsx']
};

if (DEBUG) {
  entry.index.push(
    util.format(
      'webpack-dev-server/client?http://%s:%d',
      pkg.config.dev_server.host,
      pkg.config.dev_server.port
    )
  );
  entry.index.push('webpack/hot/dev-server');
}
var config = {
  context: SRC_DIR,
  cache: DEBUG,
  debug: DEBUG,
  target: 'web',
  name: 'nordnet-formatter-documentation',
  devtool: DEBUG ? 'inline-source-map' : 'hidden-source-map',
  entry: entry,
  output: {
    path: path.resolve(pkg.config.dist),
    publicPath: DEBUG ? '/' : publicPath + '/',
    sourceMapFilename: './../../dev/[file].map',
    filename: '[name].js',
    pathinfo: DEBUG
  },
  module: {
    loaders: loaders,
  },
  postcss: [
    autoprefixer
  ],
  plugins: plugins,
  resolve: {
    extensions: ['', '.js', '.json', '.jsx']
  },
  devServer: {
    host: '0.0.0.0',
    contentBase: SRC_DIR,
    hot: true,
    noInfo: false,
    inline: true,
    stats: {
      colors: true
    }
  }
};

module.exports = config;
