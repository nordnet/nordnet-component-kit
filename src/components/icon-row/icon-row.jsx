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
  infoPaddingLeft,
  infoPaddingRight,
  iconMarginLeft,
  iconMarginRight }) => {
  const outerStyles = {
    paddingTop: '1rem',
    paddingBottom: '1rem',
    width: '100%',
    color: '#373640',
    display: 'flex',
    minHeight,
  };
  const rowStyles = {
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'column',
    width: '100%',
    paddingLeft: infoPaddingLeft,
    paddingRight: infoPaddingRight,
    margin: 0,
  };
  const iconPlacementStyles = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: iconMarginLeft,
    marginRight: iconMarginRight,
  };

  return (
    <tag style={outerStyles}>
      <div style={iconPlacementStyles}>
        { icon }
      </div>
      <div style={rowStyles}>
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
  topLeft: PropTypes.node, // eslint-disable-line
  bottomLeft: PropTypes.node, // eslint-disable-line
  topRight: PropTypes.node, // eslint-disable-line
  bottomRight: PropTypes.node, // eslint-disable-line
  minHeight: PropTypes.string,
  infoPaddingLeft: PropTypes.string,
  infoPaddingRight: PropTypes.string,
  iconMarginLeft: PropTypes.string,
  iconMarginRight: PropTypes.string,
};

IconRow.defaultProps = {
  tag: 'li',
  icon: null,
  textIconText: '',
  minHeight: '100%',
  infoPaddingLeft: '0.6rem',
  infoPaddingRight: '0.6rem',
  iconMarginLeft: '1rem',
  iconMarginRight: '2rem',
};

export default IconRow;
