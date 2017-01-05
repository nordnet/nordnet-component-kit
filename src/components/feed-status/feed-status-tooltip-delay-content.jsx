import React, { PropTypes } from 'react';
import { FormattedMessage, defineMessages } from 'react-intl';

const messages = defineMessages({
  delay: {
    id: 'COMPONENT_KIT.FEED_STATUS.DELAY',
    defaultMessage: 'Delayed',
    description: 'Label for delay value in feed status tooltip',
  },
  realtime: {
    id: 'COMPONENT_KIT.FEED_STATUS.NO_DELAY',
    defaultMessage: 'Realtime',
    description: 'Text describing that there is no delay in feed status tooltip',
  },
  hours: {
    id: 'COMPONENT_KIT.FEED_STATUS.HOUR',
    defaultMessage: 'h',
    description: 'Suffix for delay hour value in feed tooltip',
  },
  minutes: {
    id: 'COMPONENT_KIT.FEED_STATUS.MINUTE',
    defaultMessage: 'm',
    description: 'Suffix for delay minute value in feed tooltip',
  },
  seconds: {
    id: 'COMPONENT_KIT.FEED_STATUS.SECOND',
    defaultMessage: 's',
    description: 'Suffix for delay second value in feed tooltip',
  },
  closePrice: {
    id: 'COMPONENT_KIT.FEED_STATUS.CLOSE_PRICE',
    defaultMessage: 'Close price',
    description: 'Text describing that we are showing the closing price',
  }
});

function delayToHHMMSS(delay) {
  const time = {};
  let currDelay = delay;
  if (currDelay >= 3600) {
    time.hours = Math.floor(currDelay / 3600);
    currDelay -= 3600 * time.hours;
  }
  if (currDelay >= 60) {
    time.minutes = Math.floor(currDelay / 60);
    currDelay -= 60 * time.minutes;
  }
  time.seconds = currDelay;
  return time;
}

function getTimeComponent(time, key) {
  if (!time[key]) {
    return null;
  }
  return (
    <span key={key} >{time[key]} <FormattedMessage {...messages[key]} /> </span>
  );
}

function FeedStatusTooltipDelayContent({ delay, closePrice }) {
  if (closePrice) {
    return (<FormattedMessage {...messages.closePrice} />);
  }
  if (delay === 0) {
    return (<FormattedMessage {...messages.realtime} />);
  }
  const time = delayToHHMMSS(delay);
  return (
    <span>
      <FormattedMessage {...messages.delay} /> {['hours', 'minutes', 'seconds'].map(key => getTimeComponent(time, key))}
    </span>
  );
}

FeedStatusTooltipDelayContent.defaultProps = {
  delay: 0,
  closePrice: false,
};

FeedStatusTooltipDelayContent.propTypes = {
  delay: PropTypes.number,
  closePrice: PropTypes.bool,
};

export default FeedStatusTooltipDelayContent;
