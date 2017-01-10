import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';

import FreshnessIndicator from '../../../src/components/freshness-indicator/freshness-indicator';

const getComponent = (delay = 0, isActive = false, timestamp = 1, uniqueId) =>
  shallow(<FreshnessIndicator delay={delay} isActive={isActive} timestamp={timestamp} uniqueId={uniqueId} />);

describe('<FreshnessIndicator />', () => {
  it('should have className "freshness-indicator__tooltip__timestamp"', () => {
    expect(getComponent()).to.have.className('freshness-indicator');
  });

  it('should render circleSlash icon if isActive is true', () => {
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
