import PropTypes from 'prop-types';

export function numberIsFinite(value) {
  return typeof value === 'number' && isFinite(value); // eslint-disable-line
}

export function getTickDecimals(value, ticks) {
  if (!ticks || !value) {
    return undefined;
  }

  const tick = ticks.find(t => value >= t.from_price && value < t.to_price + (t.tick || 0));

  return tick ? tick.decimals : undefined;
}

export function getFractionDigits(...args) {
  return args.find(numberIsFinite);
}

export const getDevelopmentPercentage = (previous, current) => {
  if (!numberIsFinite(current) || !numberIsFinite(previous)) {
    return 0;
  }
  return (current / previous - 1) * 100;
};

const propTypeValue = {
  value: PropTypes.any,
};

const propTypeValueRequired = {
  value: PropTypes.any.isRequired,
};

export const valuePropType = (props, propName, componentName) => {
  const { useDashForInvalidValues } = props;

  if (useDashForInvalidValues) {
    return PropTypes.checkPropTypes(propTypeValue, props, propName, componentName);
  }

  return PropTypes.checkPropTypes(propTypeValueRequired, props, propName, componentName);
};
