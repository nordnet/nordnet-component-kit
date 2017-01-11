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
    return variables.colorGray;
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
  tooltipOffset,
  iconWidth,
  iconHeight,
}) {
  const id = uniqueId || uuid.v1();
  const color = getColor(notActive);
  return (
    <div className={classNames('freshness-indicator', className)} data-tip data-for={id} style={{ display: 'inline-flex' }}>
      <Icon
        type={getIconType(delay, notActive)}
        stroke={color}
        fill={color}
        width={iconWidth}
        height={iconHeight}
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
  className: '',
  delay: 0,
  timestamp: null,
  notActive: false,
  uniqueId: null,
  tooltipClass: '',
  tooltipPlacement: 'top',
  tooltipStatic: false,
  tooltipOffset: {},
  iconWidth: 12,
  iconHeight: 12,
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
  iconWidth: PropTypes.number,
  iconHeight: PropTypes.number,
};

export default FreshnessIndicator;
