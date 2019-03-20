import PropTypes from 'prop-types';
import React from 'react';
import classNames from 'classnames';

/**
  This component is not intended for public use
*/
export default function Addon({ addon, className, position, separator, ...rest }) {
  if (addon === null) {
    return null;
  }

  const classes = classNames('addon', `addon--${position}`, className);

  return (
    <span {...rest} className={classes} aria-hidden>
      {position === 'right' ? separator : null}
      {addon}
      {position === 'left' ? separator : null}
    </span>
  );
}

Addon.defaultProps = {
  addon: null,
};

Addon.propTypes = {
  addon: PropTypes.node,
  className: PropTypes.string,
  position: PropTypes.oneOf(['left', 'right']),
  separator: PropTypes.string,
};
