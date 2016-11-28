export default {
  relativeSizeSm: `${(12 / 16) * 100}%`, // Assumes default font-size of 16 pixels
  style: {
    screenReaderOnly: {
      position: 'absolute',
      width: '1px',
      height: '1px',
      padding: 0,
      margin: '-1px',
      overflow: 'hidden',
      clip: 'rect(0,0,0,0)',
      border: 0,
    },
    developmentArrowContainer: {
      position: 'relative',
      verticalAlign: 'baseline',
    },
    developmentArrow: {
      marginRight: '.2em',
      fill: 'currentColor',
      height: '0.6em',
      width: '0.6em',
    },
  },
};
