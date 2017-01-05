const path = require('path');
const camelCase = require('lodash.camelcase');
const autoprefixer = require('autoprefixer');

const srcPath = path.join(__dirname, '../src');
const uiKitPath = path.join(__dirname, '../node_modules/nordnet-ui-kit');

const numberComponentPaths = getComponentPaths([
  '../src/components/value/value.jsx',
  '../src/components/currency/currency.jsx',
  '../src/components/percent/percent.jsx',
  '../src/components/development/development.jsx',
]);

const otherComponentPaths = getComponentPaths([
  '../src/components/date-time/date-time.jsx',
  '../src/components/feed-status/feed-status.jsx',
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
  ],
  template: `${path.join(uiKitPath, 'documentation/template.html')}`,
  getExampleFilename(componentpath) {
    return componentpath.replace(/\.jsx?$/, '.examples.md');
  },
  getComponentPathLine(componentPath) {
    const fileName = path.basename(componentPath, '.jsx');
    const componentName = capitalize(camelCase(fileName));

    return `import { ${componentName} } from 'nordnet-component-kit';`;
  },
  updateWebpackConfig(webpackConfig) {
    const loaderDirs = {
      src: srcPath,
      styleguide: path.resolve(__dirname),
      uiKitDocs: path.join(uiKitPath, 'documentation'),
      uiKitDist: path.join(uiKitPath, 'dist'),
    };

    const loaders = {
      js: {
        test: /\.jsx?$/,
        include: [loaderDirs.src, loaderDirs.styleguide],
        loader: 'babel',
      },
      sass: {
        test: /\.scss$/,
        include: [loaderDirs.src, loaderDirs.styleguide, loaderDirs.uiKitDocs],
        loader: 'style!css!postcss!sass',
      },
      css: {
        test: /\.css$/,
        include: [loaderDirs.src, loaderDirs.styleguide, loaderDirs.uiKitDist],
        loader: 'style!css',
      },
    };

    webpackConfig.entry = ['babel-polyfill', ...webpackConfig.entry];

    webpackConfig.module.loaders.push(loaders.js, loaders.css, loaders.sass);

    webpackConfig.postcss = [autoprefixer];

    webpackConfig.resolve.alias['rsg-components/Wrapper'] = path.join(__dirname, 'wrapper.jsx');
    webpackConfig.resolve.alias['rsg-components/Layout/Renderer'] = path.join(__dirname, 'renderer.jsx');
    webpackConfig.entry.push(
      path.join(uiKitPath, 'documentation/documentation.scss'),
      path.join(uiKitPath, 'dist/input/input.css')
    );

    return webpackConfig;
  },
};
