import React from 'react';
import PropTypes from 'prop-types';
import { FormattedDate, FormattedTime, FormattedRelative } from 'react-intl';
import DateTimeIso from '../date-time-iso/date-time-iso';
import formats from './date-time-formats';

/**
  This is the `<DateTime /> component`
*/
function DateTime({
  value,
  format,
  type,
  iso,
  ...rest
}) {
  if (iso) {
    return <DateTimeIso value={value} {...rest} />;
  }

  const components = {
    date: FormattedDate,
    relative: FormattedRelative,
    time: FormattedTime,
  };
  const Component = components[type];

  return (
    <Component
      {...rest}
      {...formats[type][format]}
      value={value}
    />
  );
}

DateTime.defaultProps = {
  format: 'numeric',
  iso: false,
  type: 'date',
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
  value: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.instanceOf(Date),
  ]).isRequired,
  type: PropTypes.oneOf(['date', 'time', 'relative']),
};

export default DateTime;
