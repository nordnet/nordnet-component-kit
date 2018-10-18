import PropTypes from 'prop-types';
import React from 'react';
import Number from '../number/number';
import variables from '../../variables';
import { valuePropType } from '../../utils';

/**
  This is the `<Currency /> component`
*/
export default function Currency({ value, currency, decimals, maxDecimals, minDecimals, suffixSize, suffixSeparator, ...rest }) {
  const suffixStyle = Object.assign(
    {},
    suffixSize === 'small'
      ? {
          fontSize: variables.relativeSizeSm,
          fontWeight: 'bolder',
        }
      : {},
    rest.suffixStyle,
  );

  return (
    <Number
      {...rest}
      value={value}
      valueDecimals={decimals}
      valueMaxDecimals={maxDecimals}
      valueMinDecimals={minDecimals}
      suffix={currency || rest.suffix}
      suffixStyle={suffixStyle}
      suffixSeparator={suffixSeparator}
    />
  );
}

Currency.defaultProps = {
  currency: '',
  suffixSeparator: ' ',
  suffixSize: 'normal',
  decimals: 2,
  maxDecimals: null,
  minDecimals: null,
};

Currency.propTypes = {
  value: valuePropType,
  /**
    Syntactic sugar for `suffix` (either one can be used)
  */
  currency: PropTypes.string,
  /**
    Default is a space (`' '`)
  */
  suffixSeparator: PropTypes.string,
  suffixSize: PropTypes.oneOf(['normal', 'small']),
  decimals: PropTypes.number,
  maxDecimals: PropTypes.number,
  minDecimals: PropTypes.number,
};
