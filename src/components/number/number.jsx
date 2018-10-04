import PropTypes from 'prop-types';
import React from 'react';
import { injectIntl, intlShape } from 'react-intl';
import classNames from 'classnames';
import Addon from '../addon/addon';
import { getTickDecimals, getFractionDigits } from '../../utils';

/**
  This component is not intended for public use
*/
function NumberComponent({
  className,
  useDashForInvalidValues,
  style,
  value: rawValue,
  valueClass,
  valueDecimals,
  valueMaxDecimals,
  valueMinDecimals,
  valueStyle,
  prefix,
  prefixClass,
  prefixSeparator,
  prefixStyle,
  suffix: rawSuffix,
  suffixClass,
  suffixSeparator,
  suffixStyle,
  ticks,
  abbreviation,
  intl: { formatNumber },
  ...rest
}) {
  const classes = classNames('number', className);
  const styles = Object.assign(
    {},
    {
      whiteSpace: 'nowrap',
    },
    style,
  );

  if (useDashForInvalidValues && !Number.isFinite(rawValue)) {
    return (
      <span {...rest} className={classes} style={styles} aria-hidden="true">
        –
      </span>
    );
  }

  let value = rawValue;
  let abbreviationSuffix = '';
  if (abbreviation === 'million') {
    // For the future, if we add "thousand", etc.
    // eslint-disable-next-line operator-assignment
    value = value / 1e6;
    abbreviationSuffix = 'M';
  }

  // if ()

  const tickDecimals = getTickDecimals(value, ticks);
  const minimumFractionDigits = getFractionDigits(tickDecimals, valueMinDecimals, valueDecimals);
  const maximumFractionDigits = getFractionDigits(tickDecimals, valueMaxDecimals, valueDecimals);
  const formattedNumber = formatNumber(value, { minimumFractionDigits, maximumFractionDigits });
  const absFormattedNumber = formatNumber(Math.abs(value), { minimumFractionDigits, maximumFractionDigits });
  const ariaSign = value < 0 ? '−' : '';
  const sign = value < 0 ? <span dangerouslySetInnerHTML={{ __html: '&ndash; ' }} /> : null;

  const suffix = (rawSuffix || abbreviation) && (
    <React.Fragment>
      {abbreviationSuffix}
      {rawSuffix || ''}
    </React.Fragment>
  );

  return (
    <span title={formattedNumber} {...rest} className={classes} style={styles}>
      <Addon addon={prefix} className={prefixClass} position="left" separator={prefixSeparator} style={prefixStyle} />
      <span className={valueClass} style={valueStyle} aria-label={`${ariaSign}${absFormattedNumber}`}>
        {sign}
        {absFormattedNumber}
      </span>
      <Addon addon={suffix} className={suffixClass} position="right" separator={suffixSeparator} style={suffixStyle} />
    </span>
  );
}

NumberComponent.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
  useDashForInvalidValues: PropTypes.bool,
  value: PropTypes.any.isRequired, // eslint-disable-line
  valueClass: PropTypes.string,
  valueDecimals: PropTypes.number,
  valueMaxDecimals: PropTypes.number,
  valueMinDecimals: PropTypes.number,
  valueStyle: PropTypes.object,
  abbreviation: PropTypes.oneOf(['million']),
  prefix: PropTypes.node,
  prefixClass: PropTypes.string,
  prefixSeparator: PropTypes.string,
  prefixStyle: PropTypes.object,
  suffix: PropTypes.node,
  suffixClass: PropTypes.string,
  suffixSeparator: PropTypes.string,
  suffixStyle: PropTypes.object,
  ticks: PropTypes.arrayOf(
    PropTypes.shape({
      decimals: PropTypes.number,
      to_price: PropTypes.number,
      from_price: PropTypes.number,
      tick: PropTypes.number,
    }),
  ),
  intl: intlShape.isRequired, // eslint-disable-line react/no-typos
};

NumberComponent.defaultProps = {
  valueDecimals: 2,
  prefixSeparator: '',
  suffixSeparator: '',
  useDashForInvalidValues: false,
  abbreviation: null,
};

export default injectIntl(NumberComponent);
