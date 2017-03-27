import React, { PropTypes } from 'react';
import { TextIcon } from 'nordnet-ui-kit';
import RowInfo from './row-info';

const IconRow = ({
  tag,
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
  if (!topLeftComponent && !bottomLeftComponent && !topRightComponent && !bottomRightComponent) {
    throw new Error(
      'Component requires at least one of the following: topLeftComponent, topRightComponent, bottomLeftComponent, bottomRightComponent');
  }

  if (!iconComponent && !textIconText) {
    throw new Error(
      'Component requires at least one of the following: iconComponent, textIconText');
  }

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
        { iconComponent || <TextIcon text={textIconText} /> }
      </div>
      <div style={rowStyles}>
        <RowInfo
          leftItem={topLeftComponent}
          rightItem={topRightComponent}
        />
        <RowInfo
          bottom
          leftItem={bottomLeftComponent}
          rightItem={bottomRightComponent}
        />
      </div>
    </tag>
  );
};

IconRow.propTypes = {
  tag: PropTypes.string,
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

IconRow.defaultProps = {
  tag: 'li',
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

export default IconRow;
