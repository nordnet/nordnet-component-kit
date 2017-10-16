import React, { PropTypes } from 'react';
import Number from '../number/number';

/**
  This is the `<Value /> component`
*/
export default function Value({
  value,
  decimals,
  maxDecimals,
  minDecimals,
  ...rest
}) {
  return (
    <Number
      {...rest}
      value={value}
      valueDecimals={decimals}
      valueMaxDecimals={maxDecimals}
      valueMinDecimals={minDecimals}
    />
  );
}

Value.defaultProps = {
  maxDecimals: null,
  minDecimals: null,
  decimals: 2,
};

Value.propTypes = {
  value: PropTypes.any.isRequired, // eslint-disable-line
  decimals: PropTypes.number,
  maxDecimals: PropTypes.number,
  minDecimals: PropTypes.number,
};
