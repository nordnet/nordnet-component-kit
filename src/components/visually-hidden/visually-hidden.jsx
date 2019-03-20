import React from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';

const VisuallyHidden = ({ children, classes }) => <span className={classes.screenReadersOnly}>{children}</span>;

VisuallyHidden.propTypes = {
  children: PropTypes.node.isRequired,
  classes: PropTypes.shape().isRequired,
};

const styles = {
  screenReadersOnly: {
    position: 'absolute',
    width: 1,
    height: 1,
    padding: 0,
    overflow: 'hidden',
    clip: 'rect(0,0,0,0)',
    whiteSpace: 'nowrap',
    clipPath: 'inset(50%)',
    border: 0,
  },
};

export default injectSheet(styles)(VisuallyHidden);
