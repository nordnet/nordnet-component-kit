import PropTypes from 'prop-types';
import React from 'react';
import { FormattedMessage, defineMessages } from 'react-intl';
import DateTime from '../date-time/date-time';
import { numberIsFinite } from '../../utils';

const messages = defineMessages({
  updated: {
    id: 'COMPONENT_KIT.FRESHNESS_INDICATOR.UPDATED',
    defaultMessage: 'Updated',
    description: 'Label for timestamp value in feed status tooltip',
  },
});

function TooltipTimestamp({ timestamp }) {
  if (!numberIsFinite(timestamp)) {
    return null;
  }
  return (
    <div className="freshness-indicator__tooltip__timestamp">
      <b><FormattedMessage {...messages.updated} />: <DateTime value={timestamp} format="numeric" type="time" /></b>
    </div>
  );
}

TooltipTimestamp.defaultProps = {
  timestamp: null,
};

TooltipTimestamp.propTypes = {
  timestamp: PropTypes.number,
};

export default TooltipTimestamp;