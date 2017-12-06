import Value from './components/value/value';
import Currency from './components/currency/currency';
import Percent from './components/percent/percent';
import Development from './components/development/development';
import DateTime from './components/date-time/date-time';
import FreshnessIndicator from './components/freshness-indicator/freshness-indicator';
import onClickOutside from './hocs/on-click-outside/on-click-outside';
import isWideViewPort from './hocs/is-wide-viewport/is-wide-viewport';
import IconRow from './components/icon-row/icon-row';

import { getTickDecimals, getDevelopmentPercentage } from './utils';

const utils = {
  getTickDecimals,
  getDevelopmentPercentage,
};

export {
  // Number components
  Currency,
  Development,
  Percent,
  Value,

  // Other components
  DateTime,
  FreshnessIndicator,
  IconRow,

  // HOCs
  onClickOutside,
  isWideViewPort,

  // utils
  utils,
};
