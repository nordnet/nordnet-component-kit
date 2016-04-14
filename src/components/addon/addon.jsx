import React from 'react';
import classNames from 'classnames';

const Addon = ({
  className,
  children,
  ...rest,
}) => {
  const classes = classNames('addon', className);

  return (
    <span { ...rest } className={ classes }>
      { children }
    </span>
  );
};

Addon.propTypes = {
  className: React.PropTypes.string,
  children: React.PropTypes.node.isRequired,
};

export default Addon;
