import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';

import FeedStatusTooltipDelay from '../../../src/components/feed-status/feed-status-tooltip-delay';

let component;
describe('<FeedStatusTooltipDelay />', () => {
  beforeEach(() => {
    component = shallow(<FeedStatusTooltipDelay />);
  });

  it('should have className "feed-status__tooltip__delay"', () => {
    expect(component).to.have.className('feed-status__tooltip__delay');
  });

  it('should render a FeedStatusTooltipDelayContent"', () => {
    expect(component.find('FeedStatusTooltipDelayContent')).to.have.length(1);
  });
});
