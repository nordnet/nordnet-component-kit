import webpack from 'webpack';

module.exports = {
  name: 'nordnet-formatter',
  entry: {
    'nordnet-formatter': './src/index.js',
  },
  output: {
    library: 'NordnetFormatter',
    libraryTarget: 'commonjs2',
    path: './dist',
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
    loaders: [
      {
        test: /\.jsx?$/,
        loader: 'babel',
        exclude: /node_modules/,
      }, {
        test: /\.scss$/,
        loader: 'style!css!sass',
      }, {
        test: /\.css$/,
        loader: 'style!css',
      },
    ],
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
    },
  ],
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
    }),
  ],
};
