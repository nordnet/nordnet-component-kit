import React from 'react';
import classNames from 'classnames';
import NumberComponent from '../number/number';
import CurrencyComponent from '../currency/currency';
import PercentComponent from '../percent/percent';

function renderSign(direction) {
  switch (direction) {
    case 'positive':
      return (<span dangerouslySetInnerHTML={{ __html: '&plus; ' }} />); // eslint-disable-line
    case 'negative':
      return (<span dangerouslySetInnerHTML={{ __html: '&minus; ' }} />); // eslint-disable-line
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
  decimals,
  type,
  direction,
  className,
  maxDecimals,
  minDecimals,
  positiveDirectionColor,
  neutralDirectionColor,
  negativeDirectionColor,
  fontStyle,
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

  const fontStyles = Object.assign({}, fontStyle);

  if (developmentDirection === 'positive' && positiveDirectionColor) {
    fontStyles.color = positiveDirectionColor;
  }
  if (developmentDirection === 'negative' && negativeDirectionColor) {
    fontStyles.color = negativeDirectionColor;
  }
  if (developmentDirection === 'neutral' && neutralDirectionColor) {
    fontStyles.color = neutralDirectionColor;
  }

  return (
    <span style={fontStyles}>
      <Component
        {...rest}
        className={classes}
        value={Math.abs(parseFloat(value))}
        valueDecimals={decimals}
        valueMaxDecimals={maxDecimals}
        valueMinDecimals={minDecimals}
        prefix={renderSign(developmentDirection)}
        prefixStyle={rest.prefixStyle}
      />
    </span>
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
  positiveDirectionColor: React.PropTypes.string,
  neutralDirectionColor: React.PropTypes.string,
  negativeDirectionColor: React.PropTypes.string,
  fontStyle: React.PropTypes.object,
};

Development.defaultProps = {
  type: 'number',
};
