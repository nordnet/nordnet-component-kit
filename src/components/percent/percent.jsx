import React from 'react';
import Number from '../number/number';

const Percent = ({
  decimals,
  ...rest,
}) => (
  <Number
    { ...rest }
    valueDecimals={ decimals }
    suffix="%"
  />
);

Percent.propTypes = {
  value: React.PropTypes.number.isRequired,
  decimals: React.PropTypes.number,
};

Percent.defaultProps = {
  suffixSeparator: '',
  decimals: 2,
};

export default Percent;
