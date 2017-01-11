import React, { PropTypes } from 'react';
import { Icon, variables } from 'nordnet-ui-kit';
import ReactTooltip from 'react-tooltip';
import uuid from 'uuid';
import classNames from 'classnames';
import TooltipTimestamp from './tooltip-timestamp';
import TooltipDelay from './tooltip-delay';


export function getIconType(delay, notActive) {
  if (notActive) {
    return 'circleSlash';
  }
  if (delay === 0) {
    return 'lightningBolt';
  }
  return 'tickingClock';
}

export function getColor(notActive) {
  if (notActive) {
    return variables.colorDisabled;
  }
  return variables.colorWarning;
}


function FreshnessIndicator({
  className,
  tooltipClass,
  delay,
  timestamp,
  notActive,
  uniqueId,
  tooltipPlacement,
  tooltipStatic,
  tooltipOffset
}) {
  const id = uniqueId || uuid.v1();
  const color = getColor(notActive);
  return (
    <div className={classNames('freshness-indicator', className)} data-tip data-for={id} style={{ display: 'inline-flex' }}>
      <Icon
        type={getIconType(delay, notActive)}
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
        <TooltipTimestamp timestamp={timestamp} />
        <TooltipDelay delay={delay} notActive={notActive} />
      </ReactTooltip>
    </div>
  );
}

FreshnessIndicator.defaultProps = {
  delay: 0,
  notActive: false,
  tooltipPlacement: 'top',
  tooltipStatic: false,
  tooltipOffset: {},
};

FreshnessIndicator.propTypes = {
  className: PropTypes.string,
  delay: PropTypes.number,
  timestamp: PropTypes.number,
  notActive: PropTypes.bool,
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
