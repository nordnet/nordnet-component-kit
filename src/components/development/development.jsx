import PropTypes from 'prop-types';
import React from 'react';
import classNames from 'classnames';
import NumberComponent from '../number/number';
import CurrencyComponent from '../currency/currency';
import PercentComponent from '../percent/percent';
import { valuePropType, round } from '../../utils';

function renderSign(direction) {
  switch (direction) {
    case 'positive':
      return <span dangerouslySetInnerHTML={{ __html: '&plus; ' }} />;
    case 'negative':
      return <span aria-label="&minus;" dangerouslySetInnerHTML={{ __html: '&ndash; ' }} />;
    default:
      return <span />;
  }
}

function getDirection(value, maxDecimals, decimals) {
  const dec = maxDecimals || decimals;
  const fixedValue = round(value, dec);
  if (fixedValue > 0) {
    return 'positive';
  } else if (fixedValue < 0) {
    return 'negative';
  }
  return 'neutral';
}

function getDirectionColor(direction, colors) {
  return colors[direction];
}

function getDecimalProps(type, decimals, maxDecimals, minDecimals) {
  const isNumber = type === 'number';
  return {
    [isNumber ? 'valueDecimals' : 'decimals']: decimals,
    [isNumber ? 'valueMaxDecimals' : 'maxDecimals']: maxDecimals,
    [isNumber ? 'valueMinDecimals' : 'minDecimals']: minDecimals,
  };
}

/**
  This is the `<Development /> component`
*/
export default function Development({
  positiveColor: positive,
  negativeColor: negative,
  neutralColor: neutral,
  value,
  decimals,
  type,
  direction,
  className,
  maxDecimals,
  minDecimals,
  ...rest
}) {
  const components = {
    currency: CurrencyComponent,
    percentage: PercentComponent,
    number: NumberComponent,
  };
  const developmentDirection = direction || getDirection(value, maxDecimals, decimals);
  const Component = components[type] || components.number;
  const classes = classNames(`number--${developmentDirection}`, className);
  const style = {
    ...rest.style,
    color: getDirectionColor(developmentDirection, {
      positive,
      negative,
      neutral,
    }),
  };

  const decimalProps = getDecimalProps(type, decimals, maxDecimals, minDecimals);

  return (
    <Component
      {...rest}
      {...decimalProps}
      style={style}
      className={classes}
      value={Math.abs(parseFloat(value))}
      prefix={renderSign(developmentDirection)}
      prefixStyle={rest.prefixStyle}
    />
  );
}

Development.propTypes = {
  className: PropTypes.string,
  value: valuePropType,
  decimals: PropTypes.number,
  type: PropTypes.oneOf(['number', 'currency', 'percentage']),
  direction: PropTypes.oneOf(['positive', 'negative', 'neutral']),
  maxDecimals: PropTypes.number,
  minDecimals: PropTypes.number,
  positiveColor: PropTypes.string,
  neutralColor: PropTypes.string,
  negativeColor: PropTypes.string,
};

Development.defaultProps = {
  type: 'number',
};
