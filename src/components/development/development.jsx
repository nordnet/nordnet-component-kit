import React from 'react';
import Number from '../number/number';
import Currency from '../currency/currency';
import Percent from '../percent/percent';
import variables from '../../variables';

function renderArrow(direction) {
  const arrows = {
    positive: '▲',
    negative: '▼',
    neutral: '▶',
  };

  return (
    <span>
      <span aria-hidden="true">
        { arrows[direction] }
      </span>
        { renderSRMinus(direction) }
    </span>
  );
}

function renderSRMinus(direction) {
  if (direction !== 'negative') {
    return null;
  }
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
  ...rest,
}) {
  const components = {
    currency: Currency,
    percentage: Percent,
    number: Number,
  };
  const Component = components[type] || components.number;

  return (
    <Component
      { ...rest }
      value={ Math.abs(parseFloat(value)) }
      valueDecimals={ decimals }
      prefix={ direction ? renderArrow(direction) : renderArrow(getDirection(value)) }
      prefixStyle={ Object.assign({}, variables.style.developmentArrow, rest.prefixStyle) }
    />
  );
}

Development.propTypes = {
  value: React.PropTypes.any.isRequired,
  decimals: React.PropTypes.number,
  type: React.PropTypes.oneOf(['number', 'currency', 'percentage']),
  direction: React.PropTypes.oneOf(['positive', 'negative', 'neutral']),
};

Development.defaultProps = {
  type: 'number',
};
