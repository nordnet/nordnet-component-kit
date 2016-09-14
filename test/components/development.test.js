import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';

import Development from '../../src/components/development/development';
import variables from '../../src/variables';

describe('<Development />', () => {
  describe('with default parameter set (value)', () => {
    let component;
    const defaultValue = 2.5432;

    beforeEach(() => {
      component = shallow(
        <Development
          value={ defaultValue }
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
    const component = shallow(<Development value={ 1 } />);
    expect(component.find('.number--positive')).to.have.length(1);
  });

  it('should get class "number--negative" when value < 0', () => {
    const component = shallow(<Development value={ -1 } />);
    expect(component.find('.number--negative')).to.have.length(1);
  });

  it('should get class "number--negative" parseFloat(value) < 0', () => {
    const component = shallow(<Development value="-1" />);
    expect(component.find('.number--negative')).to.have.length(1);
  });

  it('should display no prefix when value = 0', () => {
    const component = shallow(<Development value={ 0 } />);
    component.prop('prefix').props.children.map(child => (
      expect(child).to.equal(null)
    ));
  });

  it('should get class "number--negative" when direction is negative', () => {
    const component = shallow(<Development value={ 1 } direction="negative" />);
    expect(component.find('.number--negative')).to.have.length(1);
  });

  it('should get class "number--positive" when direction is positive', () => {
    const component = shallow(<Development value={ 1 } direction="positive" />);
    expect(component.find('.number--positive')).to.have.length(1);
  });

  it('should display no prefix when direction is neutral', () => {
    const component = shallow(<Development value={ 1 } direction="neutral" />);
    component.prop('prefix').props.children.map(child => (
      expect(child).to.equal(null)
    ));
  });

  // A11y tests
  describe('a11y specifics', () => {
    let component;

    beforeEach(() => {
      component = shallow(<Development value={ -1 } />);
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
