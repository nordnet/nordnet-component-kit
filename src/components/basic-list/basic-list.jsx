import React, { PropTypes } from 'react';

const BasicList = ({ children, lineColor, lineThickness, lineOpacity, marginTop, marginBottom, style, ...rest }) => {
  const styles = Object.assign({}, {
    backgroundColor: lineColor,
    height: lineThickness,
    opacity: lineOpacity,
    marginTop,
    marginBottom,
    border: '0px',
  }, style);

  return (
    <ul>
      {children.length > 0 && children.map((child, index) => (
        <li key={child.key} style={{ listStyle: 'none' }}>
          {index !== 0 ? (<hr style={styles} {...rest} />) : null}
          {child}
        </li>
      ))}
    </ul>
  );
};

BasicList.propTypes = {
  children: PropTypes.arrayOf(PropTypes.shape({
    key: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  })).isRequired,
  lineColor: PropTypes.string,
  lineThickness: PropTypes.string,
  lineOpacity: PropTypes.number,
  marginTop: PropTypes.string,
  marginBottom: PropTypes.string,
  style: PropTypes.string,
};

BasicList.defaultProps = {
  children: [],
  lineColor: '#C8C8C8',
  lineThickness: '1px',
  lineOpacity: 0.3,
  marginTop: '0',
  marginBottom: '0',
  style: '',
};

export default BasicList;
