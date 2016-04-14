var path = require('path');
var pkg = require('./../package.json');

var DEBUG = process.env.npm_package_config_node_env === 'development';

var jsxLoader;
var sassLoader;
var cssLoader;

var fileLoader = 'file-loader?name=[path][name].[ext]';

var htmlLoader = [
  'file-loader?name=[path][name].[ext]',
  'template-html-loader?' + [
    'raw=true',
    'engine=lodash',
    'version=' + pkg.version,
    'title=' + pkg.name,
    'debug=' + DEBUG
  ].join('&')
].join('!');

var jsonLoader = ['json-loader'];

var sassParams = [
  'outputStyle=expanded',
  'includePaths[]=' + path.resolve(__dirname, './../src/assets/styles'),
  'includePaths[]=' + path.resolve(__dirname, './../node_modules')
];

if (DEBUG) {
  jsxLoader = ['react-hot', 'babel'];
  sassParams.push('sourceMap', 'sourceMapContents=true');

  sassLoader = [
    'style-loader',
    'css-loader?sourceMap',
    'postcss-loader',
    'sass-loader?' + sassParams.join('&')
  ].join('!');

  cssLoader = [
    'style-loader',
    'css-loader?sourceMap',
    'postcss-loader'
  ].join('!');
} else {
  jsxLoader = ['babel?presets[]=react,presets[]=es2015'];

  sassLoader = [
    'style-loader',
    'css-loader',
    'postcss-loader',
    'sass-loader?' + sassParams.join('&')
  ].join('!');

  cssLoader = [
    'style-loader',
    'css-loader',
    'postcss-loader'
  ].join('!');
}

var loaders = [
  {
    test: /\.jsx?$/,
    exclude: /node_modules/,
    loaders: jsxLoader
  },
  {
    test: /\.css$/,
    loader: cssLoader
  },
  {
    test: /\.jpe?g$|\.gif$|\.png$|\.ico|\.svg$/,
    loader: fileLoader
  },
  {
    test: /\.json$/,
    exclude: /node_modules/,
    loaders: jsonLoader
  },
  {
    test: /\.html$/,
    loader: htmlLoader
  },
  {
    test: /\.scss$/,
    loader: sassLoader
  }
];

module.exports = loaders;
