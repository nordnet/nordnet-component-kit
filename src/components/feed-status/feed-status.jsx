import React, { PropTypes } from 'react';
import { Icon, variables } from 'nordnet-ui-kit';
import ReactTooltip from 'react-tooltip';
import uuid from 'uuid';
import classNames from 'classnames';
import FeedStatusTooltipTimestamp from './feed-status-tooltip-timestamp';
import FeedStatusTooltipDelay from './feed-status-tooltip-delay';


function getIconType(delay, closePrice) {
  if (closePrice) {
    return 'circleSlash';
  }
  if (delay === 0) {
    return 'lightningBolt';
  }
  return 'tickingClock';
}

function getColor(closePrice) {
  if (closePrice) {
    return variables.colorDisabled;
  }
  return variables.colorWarning;
}


function FeedStatus({ className, tooltipClass, delay, timestamp, closePrice, uniqueId, tooltipPlacement, tooltipStatic, tooltipOffset }) {
  const id = uniqueId || uuid.v1();
  const color = getColor(closePrice);
  return (
    <div className={classNames('feed-status', className)} data-tip data-for={id} style={{ display: 'inline-flex' }}>
      <Icon
        type={getIconType(delay, closePrice)}
        stroke={color}
        fill={color}
      />
      <ReactTooltip class={tooltipClass} id={id} place={tooltipPlacement} effect={tooltipStatic ? 'solid' : 'float'} offset={tooltipOffset}>
        <FeedStatusTooltipTimestamp timestamp={timestamp} />
        <FeedStatusTooltipDelay delay={delay} closePrice={closePrice} />
      </ReactTooltip>
    </div>
  );
}

FeedStatus.defaultProps = {
  delay: 0,
  closePrice: false,
  tooltipPlacement: 'top',
  tooltipStatic: false,
  tooltipOffset: {},
};

FeedStatus.propTypes = {
  className: PropTypes.string,
  delay: PropTypes.number,
  timestamp: PropTypes.number,
  closePrice: PropTypes.bool,
  uniqueId: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  tooltipClass: PropTypes.string,
  tooltipPlacement: PropTypes.oneOf(['top', 'right', 'bottom', 'left']),
  tooltipStatic: PropTypes.bool,
  tooltipOffset: PropTypes.shape({
    top: PropTypes.number,
    right: PropTypes.number,
    left: PropTypes.number,
    bottom: PropTypes.number,
  }),
};

export default FeedStatus;
