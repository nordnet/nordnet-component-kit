const path = require('path');
const camelCase = require('lodash.camelcase');
const autoprefixer = require('autoprefixer');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const config = require('../webpack.config.babel');

function getComponentPaths(components) {
  return components.map(componentPath => `${path.resolve(__dirname)}/${componentPath}`);
}

const numberComponentPaths = getComponentPaths([
  '../src/components/value/value.jsx',
  '../src/components/currency/currency.jsx',
  '../src/components/percent/percent.jsx',
  '../src/components/development/development.jsx',
]);

const otherComponentPaths = getComponentPaths([
  '../src/components/date-time/date-time.jsx',
  '../src/components/freshness-indicator/freshness-indicator.jsx',
  '../src/components/icon-row/icon-row.jsx',
]);

function capitalize(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

module.exports = {
  serverPort: 6061, // To not conflict with nordnet-ui-kit
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
  webpackConfig: Object.assign({}, config, {
    module: {
      rules: [...config.module.rules, {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [{
            loader: 'css-loader',
          }, {
            loader: 'postcss-loader',
            query: {
              ident: 'postcss',
              plugins: [autoprefixer()],
            },
          }],
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
  }),
};
