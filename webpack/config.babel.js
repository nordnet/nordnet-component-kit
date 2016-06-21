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
  externals: [
    {
      react: {
        root: 'React',
        commonjs2: 'react',
        commonjs: 'react',
        amd: 'react',
      },
    }, {
      'react-dom': {
        root: 'ReactDOM',
        commonjs2: 'react-dom',
        commonjs: 'react-dom',
        amd: 'react-dom',
      },
    }, {
      'react-intl': {
        root: 'ReactIntl',
        commonjs2: 'react-intl',
        commonjs: 'react-intl',
        amd: 'react-intl',
      },
    },
  ],
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
