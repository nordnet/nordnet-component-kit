import React from 'react';
import classNames from 'classnames';
import Number from '../number/number';
import './currency.scss';

/**
  This is the `<Currency /> component`
*/
export default function Currency({
  currency,
  decimals,
  suffixSize,
  ...rest,
}) {
  return (
    <Number
      { ...rest }
      valueDecimals={ decimals }
      suffix={ currency || rest.suffix }
      suffixClass={ classNames(`currency__suffix--${suffixSize}`, rest.suffixClass) }
    />
  );
}

Currency.propTypes = {
  value: React.PropTypes.number.isRequired,
  /**
    Syntactic sugar for `suffix` (either one can be used)
  */
  currency: React.PropTypes.string,
  /**
    Default is a space (`' '`)
  */
  suffixSeparator: React.PropTypes.string,
  /**
    Possible values are `'normal'` or `'small'`
  */
  suffixSize: React.PropTypes.string,
  decimals: React.PropTypes.number,
};

Currency.defaultProps = {
  suffixSeparator: ' ',
  suffixSize: 'normal',
  decimals: 2,
};
