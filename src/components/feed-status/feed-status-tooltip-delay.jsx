import React, { PropTypes } from 'react';
import FeedStatusTooltipDelayContent from './feed-status-tooltip-delay-content';


function FeedStatusTooltipDelay(props) {
  return (
    <div className="feed-status__tooltip__delay">
      <FeedStatusTooltipDelayContent {...props} />
    </div>
  );
}

FeedStatusTooltipDelay.defaultProps = {
  delay: 0,
  closePrice: false,
};

FeedStatusTooltipDelay.propTypes = {
  delay: PropTypes.number,
  closePrice: PropTypes.bool,
};

export default FeedStatusTooltipDelay;
