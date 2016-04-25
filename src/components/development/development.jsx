import React from 'react';
import Number from '../number/number';
import Currency from '../currency/currency';
import Percent from '../percent/percent';
import { relativeSizeSm } from '../../variables';

const styleDevelopmentArrow = {
  position: 'relative',
  verticalAlign: 'baseline',
  marginRight: '.5rem',
  fontSize: `${relativeSizeSm}`,
};

const styleSROnly = {
  position: 'absolute',
  width: '1px',
  height: '1px',
  padding: '0',
  margin: '-1px',
  overflow: 'hidden',
  clip: 'rect(0,0,0,0)',
  border: '0',
};

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
      style={ styleSROnly }
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

export default function Development({
  value,
  decimals,
  type,
  ...rest,
}) {
  const components = {
    currency: Currency,
    percentage: Percent,
    number: Number,
  };
  const direction = getDirection(value);
  const Component = components[type] || components.number;

  return (
    <Component
      { ...rest }
      value={ Math.abs(value) }
      valueDecimals={ decimals }
      prefix={ renderArrow(direction) }
      prefixStyle={ styleDevelopmentArrow }
    />
  );
}

Development.propTypes = {
  value: React.PropTypes.number.isRequired,
  decimals: React.PropTypes.number,
  /**
    Possible values are `'number'`, `'currency'` or `'percentage'`
  */
  type: React.PropTypes.string,
};

Development.defaultProps = {
  type: 'number',
};
