import React, { PropTypes } from 'react';
import { Icon, variables } from 'nordnet-ui-kit';
import ReactTooltip from 'react-tooltip';
import uuid from 'uuid';
import classNames from 'classnames';
import FreshnessIndicatorTooltipTimestamp from './freshness-indicator-tooltip-timestamp';
import FreshnessIndicatorTooltipDelay from './freshness-indicator-tooltip-delay';


function getIconType(delay, isActive) {
  if (isActive) {
    return 'circleSlash';
  }
  if (delay === 0) {
    return 'lightningBolt';
  }
  return 'tickingClock';
}

function getColor(isActive) {
  if (isActive) {
    return variables.colorDisabled;
  }
  return variables.colorWarning;
}


function FreshnessIndicator({
  className,
  tooltipClass,
  delay,
  timestamp,
  isActive,
  uniqueId,
  tooltipPlacement,
  tooltipStatic,
  tooltipOffset
}) {
  const id = uniqueId || uuid.v1();
  const color = getColor(isActive);
  return (
    <div className={classNames('freshness-indicator', className)} data-tip data-for={id} style={{ display: 'inline-flex' }}>
      <Icon
        type={getIconType(delay, isActive)}
        stroke={color}
        fill={color}
      />
      <ReactTooltip
        class={tooltipClass}
        id={id}
        place={tooltipPlacement}
        effect={tooltipStatic ? 'solid' : 'float'}
        offset={tooltipOffset}
      >
        <FreshnessIndicatorTooltipTimestamp timestamp={timestamp} />
        <FreshnessIndicatorTooltipDelay delay={delay} isActive={isActive} />
      </ReactTooltip>
    </div>
  );
}

FreshnessIndicator.defaultProps = {
  delay: 0,
  isActive: false,
  tooltipPlacement: 'top',
  tooltipStatic: false,
  tooltipOffset: {},
};

FreshnessIndicator.propTypes = {
  className: PropTypes.string,
  delay: PropTypes.number,
  timestamp: PropTypes.number,
  isActive: PropTypes.bool,
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

export default FreshnessIndicator;
