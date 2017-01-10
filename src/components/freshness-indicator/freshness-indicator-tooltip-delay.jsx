import React, { PropTypes } from 'react';
import FreshnessIndicatorTooltipDelayContent from './freshness-indicator-tooltip-delay-content';


function FreshnessIndicatorTooltipDelay(props) {
  return (
    <div className="freshness-indicator__tooltip__delay">
      <FreshnessIndicatorTooltipDelayContent {...props} />
    </div>
  );
}

FreshnessIndicatorTooltipDelay.defaultProps = {
  delay: 0,
  isActive: false,
};

FreshnessIndicatorTooltipDelay.propTypes = {
  delay: PropTypes.number,
  isActive: PropTypes.bool,
};

export default FreshnessIndicatorTooltipDelay;
