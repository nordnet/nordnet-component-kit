import React from 'react';
import PropTypes from 'prop-types';
import { Icon, variables, Tooltip } from 'nordnet-ui-kit';
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
  delay,
  timestamp,
  notActive,
  tooltipPlacement,
  iconWidth,
  iconHeight,
  ...rest
}) {
  const color = getColor(notActive);
  return (
    <Tooltip
      placement={tooltipPlacement}
      content={
        <span>
          <TooltipTimestamp timestamp={timestamp} />
          <TooltipDelay delay={delay} notActive={notActive} />
        </span>
      }
      {...rest}
    >
      <Icon
        type={getIconType(delay, notActive)}
        stroke={color}
        fill={color}
        width={iconWidth}
        height={iconHeight}
      />
    </Tooltip>
  );
}

FreshnessIndicator.defaultProps = {
  delay: 0,
  timestamp: null,
  notActive: false,
  tooltipClass: '',
  tooltipPlacement: 'above',
  iconWidth: 12,
  iconHeight: 12,
};

FreshnessIndicator.propTypes = {
  delay: PropTypes.number,
  timestamp: PropTypes.number,
  notActive: PropTypes.bool,
  tooltipClass: PropTypes.string,
  tooltipPlacement: PropTypes.oneOf(['above', 'right', 'below', 'left']),
  iconWidth: PropTypes.number,
  iconHeight: PropTypes.number,
};

export default FreshnessIndicator;
