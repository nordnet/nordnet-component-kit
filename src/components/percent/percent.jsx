import React from 'react';
import PropTypes from 'prop-types';
import Number from '../number/number';

/**
  This is the `<Percent /> component`
*/
export default function Percent({
  value,
  decimals,
  minDecimals,
  maxDecimals,
  suffixSeparator,
  ...rest
}) {
  return (
    <Number
      {...rest}
      value={value}
      valueDecimals={decimals}
      valueMaxDecimals={maxDecimals}
      valueMinDecimals={minDecimals}
      suffix="%"
      suffixSeparator={suffixSeparator}
    />
  );
}

Percent.defaultProps = {
  maxDecimals: null,
  minDecimals: null,
  suffixSeparator: '',
  decimals: 2,
};

Percent.propTypes = {
  value: PropTypes.any.isRequired, // eslint-disable-line
  decimals: PropTypes.number,
  /**
    Default is an empty string (`''`)
  */
  suffixSeparator: PropTypes.string,
  maxDecimals: PropTypes.number,
  minDecimals: PropTypes.number,
};
