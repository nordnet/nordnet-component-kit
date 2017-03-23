import React, { PropTypes } from 'react';

const RowInfo = ({ leftItem, rightItem, bottom }) => {
  const styles = {
    display: 'flex',
    justifyContent: 'space-between',
    paddingTop: '0.25rem',
    paddingBottom: '0.25rem',
    alignItems: (bottom ? null : 'baseline'),
  };

  return (
    <div style={styles}>
      {leftItem}
      {rightItem}
    </div>
  );
};

RowInfo.propTypes = {
  leftItem: PropTypes.node,
  rightItem: PropTypes.node,
  bottom: PropTypes.bool,
};

RowInfo.defaultProps = {
  leftItem: null,
  rightItem: null,
  bottom: false,
};

export default RowInfo;
