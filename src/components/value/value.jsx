import React from 'react';
import Number from '../number/number';

/**
  This is the `<Value /> component`
*/
export default function Value({
  value,
  decimals,
  ...rest,
}) {
  return (
    <Number
      { ...rest }
      valueDecimals={ decimals }
      value={ value }
    />
  );
}

Value.propTypes = {
  value: React.PropTypes.any.isRequired,
  decimals: React.PropTypes.number,
};

Value.defaultProps = {
  decimals: 2,
};
