import React from 'react';
import Number from '../number/number';
import variables from '../../variables';

/**
  This is the `<Currency /> component`
*/
export default function Currency({
  value,
  currency,
  decimals,
  maxDecimals,
  minDecimals,
  suffixSize,
  suffixSeparator,
  ...rest,
}) {
  const suffixStyle = Object.assign({},
    suffixSize === 'small' ? {
      fontSize: variables.relativeSizeSm,
      fontWeight: 'bolder',
    } : {}, rest.suffixStyle);

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
  value: React.PropTypes.any.isRequired,
  /**
    Syntactic sugar for `suffix` (either one can be used)
  */
  currency: React.PropTypes.string,
  /**
    Default is a space (`' '`)
  */
  suffixSeparator: React.PropTypes.string,
  suffixSize: React.PropTypes.oneOf(['normal', 'small']),
  decimals: React.PropTypes.number,
  maxDecimals: React.PropTypes.number,
  minDecimals: React.PropTypes.number,
};
