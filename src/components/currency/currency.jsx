import React from 'react';
import classNames from 'classnames';
import Number from '../number/number';
import './currency.scss';

const Currency = ({
  currency,
  decimals,
  suffix,
  suffixClass,
  suffixSize,
  ...rest,
}) => (
  <Number
    { ...rest }
    valueDecimals={ decimals }
    suffix={ currency || suffix }
    suffixClass={ classNames(`currency__suffix--${suffixSize}`, suffixClass) }
  />
);

Currency.propTypes = {
  className: React.PropTypes.string,
  value: React.PropTypes.number.isRequired,
  valueClass: React.PropTypes.string,
  currency: React.PropTypes.string,
  suffix: React.PropTypes.string,
  suffixClass: React.PropTypes.string,
  suffixSeparator: React.PropTypes.string,
  suffixSize: React.PropTypes.string,
  decimals: React.PropTypes.number,
};

Currency.defaultProps = {
  suffixSeparator: ' ',
  suffixSize: 'normal',
  decimals: 2,
};

export default Currency;
