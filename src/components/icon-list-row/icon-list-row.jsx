import React, { PropTypes } from 'react';
import { TextIcon } from 'nordnet-ui-kit';
import RowInfo from './row-info';

const IconListRow = ({
  iconComponent,
  textIconText,
  topLeftComponent,
  bottomLeftComponent,
  topRightComponent,
  bottomRightComponent,
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
  const liStyles = {
    listStyle: 'none',
  };

  return (
    <div style={outerStyles}>
      <div style={iconPlacementStyles}>
        { iconComponent || <TextIcon text={textIconText} /> }
      </div>
      <ul style={rowStyles}>
        <li style={liStyles}>
          <RowInfo
            leftItem={topLeftComponent}
            rightItem={topRightComponent}
          />
        </li>
        <li style={liStyles}>
          <RowInfo
            bottom
            leftItem={bottomLeftComponent}
            rightItem={bottomRightComponent}
          />
        </li>
      </ul>
    </div>
  );
};

IconListRow.propTypes = {
  iconComponent: PropTypes.node,
  textIconText: PropTypes.node,
  topLeftComponent: PropTypes.node,
  bottomLeftComponent: PropTypes.node,
  topRightComponent: PropTypes.node,
  bottomRightComponent: PropTypes.node,
  minHeight: PropTypes.string,
  infoPaddingLeft: PropTypes.string,
  infoPaddingRight: PropTypes.string,
  iconMarginLeft: PropTypes.string,
  iconMarginRight: PropTypes.string,
};

IconListRow.defaultProps = {
  iconComponent: null,
  textIconText: null,
  topLeftComponent: null,
  bottomLeftComponent: null,
  topRightComponent: null,
  bottomRightComponent: null,
  minHeight: '100%',
  infoPaddingLeft: '0.6rem',
  infoPaddingRight: '0.6rem',
  iconMarginLeft: '1rem',
  iconMarginRight: '2rem',
};

export default IconListRow;
