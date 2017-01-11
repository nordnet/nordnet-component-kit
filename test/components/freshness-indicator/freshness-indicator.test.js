import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import { variables } from 'nordnet-ui-kit';

import FreshnessIndicator, { getColor, getIconType } from '../../../src/components/freshness-indicator/freshness-indicator';

const getComponent = (delay = 0, notActive = false, timestamp = 1, uniqueId) =>
  shallow(<FreshnessIndicator delay={delay} notActive={notActive} timestamp={timestamp} uniqueId={uniqueId} />);

describe('<FreshnessIndicator />', () => {
  it('should have className "freshness-indicator__tooltip__timestamp"', () => {
    expect(getComponent()).to.have.className('freshness-indicator');
  });

  it('should render an icon', () => {
    expect(getComponent(0, true).find('Icon')).to.have.length(1);
  });

  it('should use provided id', () => {
    expect(getComponent(1, false, 1, 'abc').find('ReactTooltip')).to.have.prop('id', 'abc');
  });

  describe('getColor function', () => {
    it('should return colorDisabled if not active', () => {
      expect(getColor(true)).to.equal(variables.colorDisabled);
    });

    it('should return colorWarning if active', () => {
      expect(getColor(false)).to.equal(variables.colorWarning);
    });
  });

  describe('getIconType function', () => {
    it('should return circleSlash if not active', () => {
      expect(getIconType(1, true)).to.equal('circleSlash');
    });

    it('should return lightningBolt if delay is 0 and active', () => {
      expect(getIconType(0, false)).to.equal('lightningBolt');
    });

    it('should return tickingClock if delay is larger than 0 and active', () => {
      expect(getIconType(10, false)).to.equal('tickingClock');
    });
  });
});
