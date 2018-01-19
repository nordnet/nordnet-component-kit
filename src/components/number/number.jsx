import PropTypes from 'prop-types';
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
  className: PropTypes.string,
  style: PropTypes.object,
  value: PropTypes.any.isRequired, // eslint-disable-line
  valueClass: PropTypes.string,
  valueDecimals: PropTypes.number,
  valueMaxDecimals: PropTypes.number,
  valueMinDecimals: PropTypes.number,
  valueStyle: PropTypes.object,
  prefix: PropTypes.node,
  prefixClass: PropTypes.string,
  prefixSeparator: PropTypes.string,
  prefixStyle: PropTypes.object,
  suffix: PropTypes.node,
  suffixClass: PropTypes.string,
  suffixSeparator: PropTypes.string,
  suffixStyle: PropTypes.object,
  ticks: PropTypes.arrayOf(PropTypes.shape({
    decimals: PropTypes.number,
    to_price: PropTypes.number,
    from_price: PropTypes.number,
    tick: PropTypes.number,
  })),
  intl: intlShape.isRequired, // eslint-disable-line react/no-typos
};

Number.defaultProps = {
  valueDecimals: 2,
  prefixSeparator: '',
  suffixSeparator: '',
};

export default injectIntl(Number);