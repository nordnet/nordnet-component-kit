import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';

import FeedStatusTooltipTimestamp from '../../../src/components/feed-status/feed-status-tooltip-timestamp';

let component;
describe('<FeedStatusTooltipTimestamp />', () => {
  beforeEach(() => {
    component = shallow(<FeedStatusTooltipTimestamp timestamp={1} />);
  });

  it('should have className "feed-status__tooltip__timestamp"', () => {
    expect(component).to.have.className('feed-status__tooltip__timestamp');
  });

  it('should render a FormattedMessage with UPDATED id', () => {
    expect(component.find('FormattedMessage')).to.have.prop('id', 'COMPONENT_KIT.FEED_STATUS.UPDATED');
  });

  it('should render a DateTime', () => {
    expect(component.find('DateTime')).to.have.length(1);
  });

  it('should not render timestamp if there is no timestamp', () => {
    component = shallow(<FeedStatusTooltipTimestamp />);
    expect(component.find('.feed-status__tooltip__timestamp')).to.have.length(0);
  });
});
