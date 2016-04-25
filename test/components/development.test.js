import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import Development from '../../src/components/development/development';

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

    it('should add the prefixClass development__arrow', () => {
      expect(component.prop('prefixClass')).to.equal('development__arrow');
    });

    it('should pass value through to its child', () => {
      expect(component.prop('value')).to.equal(defaultValue);
    });

    it('should set prefix to a unicode arrow', () => {
      const arrows = ['▲', '▼', '▶'];
      const prefixArrow = component.prop('prefix').props.children[0].props.children;
      expect(arrows.indexOf(prefixArrow) !== -1).to.equal(true);
    });
  });

  it('should display ▲ as prefix when value > 0', () => {
    const component = shallow(<Development value={ 1 } />);
    expect(component.prop('prefix').props.children[0].props.children).to.equal('▲');
  });

  it('should display ▼ as prefix when value < 0', () => {
    const component = shallow(<Development value={ -1 } />);
    expect(component.prop('prefix').props.children[0].props.children).to.equal('▼');
  });

  it('should display ▶ as prefix when value = 0', () => {
    const component = shallow(<Development value={ 0 } />);
    expect(component.prop('prefix').props.children[0].props.children).to.equal('▶');
  });

  // A11y tests
});
