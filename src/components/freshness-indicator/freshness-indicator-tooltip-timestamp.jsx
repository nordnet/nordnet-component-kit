import React, { PropTypes } from 'react';
import { FormattedMessage, defineMessages } from 'react-intl';
import DateTime from '../date-time/date-time';

const messages = defineMessages({
  updated: {
    id: 'COMPONENT_KIT.FRESHNESS_INDICATOR.UPDATED',
    defaultMessage: 'Updated',
    description: 'Label for timestamp value in feed status tooltip',
  },
});

function FreshnessIndicatorTooltipTimestamp({ timestamp }) {
  if (!Number.isFinite(timestamp)) {
    return (<div />);
  }
  return (
    <div className="freshness-indicator__tooltip__timestamp">
      <b><FormattedMessage {...messages.updated} />: <DateTime value={new Date(timestamp)} format="numeric" type="time" /></b>
    </div>
  );
}

FreshnessIndicatorTooltipTimestamp.propTypes = {
  timestamp: PropTypes.number,
};

export default FreshnessIndicatorTooltipTimestamp;
