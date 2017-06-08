import React, { PropTypes } from 'react';
import RowInfo from './row-info';

const IconRow = ({
  Tag,
  icon,
  topLeft,
  bottomLeft,
  topRight,
  bottomRight,
  minHeight,
  style,
  rowStyles,
  iconStyles }) => {
  const divStyles = Object.assign({
    paddingTop: '1rem',
    paddingBottom: '1rem',
    width: '100%',
    color: '#373640',
    display: 'flex',
    minHeight,
  }, style);
  const listRowStyles = Object.assign({
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'column',
    width: '100%',
    paddingLeft: '0.6rem',
    paddingRight: '0.6rem',
    margin: 0,
    height: '40px',
  }, rowStyles);
  const iconPlacementStyles = Object.assign({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: '1rem',
  }, iconStyles);

  return (
    <Tag style={divStyles}>
      <div style={iconPlacementStyles}>
        { icon }
      </div>
      <span style={{ width: '100%', display: 'flex', alignItems: 'center' }}>
        <span style={listRowStyles}>
          <RowInfo
            leftItem={topLeft}
            rightItem={topRight}
          />
          <RowInfo
            alignBaseline
            leftItem={bottomLeft}
            rightItem={bottomRight}
          />
        </span>
      </span>
    </Tag>
  );
};

IconRow.propTypes = {
  Tag: PropTypes.string,
  icon: PropTypes.node,
  topLeft: PropTypes.node,
  bottomLeft: PropTypes.node,
  topRight: PropTypes.node,
  bottomRight: PropTypes.node,
  minHeight: PropTypes.string,
  style: PropTypes.object,
  rowStyles: PropTypes.object,
  iconStyles: PropTypes.object,
};

IconRow.defaultProps = {
  Tag: 'li',
  minHeight: '100%',
};

export default IconRow;
