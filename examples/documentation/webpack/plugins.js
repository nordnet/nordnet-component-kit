var webpack = require('webpack');
var pkg = require('./../package.json');

var DEBUG = process.env.npm_package_config_node_env === 'development';
var VERSION = process.env.VERSION || 'dev';
var publicPath = DEBUG ? '/' : '/sc/' + pkg.name + '/cache/' + VERSION;

var plugins = [
  new webpack.optimize.OccurenceOrderPlugin()
];

if (DEBUG) {
  plugins.push(
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('development'),
        DEBUG: DEBUG
      }
    })
  );
} else {
  plugins.push(
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
        pure_funcs: ['console.log']
      }
    }),
    new webpack.optimize.DedupePlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production')
      }
    }),
    new webpack.NoErrorsPlugin()
  );
}

module.exports = plugins;
