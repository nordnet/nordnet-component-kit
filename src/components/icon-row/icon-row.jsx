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
  outerStyles,
  rowStyles,
  iconStyles }) => {
  const divStyles = Object.assign({
    paddingTop: '1rem',
    paddingBottom: '1rem',
    width: '100%',
    color: '#373640',
    display: 'flex',
    minHeight,
  }, outerStyles);
  const listRowStyles = Object.assign({
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'column',
    width: '100%',
    paddingLeft: '0.6rem',
    paddingRight: '0.6rem',
    margin: 0,
  }, rowStyles);
  const iconPlacementStyles = Object.assign({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: '1rem',
    marginRight: '1rem',
  }, iconStyles);

  return (
    <tag style={divStyles}>
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
  icon: PropTypes.node,
  topLeft: PropTypes.node,
  bottomLeft: PropTypes.node,
  topRight: PropTypes.node,
  bottomRight: PropTypes.node,
  minHeight: PropTypes.string,
  outerStyles: PropTypes.object,
  rowStyles: PropTypes.object,
  iconStyles: PropTypes.object,
};

IconRow.defaultProps = {
  tag: 'li',
  minHeight: '100%',
};

export default IconRow;
