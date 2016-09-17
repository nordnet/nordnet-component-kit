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
      suffix={currency || rest.suffix}
      suffixStyle={suffixStyle}
      suffixSeparator={suffixSeparator}
    />
  );
}

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
};

Currency.defaultProps = {
  suffixSeparator: ' ',
  suffixSize: 'normal',
  decimals: 2,
};
