import React from 'react';
import isoDate from './iso-date';

const DateTimeIso = ({
  value,
  hour,
  minute,
  second,
  ...rest,
}) => {
  const iso = isoDate(value);
  let dateString;

  if (second) {
    dateString = `${iso.get('date')} ${iso.get('time')}`;
  } else if (minute) {
    dateString = `${iso.get('date')} ${iso.get('HH')}:${iso.get('MM')}`;
  } else if (hour) {
    dateString = `${iso.get('date')} ${iso.get('HH')}:${iso.get('MM')}:${iso.get('SS')}`;
  }

  return (
    <span { ...rest }>
      { dateString }
    </span>
  );
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

DateTimeIso.defaultProps = {
  type: 'date',
};

export default DateTimeIso;
