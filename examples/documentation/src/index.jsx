import React from 'react';
import ReactDOM from 'react-dom';
import { addLocaleData, IntlProvider } from 'react-intl';
import 'babel-polyfill';
import { renderToString } from 'react-dom/server';
import htmlWrapper from './components/htmlWrapper';
import App from './app.jsx';

import '../lib/modernizr-custom.min.js';
import '../lib/prism.js';

import en from 'react-intl/locale-data/en';
import sv from 'react-intl/locale-data/sv';
import fi from 'react-intl/locale-data/fi';
import nb from 'react-intl/locale-data/nb';
import da from 'react-intl/locale-data/da';

addLocaleData([...en, ...sv, ...fi, ...nb, ...da]);

if (typeof document !== 'undefined') {
  ReactDOM.render(
    <IntlProvider locale="en">
      <App />
    </IntlProvider>,
    document.getElementById('react-mount')
  );
}

module.exports = function render(locals, callback) {
  const html = htmlWrapper({
    title: 'Nordnet Formatter',
    body: renderToString(<App />),
    assets: locals.assets,
    root: '/',
  });
  callback(null, html);
};
