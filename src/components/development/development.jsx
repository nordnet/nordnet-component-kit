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

/**
  This is the `<Development /> component`
*/
export default function Development({
  value,
  type,
  direction,
  className,
  decimals,
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
  const isNumber = !type || type === 'number';
  const Component = components[type] || components.number;
  const classes = classNames(`number--${developmentDirection}`, className);

  const decimalProps = {
    [isNumber ? 'valueDecimals' : 'decimals']: decimals,
    [isNumber ? 'valueMaxDecimals' : 'maxDecimals']: maxDecimals,
    [isNumber ? 'valueMinDecimals' : 'minDecimals']: minDecimals,
  };

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
