import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';

import FreshnessIndicatorTooltipDelay from '../../../src/components/freshness-indicator/freshness-indicator-tooltip-delay';

let component;
describe('<FreshnessIndicatorTooltipDelay />', () => {
  beforeEach(() => {
    component = shallow(<FreshnessIndicatorTooltipDelay />);
  });

  it('should have className "freshness-indicator__tooltip__delay"', () => {
    expect(component).to.have.className('freshness-indicator__tooltip__delay');
  });

  it('should render a FreshnessIndicatorTooltipDelayContent"', () => {
    expect(component.find('FreshnessIndicatorTooltipDelayContent')).to.have.length(1);
  });
});
