import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';

import TooltipTimestamp from '../../../src/components/freshness-indicator/tooltip-timestamp';

let component;
describe('<TooltipTimestamp />', () => {
  beforeEach(() => {
    component = shallow(<TooltipTimestamp timestamp={1} />);
  });

  it('should have className "freshness-indicator__tooltip__timestamp"', () => {
    expect(component).to.have.className('freshness-indicator__tooltip__timestamp');
  });

  it('should render a FormattedMessage with UPDATED id', () => {
    expect(component.find('FormattedMessage')).to.have.prop('id', 'COMPONENT_KIT.FRESHNESS_INDICATOR.UPDATED');
  });

  it('should render a DateTime', () => {
    expect(component.find('DateTime')).to.have.length(1);
  });

  it('should not render timestamp if there is no timestamp', () => {
    component = shallow(<TooltipTimestamp />);
    expect(component.find('.freshness-indicator__tooltip__timestamp')).to.have.length(0);
  });
});
