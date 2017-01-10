import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';

import FreshnessIndicatorTooltipDelayContent from '../../../src/components/freshness-indicator/freshness-indicator-tooltip-delay-content';

const getComponent = (delay = 0, isActive = false) => shallow(<FreshnessIndicatorTooltipDelayContent delay={delay} isActive={isActive} />);
describe('<FreshnessIndicatorTooltipDelayContent />', () => {
  it('should render NO_DELAY message if there is no delay', () => {
    expect(getComponent().find('FormattedMessage')).to.have.prop('id', 'COMPONENT_KIT.FRESHNESS_INDICATOR.NO_DELAY');
  });

  it('should render IS_ACTIVE message if isActive is set', () => {
    expect(getComponent(1, true).find('FormattedMessage')).to.have.prop('id', 'COMPONENT_KIT.FRESHNESS_INDICATOR.IS_ACTIVE');
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

  it('should render DELAY message if isActive is larger than 1 and isActive is false', () => {
    expect(getComponent(1).find('FormattedMessage[id="COMPONENT_KIT.FRESHNESS_INDICATOR.DELAY"]')).to.have.length(1);
  });
});
