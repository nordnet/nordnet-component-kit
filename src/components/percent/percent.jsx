import React from 'react';
import Number from '../number/number';

/**
  This is the `<Percent /> component`
*/
export default function Percent({
  value,
  decimals,
  suffixSeparator,
  ...rest,
}) {
  return (
    <Number
      {...rest}
      value={value}
      valueDecimals={decimals}
      suffix="%"
      suffixSeparator={suffixSeparator}
    />
  );
}

Percent.propTypes = {
  value: React.PropTypes.any.isRequired,
  decimals: React.PropTypes.number,
  /**
    Default is an empty string (`''`)
  */
  suffixSeparator: React.PropTypes.string,
};

Percent.defaultProps = {
  suffixSeparator: '',
  decimals: 2,
};
