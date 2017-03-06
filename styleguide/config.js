const path = require('path');
const camelCase = require('lodash.camelcase');
const autoprefixer = require('autoprefixer');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const numberComponentPaths = getComponentPaths([
  '../src/components/value/value.jsx',
  '../src/components/currency/currency.jsx',
  '../src/components/percent/percent.jsx',
  '../src/components/development/development.jsx',
]);

const otherComponentPaths = getComponentPaths([
  '../src/components/date-time/date-time.jsx',
  '../src/components/freshness-indicator/freshness-indicator.jsx',
]);

function getComponentPaths(components) {
  return components.map(componentPath => `${path.resolve(__dirname)}/${componentPath}`);
}

function capitalize(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

module.exports = {
  title: 'Nordnet Component Kit',
  styleguideDir: `${path.join(__dirname, '../docs')}`,
  sections: [
    { name: 'Number Components', components: () => numberComponentPaths, content: `${path.resolve(__dirname)}/number.section.md` },
    { name: 'Other Components', components: () => otherComponentPaths },
    { name: 'Higher Order Components', content: `${path.resolve(__dirname)}/hoc.section.md` },
  ],
  getExampleFilename(componentpath) {
    return componentpath.replace(/\.jsx?$/, '.examples.md');
  },
  getComponentPathLine(componentPath) {
    const fileName = path.basename(componentPath, '.jsx');
    const componentName = capitalize(camelCase(fileName));

    return `import { ${componentName} } from 'nordnet-component-kit';`;
  },
  webpackConfigFile: './../webpack.config.babel.js', // the need for starting with ./ is probably a bug in react-styleguidist
  webpackConfig: {
    entry: [
      'babel-polyfill',
      'nordnet-ui-kit/documentation/documentation.scss',
      'nordnet-ui-kit/dist/input/input.css',
      'nordnet-ui-kit/dist/tooltip/tooltip.css',
    ],
    module: {
      rules: [{
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            {
              loader: 'css-loader',
            },
            {
              loader: 'postcss-loader',
              query: {
                ident: 'postcss',
                plugins: [autoprefixer()],
              },
            },
          ],
        }),
      }, {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [{
            loader: 'css-loader',
          }, {
            loader: 'postcss-loader',
            options: {
              plugins: [autoprefixer()],
            },
          }, {
            loader: 'sass-loader',
          }],
        }),
      }],
    },
    resolve: {
      alias: {
        'rsg-components/Wrapper': path.join(__dirname, 'wrapper.jsx'),
      },
    },
    plugins: [new ExtractTextPlugin('styleguide.css')]
  },
};
