export default {
  date: {
    numeric: {
      day: 'numeric',
      month: 'numeric',
      year: 'numeric',
    },
    human: {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    },
  },
  time: {
    numeric: {
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric',
    },
    human: {
      hour: 'numeric',
      minute: 'numeric',
    },
  },
  relative: {
    numeric: {
      style: 'numeric',
    },
    human: {
      style: 'best fit',
    },
  },
};
