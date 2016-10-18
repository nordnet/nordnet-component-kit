import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';

import Currency from '../../src/components/currency/currency';
import Development from '../../src/components/development/development';
import Number from '../../src/components/number/number';
import Percent from '../../src/components/percent/percent';
import variables from '../../src/variables';

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

    it('should default to 2 for valueDecimals', () => {
      expect(component.prop('valueDecimals')).to.equal(2);
    });

    it('should add a prefixStyle', () => {
      expect(component.prop('prefixStyle')).to.not.be.empty();
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
    component.prop('prefix').props.children.map(child => (
      expect(child).to.equal(null)
    ));
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
    component.prop('prefix').props.children.map(child => (
      expect(child).to.equal(null)
    ));
  });

  describe('Max and min decimals', () => {
    it('should pass max and min decimals to component when type is Number', () => {
      const maxDecimals = 3;
      const minDecimals = 1;
      const component = shallow(
        <Development
          value={0}
          type='number'
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
          type='percentage'
          maxDecimals={maxDecimals}
          minDecimals={minDecimals}
        />);
      const passedMaxDecimals = component.find(Percent).prop('valueMaxDecimals');
      const passedMinDecimals = component.find(Percent).prop('valueMinDecimals');
      expect(passedMaxDecimals).to.equal(maxDecimals);
      expect(passedMinDecimals).to.equal(minDecimals);
    });

    it('should pass max and min decimals to component when type is currency', () => {
      const maxDecimals = 3;
      const minDecimals = 1;
      const component = shallow(
        <Development
          value={0}
          type='currency'
          maxDecimals={maxDecimals}
          minDecimals={minDecimals}
        />);
      const passedMaxDecimals = component.find(Currency).prop('valueMaxDecimals');
      const passedMinDecimals = component.find(Currency).prop('valueMinDecimals');
      expect(passedMaxDecimals).to.equal(maxDecimals);
      expect(passedMinDecimals).to.equal(minDecimals);
    });

  });

  // A11y tests
  describe('a11y specifics', () => {
    let component;

    beforeEach(() => {
      component = shallow(<Development value={-1} />);
    });

    it('should set aria-hidden on the unicode arrows', () => {
      expect(component.prop('prefix').props.children[0].props['aria-hidden']).to.equal('true');
    });

    it('should only show minus sign to screen readers', () => {
      const props = component.prop('prefix').props.children[1].props;

      expect(props.dangerouslySetInnerHTML).to.exist();
      expect(props.style).to.deep.equal(variables.style.screenReaderOnly);
    });
  });
});
