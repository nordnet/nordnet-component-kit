import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';

import TooltipDelay from '../../../src/components/freshness-indicator/tooltip-delay';

let component;
describe('<TooltipDelay />', () => {
  beforeEach(() => {
    component = shallow(<TooltipDelay />);
  });

  it('should have className "freshness-indicator__tooltip__delay"', () => {
    expect(component).to.have.className('freshness-indicator__tooltip__delay');
  });

  it('should render a TooltipDelayContent"', () => {
    expect(component.find('TooltipDelayContent')).to.have.length(1);
  });
});
