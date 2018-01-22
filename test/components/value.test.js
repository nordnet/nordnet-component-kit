import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';

import Number from '../../src/components/number/number';
import Value from '../../src/components/value/value';

describe('<Value />', () => {
  describe('with default parameters set (value)', () => {
    let component;
    const defaultValue = 2.5432;

    beforeEach(() => {
      component = shallow(<Value value={defaultValue} />);
    });

    it('should default to 2 for valueDecimals', () => {
      expect(component.prop('valueDecimals')).to.equal(2);
    });

    it('should pass value through to its child', () => {
      expect(component.prop('value')).to.equal(defaultValue);
    });
  });

  it('should pass max and min decimals to Number', () => {
    const maxDecimals = 5;
    const minDecimals = 3;
    const component = shallow(<Value value={0} maxDecimals={maxDecimals} minDecimals={minDecimals} />);
    const passedMaxDecimals = component.find(Number).prop('valueMaxDecimals');
    const passedMinDecimals = component.find(Number).prop('valueMinDecimals');
    expect(passedMaxDecimals).to.equal(maxDecimals);
    expect(passedMinDecimals).to.equal(minDecimals);
  });
});
