import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';

import FeedStatusTooltipDelayContent from '../../../src/components/feed-status/feed-status-tooltip-delay-content';

const getComponent = (delay = 0, closePrice = false) => shallow(<FeedStatusTooltipDelayContent delay={delay} closePrice={closePrice} />);
describe('<FeedStatusTooltipDelayContent />', () => {
  it('should render NO_DELAY message if there is no delay', () => {
    expect(getComponent().find('FormattedMessage')).to.have.prop('id', 'COMPONENT_KIT.FEED_STATUS.NO_DELAY');
  });

  it('should render CLOSE_PRICE message if closePrice is set', () => {
    expect(getComponent(1, true).find('FormattedMessage')).to.have.prop('id', 'COMPONENT_KIT.FEED_STATUS.CLOSE_PRICE');
  });

  it('should render 2 formatted messages if the delay is 1 sec', () => {
    expect(getComponent(1).find('FormattedMessage')).to.have.length(2);
  });

  it('should render 3 formatted messages if the delay is 61 sec', () => {
    expect(getComponent(61).find('FormattedMessage')).to.have.length(3);
  });

  it('should render 4 formatted messages if the delay is 60 * 61 + 1 sec', () => {
    expect(getComponent((60 * 61) + 1).find('FormattedMessage')).to.have.length(4);
  });

  it('should render DELAY message if closePrice is larger than 1 and closePrice is false', () => {
    expect(getComponent(1).find('FormattedMessage[id="COMPONENT_KIT.FEED_STATUS.DELAY"]')).to.have.length(1);
  });
});
