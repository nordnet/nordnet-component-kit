import webpack from 'webpack';
import loaders from './loaders';

export default {
  name: 'nordnet-component-kit',
  entry: {
    'nordnet-component-kit': './src/index.js',
  },
  output: {
    library: 'NordnetComponentKit',
    libraryTarget: 'umd',
    path: './lib',
    filename: '[name].js',
  },
  resolve: {
    extensions: [
      '',
      '.js',
      '.jsx',
    ],
  },
  module: {
    loaders,
  },
  externals: {
    react: 'React',
    'react-dom': 'ReactDOM',
    'react-intl': 'ReactIntl',
    'nordnet-ui-kit': 'NordnetUiKit',
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.DedupePlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV),
      },
    }),
  ],
};
