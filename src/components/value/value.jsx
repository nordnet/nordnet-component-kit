import PropTypes from 'prop-types';
import React from 'react';
import Number from '../number/number';
import { valuePropType } from '../../utils';

/**
  This is the `<Value /> component`
*/
export default function Value({ value, decimals, maxDecimals, minDecimals, ...rest }) {
  return <Number {...rest} value={value} valueDecimals={decimals} valueMaxDecimals={maxDecimals} valueMinDecimals={minDecimals} />;
}

Value.defaultProps = {
  maxDecimals: null,
  minDecimals: null,
  decimals: 2,
};

Value.propTypes = {
  value: valuePropType,
  decimals: PropTypes.number,
  maxDecimals: PropTypes.number,
  minDecimals: PropTypes.number,
};
