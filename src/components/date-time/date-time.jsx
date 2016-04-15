import React from 'react';
import { FormattedDate, FormattedRelative } from 'react-intl';
import DateTimeIso from '../date-time-iso/date-time-iso';
import formats from './date-time-formats';

const DateTime = ({
  value,
  format,
  type,
  iso,
  ...rest,
}) => {
  if (iso) {
    return <DateTimeIso value={value} { ...rest } />;
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
};

DateTime.propTypes = {
  format: React.PropTypes.string,
  iso: React.PropTypes.bool,
  value: React.PropTypes.oneOfType([
    React.PropTypes.number,
    React.PropTypes.instanceOf(Date),
  ]).isRequired,
  type: React.PropTypes.string,
};


DateTime.defaultProps = {
  format: 'numeric',
  iso: false,
  type: 'date',
};

export default DateTime;
