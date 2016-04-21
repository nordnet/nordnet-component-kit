import React from 'react';
import classNames from 'classnames';
import Number from '../number/number';
import Currency from '../currency/currency';
import Percent from '../percent/percent';
import './development.scss';

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
      className="sr-only"
      dangerouslySetInnerHTML={{ __html: '&minus;' }}
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
      className={ classNames('development', `development--is-${direction}`, rest.className) }
      value={ Math.abs(value) }
      valueDecimals={ decimals }
      prefix={ renderArrow(direction) }
      prefixClass="development__arrow"
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
