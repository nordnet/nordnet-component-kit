import React from 'react';
import isoDate from './iso-date';

/**
  This component is not intended for public use
*/
export default function DateTimeIso({
  value,
  hour,
  minute,
  second,
  ...rest,
}) {
  const iso = isoDate(value);
  let dateString;

  if (second) {
    dateString = `${iso.get('date')} ${iso.get('time')}`;
  } else if (minute) {
    dateString = `${iso.get('date')} ${iso.get('HH')}:${iso.get('MM')}`;
  } else if (hour) {
    dateString = `${iso.get('date')} ${iso.get('HH')}`;
  } else {
    dateString = `${iso.get('date')}`;
  }

  return (
    <span {...rest}>
      { dateString }
    </span>
  );
}

DateTimeIso.defaultProps = {
  hour: false,
  minute: false,
  second: false,
};

DateTimeIso.propTypes = {
  value: React.PropTypes.oneOfType([
    React.PropTypes.number,
    React.PropTypes.instanceOf(Date),
  ]).isRequired,
  hour: React.PropTypes.oneOfType([
    React.PropTypes.bool,
    React.PropTypes.string,
  ]),
  minute: React.PropTypes.oneOfType([
    React.PropTypes.bool,
    React.PropTypes.string,
  ]),
  second: React.PropTypes.oneOfType([
    React.PropTypes.bool,
    React.PropTypes.string,
  ]),
};
