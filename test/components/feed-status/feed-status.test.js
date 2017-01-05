import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';

import FeedStatus from '../../../src/components/feed-status/feed-status';

const getComponent = (delay = 0, closePrice = false, timestamp = 1, uniqueId) =>
  shallow(<FeedStatus delay={delay} closePrice={closePrice} timestamp={timestamp} uniqueId={uniqueId} />);

describe('<FeedStatus />', () => {
  it('should have className "feed-status__tooltip__timestamp"', () => {
    expect(getComponent()).to.have.className('feed-status');
  });

  it('should render circleSlash icon if closePrice is true', () => {
    expect(getComponent(0, true).find('Icon')).to.have.prop('type', 'circleSlash');
  });

  it('should render lightningBolt icon if there is no delay', () => {
    expect(getComponent(0).find('Icon')).to.have.prop('type', 'lightningBolt');
  });

  it('should render tickingClock icon if there is delay', () => {
    expect(getComponent(1).find('Icon')).to.have.prop('type', 'tickingClock');
  });

  it('should use provided id', () => {
    expect(getComponent(1, false, 1, 'abc').find('ReactTooltip')).to.have.prop('id', 'abc');
  });
});
