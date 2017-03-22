import React, { PropTypes } from 'react';
import RowInfo from './row-info';

const IconListRow = ({ children, minHeight, infoPaddingLeft, infoPaddingRight, iconMarginLeft, iconMarginRight }) => {
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
  };
  const iconStyles = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: iconMarginLeft,
    marginRight: iconMarginRight,
  };
  return (
    <div style={outerStyles}>
      <div style={iconStyles}>
        {children[0]}
      </div>
      <div style={rowStyles}>
        <RowInfo>
          {children[1]}
          {children[3]}
        </RowInfo>
        <RowInfo bottom>
          {children[2]}
          {children[4]}
        </RowInfo>
      </div>
    </div>
  );
};

IconListRow.propTypes = {
  children: PropTypes.node.isRequired,
  minHeight: PropTypes.string,
  infoPaddingLeft: PropTypes.string,
  infoPaddingRight: PropTypes.string,
  iconMarginLeft: PropTypes.string,
  iconMarginRight: PropTypes.string,
};

IconListRow.defaultProps = {
  minHeight: '100%',
  infoPaddingLeft: '0',
  infoPaddingRight: '0',
  iconMarginLeft: '1rem',
  iconMarginRight: '2rem',
};

export default IconListRow;
