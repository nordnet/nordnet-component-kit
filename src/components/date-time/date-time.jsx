import React from 'react';
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
  ...rest,
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

DateTime.propTypes = {
  format: React.PropTypes.oneOf(['numeric', 'human']),
  /**
    Only applicable for dates, indicates that the date should follow [ISO 8601](https://sv.wikipedia.org/wiki/ISO_8601)
  */
  iso: React.PropTypes.bool,
  /**
    A timestamp.
  */
  value: React.PropTypes.oneOfType([
    React.PropTypes.number,
    React.PropTypes.instanceOf(Date),
  ]).isRequired,
  type: React.PropTypes.oneOf(['date', 'time', 'relative']),
};


DateTime.defaultProps = {
  iso: false,
  type: 'date',
};

export default DateTime;
