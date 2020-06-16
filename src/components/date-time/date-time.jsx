import PropTypes from 'prop-types';
import React from 'react';
import { FormattedDate, FormattedTime, FormattedRelativeTime } from 'react-intl';
import { selectUnit } from '@formatjs/intl-utils';
import DateTimeIso from '../date-time-iso/date-time-iso';
import formats from './date-time-formats';
import { valuePropType } from '../../utils';

const isInvalid = value =>
  typeof value === 'undefined' || value === null || String(value) === 'Invalid Date' || String(new Date(value)) === 'Invalid Date';

/**
  This is the `<DateTime /> component`
*/
function DateTime({ value, format, type, iso, useDashForInvalidValues, ...rest }) {
  if (useDashForInvalidValues && isInvalid(value)) {
    return (
      <span {...rest} aria-hidden="true">
        –
      </span>
    );
  }

  if (iso) {
    return <DateTimeIso value={value} {...rest} />;
  }

  const components = {
    date: FormattedDate,
    relative: FormattedRelativeTime,
    time: FormattedTime,
  };
  const Component = components[type];
  if (type === 'relative') {
    const { value: relativeValue, unit } = selectUnit(value);
    return <Component value={relativeValue} unit={unit} {...rest} numeric={format === 'human' ? 'auto' : 'always'} />;
  }

  return <Component {...rest} {...formats[type][format]} value={value} />;
}

DateTime.defaultProps = {
  format: 'numeric',
  iso: false,
  type: 'date',
  useDashForInvalidValues: false,
};

DateTime.propTypes = {
  format: PropTypes.oneOf(['numeric', 'human']),
  /**
    Only applicable for dates, indicates that the date should follow [ISO 8601](https://sv.wikipedia.org/wiki/ISO_8601)
  */
  iso: PropTypes.bool,
  /**
    A timestamp.
  */
  value: valuePropType,
  type: PropTypes.oneOf(['date', 'time', 'relative']),
  useDashForInvalidValues: PropTypes.bool,
};

export default DateTime;
