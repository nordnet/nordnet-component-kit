const relativeSizeSm = '(12 / 16) * 100'; // Assumes default font-size of 16 pixels

export default {
  relativeSizeSm: `${relativeSizeSm}%`,
  style: {
    screeReaderOnly: {
      position: 'absolute',
      width: '1px',
      height: '1px',
      padding: 0,
      margin: '-1px',
      overflow: 'hidden',
      clip: 'rect(0,0,0,0)',
      border: 0,
    },
    developmentArrow: {
      position: 'relative',
      verticalAlign: 'baseline',
      marginRight: '.5rem',
      fontSize: `${relativeSizeSm}%`,
    },
  },
};
