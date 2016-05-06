import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import Value from '../../src/components/value/value';

describe('<Value />', () => {
  describe('with default parameters set (value)', () => {
    let component;
    const defaultValue = 2.5432;

    beforeEach(() => {
      component = shallow(<Value value={ defaultValue } />);
    });

    it('should default to 2 for valueDecimals', () => {
      expect(component.prop('valueDecimals')).to.equal(2);
    });

    it('should pass value through to its child', () => {
      expect(component.prop('value')).to.equal(defaultValue);
    });
  });
});
