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
  ...rest,
}) {
  const suffixStyle = Object.assign({},
    suffixSize === 'small' ? {
      fontSize: variables.relativeSizeSm,
      fontWeight: 'bolder',
    } : {}, rest.suffixStyle);

  return (
    <Number
      { ...rest }
      value={ value }
      valueDecimals={ decimals }
      suffix={ currency || rest.suffix }
      suffixStyle={ suffixStyle }
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
