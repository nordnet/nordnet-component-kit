import React, { PropTypes } from 'react';

const RowInfo = ({ children, bottom }) => {
  const styles = {
    display: 'flex',
    justifyContent: 'space-between',
    paddingTop: '0.25rem',
    paddingBottom: '0.25rem',
    alignItems: (bottom ? null : 'baseline'),
  };

  return (
    <div style={styles}>
      {children[0]}
      {children[1]}
    </div>
  );
};

RowInfo.propTypes = {
  children: PropTypes.node.isRequired,
  bottom: PropTypes.bool,
};

RowInfo.defaultProps = {
  bottom: false,
};

export default RowInfo;
