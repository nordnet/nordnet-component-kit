import React from 'react';
import classNames from 'classnames';
import NumberComponent from '../number/number';
import CurrencyComponent from '../currency/currency';
import PercentComponent from '../percent/percent';
import variables from '../../variables';

const path = {
  positive: 'M0,16 L16,16 L8,0',
  negative: 'M0,0 L16,0 L8,16',
};

function renderSVGArrow(direction = 'neutral') {
  return (
    <svg
      aria-hidden="true"
      role="presentation"
      viewBox="0 0 16 16"
      style={ variables.style.developmentArrow }
    >
      <path d={ path[direction] } />
    </svg>
  );
}

function renderArrow(direction) {
  return (
    <span>
      { direction !== 'neutral' ? renderSVGArrow(direction) : null }
      { direction === 'negative' ? renderSRMinus() : null }
    </span>
  );
}

function renderSRMinus() {
  return (
    <span
      style={ variables.style.screenReaderOnly }
      dangerouslySetInnerHTML={ { __html: '&minus;' } }
    />
  );
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
  decimals,
  type,
  direction,
  className,
  ...rest,
}) {
  const components = {
    currency: CurrencyComponent,
    percentage: PercentComponent,
    number: NumberComponent,
  };
  const arrowDirection = direction || getDirection(value);
  const Component = components[type] || components.number;
  const classes = classNames(`number--${arrowDirection}`, className);

  return (
    <Component
      { ...rest }
      className={ classes }
      value={ Math.abs(parseFloat(value)) }
      valueDecimals={ decimals }
      prefix={ renderArrow(arrowDirection) }
      prefixStyle={ Object.assign({}, variables.style.developmentArrowContainer, rest.prefixStyle) }
    />
  );
}

Development.propTypes = {
  className: React.PropTypes.string,
  value: React.PropTypes.any.isRequired,
  decimals: React.PropTypes.number,
  type: React.PropTypes.oneOf(['number', 'currency', 'percentage']),
  direction: React.PropTypes.oneOf(['positive', 'negative', 'neutral']),
};

Development.defaultProps = {
  type: 'number',
};
