import React, { PropTypes } from 'react';
import TooltipDelayContent from './tooltip-delay-content';


function TooltipDelay(props) {
  return (
    <div className="freshness-indicator__tooltip__delay">
      <TooltipDelayContent {...props} />
    </div>
  );
}

TooltipDelay.defaultProps = {
  delay: 0,
  notActive: false,
};

TooltipDelay.propTypes = {
  delay: PropTypes.number,
  notActive: PropTypes.bool,
};

export default TooltipDelay;
