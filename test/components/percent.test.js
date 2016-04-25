import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import Percent from '../../src/components/percent/percent';

describe('<Percent />', () => {
  describe('with default parameter set (value)', () => {
    let component;
    const defaultValue = 2.5432;

    beforeEach(() => {
      component = shallow(
        <Percent
          value={ defaultValue }
        />);
    });

    it('should default to 2 for valueDecimals', () => {
      expect(component.prop('valueDecimals')).to.equal(2);
    });

    it('should pass "%" as suffix to its child', () => {
      expect(component.prop('suffix')).to.equal('%');
    });

    it('should pass value through to its child', () => {
      expect(component.prop('value')).to.equal(defaultValue);
    });

    it('should default to an empty string as separator', () => {
      expect(component.prop('suffixSeparator')).to.equal('');
    });
  });

  it('should not be possible to override suffix ("%")', () => {
    const component = shallow(
      <Percent
        value={ 0 }
        suffix="ANY"
      />);
    expect(component.prop('suffix')).to.equal('%');
  });

  it('should pass suffixSeparator through to its child', () => {
    const component = shallow(
      <Percent
        value={ 0 }
        suffix="ANY"
        suffixSeparator="-_-"
      />);
    expect(component.prop('suffixSeparator')).to.equal('-_-');
  });
});
