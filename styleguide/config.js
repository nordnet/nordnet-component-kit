const path = require('path');
const camelCase = require('lodash.camelcase');

const srcPath = path.join(__dirname, '../src');

const numberComponentPaths = getComponentPaths([
  '../src/components/currency/currency.jsx',
  '../src/components/percent/percent.jsx',
  '../src/components/development/development.jsx',
]);

const otherComponentPaths = getComponentPaths([
  '../src/components/date-time/date-time.jsx',
]);

function getComponentPaths(components) {
  return components.map(componentPath => `${path.resolve(__dirname)}/${componentPath}`);
}

function capitalize(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

module.exports = {
  title: 'Nordnet Component Kit',
  sections: [
    { name: 'Number Components', components: () => numberComponentPaths, content: `${path.resolve(__dirname)}/number.section.md` },
    { name: 'Other Components', components: () => otherComponentPaths },
  ],
  getExampleFilename(componentpath) {
    return componentpath.replace(/\.jsx?$/, '.examples.md');
  },
  getComponentPathLine(componentPath) {
    const fileName = path.basename(componentPath, '.jsx');
    const componentName = capitalize(camelCase(fileName));

    return `import { ${componentName} } from \'nordnet-component-kit\';`;
  },
  styleguideDir: `${path.join(__dirname, '../docs')}`,
  updateWebpackConfig(webpackConfig) {
    // can also take env
    webpackConfig.module.loaders.push(
      {
        test: /\.jsx?$/,
        loader: 'babel',
        include: [srcPath, path.resolve(__dirname)],
      }, {
        test: /\.scss$/,
        include: srcPath,
        loader: 'style!css!sass',
      }, {
        test: /\.css$/,
        include: srcPath,
        loader: 'style!css',
      }
    );

    webpackConfig.resolve.alias['rsg-components/Wrapper'] = path.join(__dirname, 'wrapper.jsx');
    return webpackConfig;
  },
};
