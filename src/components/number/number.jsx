import React from 'react';
import { FormattedNumber } from 'react-intl';
import classNames from 'classnames';
import Addon from '../addon/addon';
import './number.scss';

function renderAddon(addon, addonClasses, addonSeparator, position) {
  if (!addon) {
    return null;
  }

  return (
    <Addon className={ addonClasses }>
      <span>
        { position === 'right' ? addonSeparator : null }
        { addon }
        { position === 'left' ? addonSeparator : null }
      </span>
    </Addon>
  );
}

const Number = ({
  className,
  value,
  valueClass,
  valueDecimals,
  prefix,
  prefixClass,
  prefixSeparator,
  suffix,
  suffixClass,
  suffixSeparator,
  ...rest,
}) => {
  const classes = classNames('number', className);
  return (
    <span { ...rest } className={ classes }>
      { renderAddon(prefix, prefixClass, prefixSeparator, 'left') }
      <FormattedNumber
        className={ valueClass }
        value={ value }
        minimumFractionDigits={ valueDecimals }
        maximumFractionDigits={ valueDecimals }
      />
      { renderAddon(suffix, suffixClass, suffixSeparator, 'right') }
    </span>
  );
};

Number.propTypes = {
  className: React.PropTypes.string,
  value: React.PropTypes.number.isRequired,
  valueClass: React.PropTypes.string,
  valueDecimals: React.PropTypes.number,
  prefix: React.PropTypes.node,
  prefixClass: React.PropTypes.string,
  prefixSeparator: React.PropTypes.string,
  suffix: React.PropTypes.node,
  suffixClass: React.PropTypes.string,
  suffixSeparator: React.PropTypes.string,
};

Number.defaultProps = {
  className: '',
  valueClass: '',
  valueDecimals: 2,
  prefixClass: '',
  prefixSeparator: '',
  suffixClass: '',
  suffixSeparator: '',
};

export default Number;
