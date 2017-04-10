const webpack = require('webpack');
const path = require('path');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

const plugins = [
  new webpack.DefinePlugin({
    'process.env': {
      NODE_ENV: JSON.stringify(process.env.NODE_ENV),
    },
  }),
];

if (process.env.ANALYZE === 'true') {
  plugins.push(new BundleAnalyzerPlugin());
  plugins.push(new webpack.optimize.UglifyJsPlugin()); // Also minify code to get prod-like stats
}

const rules = [{
  test: /\.jsx?$/,
  exclude: /node_modules/,
  use: 'babel-loader',
}];


module.exports = {
  name: 'nordnet-component-kit',
  entry: {
    'nordnet-component-kit': './src/index.js',
  },
  output: {
    library: 'NordnetComponentKit',
    libraryTarget: 'umd',
    path: path.resolve(__dirname, 'lib'),
    filename: '[name].js',
  },
  resolve: {
    extensions: [
      '.js',
      '.jsx',
    ],
  },
  module: {
    rules,
  },
  externals: {
    react: {
      root: 'React',
      commonjs2: 'react',
      commonjs: 'react',
      amd: 'react',
    },
    'react-dom': {
      root: 'ReactDOM',
      commonjs2: 'react-dom',
      commonjs: 'react-dom',
      amd: 'react-dom',
    },
    'react-intl': {
      root: 'ReactIntl',
      commonjs2: 'react-intl',
      commonjs: 'react-intl',
      amd: 'react-intl',
    },
    'nordnet-ui-kit': {
      root: 'NordnetUiKit',
      commonjs2: 'nordnet-ui-kit',
      commonjs: 'nordnet-ui-kit',
      amd: 'nordnet-ui-kit',
    },
    'classnames': {
      root: 'Classnames',
      commonjs2: 'classnames',
      commonjs: 'classnames',
      amd: 'classnames',
    },
  },
  plugins,
};
