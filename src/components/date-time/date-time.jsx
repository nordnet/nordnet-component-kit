import React from 'react';
import { FormattedDate, FormattedRelative } from 'react-intl';
import DateTimeIso from '../date-time-iso/date-time-iso';
import formats from './date-time-formats';

function DateTime({
  value,
  format,
  type,
  iso,
  ...rest,
}) {
  if (iso) {
    return <DateTimeIso value={ value } { ...rest } />;
  }

  const components = {
    date: FormattedDate,
    relative: FormattedRelative,
  };
  const Component = components[type];

  return (
    <Component
      { ...rest }
      { ...formats[type][format] }
      value={ value }
    />
  );
}

DateTime.propTypes = {
  /**
    Possible values are `'numeric'` or `'human'`
  */
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
  type: React.PropTypes.oneOf(['date', 'relative']),
};


DateTime.defaultProps = {
  format: 'numeric',
  iso: false,
  type: 'date',
};

export default DateTime;
