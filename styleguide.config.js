const path = require("path");
const camelCase = require("lodash.camelcase");
const { createConfig } = require("@webpack-blocks/webpack2");
const babel = require("@webpack-blocks/babel6");

const dir = path.join(__dirname, "src");

function capitalize(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

const numberComponentPaths = [
  `${dir}/components/value/value.jsx`,
  `${dir}/components/currency/currency.jsx`,
  `${dir}/components/percent/percent.jsx`,
  `${dir}/components/development/development.jsx`
];

const otherComponentPaths = [
  `${dir}/components/date-time/date-time.jsx`,
  `${dir}/components/freshness-indicator/freshness-indicator.jsx`,
  `${dir}/components/icon-row/icon-row.jsx`
];

module.exports = {
  serverPort: 6061, // To not conflict with nordnet-ui-kit
  title: "Nordnet Component Kit",
  // styleguideDir: path.join(__dirname, "documentation/dist"),
  template: path.resolve(__dirname, "./documentation/template.html"),
  sections: [
    {
      name: "Number Components",
      components: () => numberComponentPaths,
      content: `${path.resolve(__dirname)}/documentation/number.section.md`
    },
    { name: "Other Components", components: () => otherComponentPaths },
    {
      name: "Higher Order Components",
      content: `${path.resolve(__dirname)}/documentation/hoc.section.md`
    }
  ],
  getExampleFilename(componentpath) {
    return componentpath.replace(/\.jsx?$/, ".md");
  },
  // getComponentPathLine(componentPath) {
  //   const fileName = path.basename(componentPath, ".jsx");
  //   const componentName = capitalize(camelCase(fileName));

  //   return `import { ${componentName} } from 'nordnet-component-kit';`;
  // },
  styleguideComponents: {
    Wrapper: path.join(__dirname, "documentation", "wrapper.jsx")
  },
  webpackConfig: createConfig([babel()])
};
