import React from 'react';
import { FormattedNumber } from 'react-intl';
import classNames from 'classnames';
import Addon from '../addon/addon';

function renderAddon(addon, addonClasses, addonSeparator, addonStyle, position) {
  if (!addon) {
    return null;
  }

  const classes = classNames(`addon--${position}`, addonClasses);

  return (
    <Addon className={classes} style={addonStyle}>
      <span>
        { position === 'right' ? addonSeparator : null }
        { addon }
        { position === 'left' ? addonSeparator : null }
      </span>
    </Addon>
  );
}

/**
  Returns the amount of decimals to display when `value >= from_price and value <= to_price`
  Defaults to `decimals` if no matching tick is found
*/
function getDecimals(value, decimals, ticks) {
  if (!ticks || !value) {
    return decimals;
  }

  const tick = ticks.find(t => value >= t.from_price && value <= t.to_price);

  return tick && tick.decimals ? tick.decimals : decimals;
}

/**
  This component is not intended for public use
*/
export default function Number({
  className,
  style,
  value,
  valueClass,
  valueDecimals,
  valueStyle,
  prefix,
  prefixClass,
  prefixSeparator,
  prefixStyle,
  suffix,
  suffixClass,
  suffixSeparator,
  suffixStyle,
  ticks,
  ...rest,
}) {
  const classes = classNames('number', className);
  const styles = Object.assign({}, {
    whiteSpace: 'nowrap',
  }, style);

  const decimals = getDecimals(value, valueDecimals, ticks);

  return (
    <span {...rest} className={classes} style={styles}>
      { renderAddon(prefix, prefixClass, prefixSeparator, prefixStyle, 'left') }
      <span className={valueClass} style={valueStyle}>
        <FormattedNumber
          value={value}
          minimumFractionDigits={decimals}
          maximumFractionDigits={decimals}
        />
      </span>
      { renderAddon(suffix, suffixClass, suffixSeparator, suffixStyle, 'right') }
    </span>
  );
}

Number.propTypes = {
  className: React.PropTypes.string,
  style: React.PropTypes.object,
  value: React.PropTypes.any.isRequired,
  valueClass: React.PropTypes.string,
  valueDecimals: React.PropTypes.number,
  valueStyle: React.PropTypes.object,
  prefix: React.PropTypes.node,
  prefixClass: React.PropTypes.string,
  prefixSeparator: React.PropTypes.string,
  prefixStyle: React.PropTypes.object,
  suffix: React.PropTypes.node,
  suffixClass: React.PropTypes.string,
  suffixSeparator: React.PropTypes.string,
  suffixStyle: React.PropTypes.object,
  ticks: React.PropTypes.arrayOf(React.PropTypes.shape({
    /* eslint-disable react/no-unused-prop-types */
    decimals: React.PropTypes.number,
    to_price: React.PropTypes.number,
    from_price: React.PropTypes.number,
    /* eslint-enable react/no-unused-prop-types */
  })),
};

Number.defaultProps = {
  valueDecimals: 2,
  prefixSeparator: '',
  suffixSeparator: '',
};
