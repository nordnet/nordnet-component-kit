function iso8601(localTime) {
  const localDate = new Date(localTime);
  const offset = localDate.getTimezoneOffset() * 60 * 1000;
  const utc = localDate.getTime() - offset;

  const isoString = new Date(utc).toISOString();

  const ranges = {
    year: [0, 4],
    month: [5, 7],
    day: [8, 10],
    hour: [11, 13],
    minute: [14, 16],
    second: [17, 19],
  };

  // Shorthands
  ranges.date = [0, 10];
  ranges.time = [11, 19];
  ranges.HH = ranges.hour;
  ranges.MM = ranges.minute;
  ranges.SS = ranges.second;

  return {
    get: (type, range) => {
      const args = ranges[type] || range;
      return isoString.substring(...args);
    },
  };
}

export default iso8601;
