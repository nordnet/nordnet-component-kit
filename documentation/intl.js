/* eslint-disable no-underscore-dangle */
import { NumberFormat } from '@formatjs/intl-numberformat';
import '@formatjs/intl-getcanonicallocales/polyfill';
import '@formatjs/intl-pluralrules/polyfill';
import '@formatjs/intl-pluralrules/dist/locale-data/en';
import '@formatjs/intl-pluralrules/dist/locale-data/sv';
import '@formatjs/intl-pluralrules/dist/locale-data/da';
import '@formatjs/intl-pluralrules/dist/locale-data/fi';
import '@formatjs/intl-pluralrules/dist/locale-data/nb';
import '@formatjs/intl-locale/polyfill';
import '@formatjs/intl-relativetimeformat/polyfill';
import '@formatjs/intl-relativetimeformat/dist/locale-data/en';
import '@formatjs/intl-relativetimeformat/dist/locale-data/sv';
import '@formatjs/intl-relativetimeformat/dist/locale-data/da';
import '@formatjs/intl-relativetimeformat/dist/locale-data/fi';
import '@formatjs/intl-relativetimeformat/dist/locale-data/nb';
import numberEn from '@formatjs/intl-numberformat/dist/locale-data/en.json';
import numberSv from '@formatjs/intl-numberformat/dist/locale-data/sv.json';
import numberDa from '@formatjs/intl-numberformat/dist/locale-data/da.json';
import numberFi from '@formatjs/intl-numberformat/dist/locale-data/fi.json';
import numberNb from '@formatjs/intl-numberformat/dist/locale-data/nb.json';

NumberFormat.__addLocaleData(numberEn);
NumberFormat.__addLocaleData(numberSv);
NumberFormat.__addLocaleData(numberDa);
NumberFormat.__addLocaleData(numberFi);
NumberFormat.__addLocaleData(numberNb);
