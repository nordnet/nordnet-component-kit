import PropTypes from 'prop-types';
import React from 'react';
import classNames from 'classnames';

/**
  This component is not intended for public use
*/
export default function Addon({
  className,
  children,
  ...rest
}) {
  const classes = classNames('addon', className);

  return (
    <span {...rest} className={classes}>
      { children }
    </span>
  );
}

Addon.defaultProps = {
  className: '',
};

Addon.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};