import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';

import Currency from '../../src/components/currency/currency';
import Number from '../../src/components/number/number';

describe('<Currency />', () => {
  describe('with default parameters set (value & currency/suffix)', () => {
    let component;
    const defaultValue = 2.5432;
    const defaultCurrency = 'SEK';

    beforeEach(() => {
      component = shallow(
        <Currency
          value={defaultValue}
          currency={defaultCurrency}
        />);
    });

    it('should default to 2 for valueDecimals', () => {
      expect(component.prop('valueDecimals')).to.equal(2);
    });

    it('should not set any suffixStyle', () => {
      expect(component.prop('suffixStyle')).to.be.empty();
    });

    it('should pass value through to its child', () => {
      expect(component.prop('value')).to.equal(defaultValue);
    });

    it('should pass currency through to its child as "suffix"', () => {
      expect(component.prop('suffix')).to.equal(defaultCurrency);
    });

    it('should default to a space as separator', () => {
      expect(component.prop('suffixSeparator')).to.equal(' ');
    });
  });

  it('should use currency as "suffix" if it is defined', () => {
    const component = shallow(
      <Currency
        value={0}
        currency="ANY"
      />);
    expect(component.prop('suffix')).to.equal('ANY');
  });

  it('should use suffix as "suffix" if it is defined', () => {
    const component = shallow(
      <Currency
        value={0}
        suffix="ANY"
      />);
    expect(component.prop('suffix')).to.equal('ANY');
  });

  it('currency should take precedence before suffix if both are defined', () => {
    const component = shallow(
      <Currency
        value={0}
        currency="ANY"
        suffix="OTHER"
      />);
    expect(component.prop('suffix')).to.equal('ANY');
  });

  it('should set font-size of suffix to 75%', () => {
    const component = shallow(
      <Currency
        value={0}
        suffix="ANY"
        suffixSize="small"
      />);
    expect(component.prop('suffixStyle').fontSize).to.equal('75%');
  });

  it('should pass suffixSeparator through to its child', () => {
    const component = shallow(
      <Currency
        value={0}
        suffix="ANY"
        suffixSeparator="-_-"
      />);
    expect(component.prop('suffixSeparator')).to.equal('-_-');
  });

  it('should pass max decimals to Number', () => {
    const maxDecimals = 3;
    const component = shallow(
      <Currency
        value={0}
        maxDecimals={maxDecimals}
      />);
    const passedMaxDecimals = component.find(Number).prop('valueMaxDecimals');
    expect(passedMaxDecimals).to.equal(maxDecimals);
  });

  it('should pass min decimals to Number', () => {
    const minDecimals = 3;
    const component = shallow(
      <Currency
        value={0}
        minDecimals={minDecimals}
      />);
    const passedMinDecimals = component.find(Number).prop('valueMinDecimals');
    expect(passedMinDecimals).to.equal(minDecimals);
  });
});
