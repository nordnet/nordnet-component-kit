import React, { PropTypes } from 'react';
import RowInfo from './row-info';

const IconRow = ({
  tag,
  icon,
  topLeft,
  bottomLeft,
  topRight,
  bottomRight,
  minHeight,
  ...divStyles,
  ...rowStyles,
  ...iconStyles }) => {
  const outerStyles = {
    paddingTop: '1rem',
    paddingBottom: '1rem',
    width: '100%',
    color: '#373640',
    display: 'flex',
    minHeight,
    ...divStyles,
  };
  const listRowStyles = {
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'column',
    width: '100%',
    paddingLeft: '0.6rem',
    paddingRight: '0.6rem',
    margin: 0,
    ...rowStyles,
  };
  const iconPlacementStyles = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: '1rem',
    marginRight: '2rem',
    ...iconStyles
  };

  return (
    <tag style={outerStyles}>
      <div style={iconPlacementStyles}>
        { icon }
      </div>
      <div style={listRowStyles}>
        <RowInfo
          leftItem={topLeft}
          rightItem={topRight}
        />
        <RowInfo
          alignBaseline
          leftItem={bottomLeft}
          rightItem={bottomRight}
        />
      </div>
    </tag>
  );
};

IconRow.propTypes = {
  tag: PropTypes.string,
  icon: PropTypes.node, // eslint-disable-line
  topLeft: PropTypes.node, // eslint-disable-line
  bottomLeft: PropTypes.node, // eslint-disable-line
  topRight: PropTypes.node, // eslint-disable-line
  bottomRight: PropTypes.node, // eslint-disable-line
  minHeight: PropTypes.string,
  styles: PropTypes.string,
};

IconRow.defaultProps = {
  tag: 'li',
  textIconText: '',
  minHeight: '100%',
};

export default IconRow;
