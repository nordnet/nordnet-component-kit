import PropTypes from 'prop-types';
import React from 'react';
import { injectIntl, intlShape } from 'react-intl';
import classNames from 'classnames';
import VisuallyHidden from '../visually-hidden/visually-hidden';
import Addon from '../addon/addon';
import { getTickDecimals, getFractionDigits, valuePropType } from '../../utils';

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
  ariaPrefix,
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

  if (!Number.isFinite(rawValue)) {
    if (useDashForInvalidValues) {
      return (
        <span {...rest} className={classes} style={styles} aria-hidden="true">
          –
        </span>
      );
    }
    return <span />;
  }

  let value = rawValue;
  let abbreviationSuffix = '';
  if (abbreviation === 'million') {
    // For the future, if we add "thousand", etc.
    // eslint-disable-next-line operator-assignment
    value = value / 1e6;
    abbreviationSuffix = 'M';
  }

  const tickDecimals = getTickDecimals(value, ticks);
  const minimumFractionDigits = getFractionDigits(tickDecimals, valueMinDecimals, valueDecimals);
  const maximumFractionDigits = getFractionDigits(tickDecimals, valueMaxDecimals, valueDecimals);
  const absFormattedNumber = formatNumber(Math.abs(value), { minimumFractionDigits, maximumFractionDigits });
  const sign = value < 0 ? <span dangerouslySetInnerHTML={{ __html: '&minus;&nbsp;' }} /> : null;
  const formatAriaNumber = n => {
    const afterDecimalSeparator = typeof n === 'undefined' ? 0 : n.toString().split('.')[1];
    const decimals = afterDecimalSeparator ? afterDecimalSeparator.length : 0;
    if (decimals <= maximumFractionDigits) return n;
    return Number.parseFloat(n).toFixed(maximumFractionDigits);
  };

  const suffix = (rawSuffix || abbreviation) && (
    <React.Fragment>
      {abbreviationSuffix}
      {rawSuffix || ''}
    </React.Fragment>
  );

  return (
    <span {...rest} className={classes} style={styles}>
      <Addon addon={prefix} className={prefixClass} position="left" separator={prefixSeparator} style={prefixStyle} />
      <VisuallyHidden>
        {ariaPrefix || prefix} {formatAriaNumber(value)} {suffix}
      </VisuallyHidden>
      <span className={valueClass} style={valueStyle} aria-hidden>
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
  value: valuePropType,
  valueClass: PropTypes.string,
  valueDecimals: PropTypes.number,
  valueMaxDecimals: PropTypes.number,
  valueMinDecimals: PropTypes.number,
  valueStyle: PropTypes.object,
  abbreviation: PropTypes.oneOf(['million']),
  prefix: PropTypes.node,
  ariaPrefix: PropTypes.string,
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
  ariaPrefix: '',
  prefixSeparator: '',
  suffixSeparator: '',
  useDashForInvalidValues: false,
  abbreviation: null,
};

export default injectIntl(NumberComponent);
