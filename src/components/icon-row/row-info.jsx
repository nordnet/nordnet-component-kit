import React, { PropTypes } from 'react';

const RowInfo = ({ leftItem, rightItem, alignBaseline }) => {
  const styles = {
    display: 'flex',
    justifyContent: 'space-between',
    paddingTop: '0.25rem',
    paddingBottom: '0.25rem',
    alignItems: (alignBaseline ? null : 'baseline'),
  };

  return (
    <div style={styles}>
      {leftItem}
      {rightItem}
    </div>
  );
};

RowInfo.propTypes = {
  leftItem: PropTypes.node, // eslint-disable-line
  rightItem: PropTypes.node, // eslint-disable-line
  alignBaseline: PropTypes.bool,
};

RowInfo.defaultProps = {
  alignBaseline: false,
};

export default RowInfo;
