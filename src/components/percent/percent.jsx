import React from 'react';
import Number from '../number/number';

/**
  This is the `<Percent /> component`
*/
export default function Percent({
  decimals,
  ...rest,
}) {
  return (
    <Number
      { ...rest }
      valueDecimals={ decimals }
      suffix="%"
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
