import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';

import Currency from '../../src/components/currency/currency';
import Development from '../../src/components/development/development';
import Number from '../../src/components/number/number';
import Percent from '../../src/components/percent/percent';

describe('<Development />', () => {
  describe('with default parameter set (value)', () => {
    let component;
    const defaultValue = 2.5432;

    beforeEach(() => {
      component = shallow(
        <Development
          value={defaultValue}
        />
      );
    });

    it('should pass value through to its child', () => {
      expect(component.prop('value')).to.equal(defaultValue);
    });
  });

  it('should get class "number--positive" when value > 0', () => {
    const component = shallow(<Development value={1} />);
    expect(component.find('.number--positive')).to.have.length(1);
  });

  it('should get class "number--negative" when value < 0', () => {
    const component = shallow(<Development value={-1} />);
    expect(component.find('.number--negative')).to.have.length(1);
  });

  it('should get class "number--negative" parseFloat(value) < 0', () => {
    const component = shallow(<Development value="-1" />);
    expect(component.find('.number--negative')).to.have.length(1);
  });

  it('should display no prefix when value = 0', () => {
    const component = shallow(<Development value={0} />);
    expect(component.prop('prefix').children).to.equals(undefined);
  });

  it('should display minus prefix when value is < 0', () => {
    const expected = { dangerouslySetInnerHTML: { __html: '&minus; ' } };
    const component = shallow(<Development value={-1} />);
    expect(component.prop('prefix').props).to.deep.equal(expected);
  });

  it('should display plus prefix when value is > 0', () => {
    const expected = { dangerouslySetInnerHTML: { __html: '&plus; ' } };
    const component = shallow(<Development value={1} />);
    expect(component.prop('prefix').props).to.deep.equal(expected);
  });

  it('should get class "number--negative" when direction is negative', () => {
    const component = shallow(<Development value={1} direction="negative" />);
    expect(component.find('.number--negative')).to.have.length(1);
  });

  it('should get class "number--positive" when direction is positive', () => {
    const component = shallow(<Development value={1} direction="positive" />);
    expect(component.find('.number--positive')).to.have.length(1);
  });

  it('should display no prefix when direction is neutral', () => {
    const component = shallow(<Development value={1} direction="neutral" />);
    expect(component.prop('prefix').children).to.equal(undefined);
  });

  describe('Max and min decimals', () => {
    it('should pass max and min decimals to component when type is Number', () => {
      const maxDecimals = 3;
      const minDecimals = 1;
      const component = shallow(
        <Development
          value={0}
          type="number"
          maxDecimals={maxDecimals}
          minDecimals={minDecimals}
        />);
      const passedMaxDecimals = component.find(Number).prop('valueMaxDecimals');
      const passedMinDecimals = component.find(Number).prop('valueMinDecimals');
      expect(passedMaxDecimals).to.equal(maxDecimals);
      expect(passedMinDecimals).to.equal(minDecimals);
    });

    it('should pass max and min decimals to component when type is percentage', () => {
      const maxDecimals = 3;
      const minDecimals = 1;
      const component = shallow(
        <Development
          value={0}
          type="percentage"
          maxDecimals={maxDecimals}
          minDecimals={minDecimals}
        />);
      const passedMaxDecimals = component.find(Percent).prop('maxDecimals');
      const passedMinDecimals = component.find(Percent).prop('minDecimals');
      expect(passedMaxDecimals).to.equal(maxDecimals);
      expect(passedMinDecimals).to.equal(minDecimals);
    });

    it('should pass max and min decimals to component when type is currency', () => {
      const maxDecimals = 3;
      const minDecimals = 1;
      const component = shallow(
        <Development
          value={0}
          type="currency"
          maxDecimals={maxDecimals}
          minDecimals={minDecimals}
        />);
      const passedMaxDecimals = component.find(Currency).prop('maxDecimals');
      const passedMinDecimals = component.find(Currency).prop('minDecimals');
      expect(passedMaxDecimals).to.equal(maxDecimals);
      expect(passedMinDecimals).to.equal(minDecimals);
    });
  });
});
