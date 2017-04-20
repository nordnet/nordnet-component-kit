import React from 'react';
import classNames from 'classnames';
import NumberComponent from '../number/number';
import CurrencyComponent from '../currency/currency';
import PercentComponent from '../percent/percent';

function renderSign(direction) {
  switch (direction) {
    case 'positive':
      return (<span dangerouslySetInnerHTML={{ __html: '&plus; ' }} />);
    case 'negative':
      return (<span dangerouslySetInnerHTML={{ __html: '&minus; ' }} />);
    default:
      return (<span />);
  }
}

function getDirection(value) {
  if (value > 0) {
    return 'positive';
  } else if (value < 0) {
    return 'negative';
  }
  return 'neutral';
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
  const developmentDirection = direction || getDirection(value);
  const Component = components[type] || components.number;
  const classes = classNames(`number--${developmentDirection}`, className);

  const decimalProps = getDecimalProps(type, decimals, maxDecimals, minDecimals);

  return (
    <Component
      {...rest}
      {...decimalProps}
      className={classes}
      value={Math.abs(parseFloat(value))}
      prefix={renderSign(developmentDirection)}
      prefixStyle={rest.prefixStyle}
    />
  );
}

Development.propTypes = {
  className: React.PropTypes.string,
  value: React.PropTypes.any.isRequired,
  decimals: React.PropTypes.number,
  type: React.PropTypes.oneOf(['number', 'currency', 'percentage']),
  direction: React.PropTypes.oneOf(['positive', 'negative', 'neutral']),
  maxDecimals: React.PropTypes.number,
  minDecimals: React.PropTypes.number,
};

Development.defaultProps = {
  type: 'number',
};
