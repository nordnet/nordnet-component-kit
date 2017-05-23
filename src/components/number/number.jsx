import React from 'react';
import { injectIntl, intlShape } from 'react-intl';
import classNames from 'classnames';
import Addon from '../addon/addon';
import { getTickDecimals, getFractionDigits } from '../../utils';

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
  This component is not intended for public use
*/
function Number({
  className,
  style,
  value,
  valueClass,
  valueDecimals,
  valueMaxDecimals,
  valueMinDecimals,
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
  intl: { formatNumber },
  ...rest
}) {
  const classes = classNames('number', className);
  const styles = Object.assign({}, {
    whiteSpace: 'nowrap',
  }, style);

  const tickDecimals = getTickDecimals(value, ticks);
  const minimumFractionDigits = getFractionDigits(tickDecimals, valueMinDecimals, valueDecimals);
  const maximumFractionDigits = getFractionDigits(tickDecimals, valueMaxDecimals, valueDecimals);
  const formattedNumber = formatNumber(value, { minimumFractionDigits, maximumFractionDigits });
  const absFormattedNumber = formatNumber(Math.abs(value), { minimumFractionDigits, maximumFractionDigits });
  const ariaSign = (value < 0) ? '−' : '';
  const sign = (value < 0) ? (<span dangerouslySetInnerHTML={{ __html: '&ndash; ' }} />) : null;

  return (
    <span title={formattedNumber} {...rest} className={classes} style={styles}>
      { renderAddon(prefix, prefixClass, prefixSeparator, prefixStyle, 'left') }
      <span
        className={valueClass}
        style={valueStyle}
        aria-label={`${ariaSign}${absFormattedNumber}`}
      >
        {sign}{absFormattedNumber}
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
  valueMaxDecimals: React.PropTypes.number,
  valueMinDecimals: React.PropTypes.number,
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
    decimals: React.PropTypes.number,
    to_price: React.PropTypes.number,
    from_price: React.PropTypes.number,
    tick: React.PropTypes.number,
  })),
  intl: intlShape.isRequired,
};

Number.defaultProps = {
  valueDecimals: 2,
  prefixSeparator: '',
  suffixSeparator: '',
};

export default injectIntl(Number);
