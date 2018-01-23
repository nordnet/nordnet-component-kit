import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';

import Addon from '../../src/components/addon/addon';

describe('<Addon />', () => {
  let component;
  const addon = <div>test</div>;

  beforeEach(() => {
    component = shallow(<Addon addon={addon} className="propagatedClass" propagatedProp />);
  });

  it('should not render anything if addon is not specified', () => {
    component = shallow(<Addon />);
    expect(component.type()).to.equal(null);
  });

  it('should render addon', () => {
    expect(component.contains(addon)).to.equal(true);
  });

  it('should add className "addon"', () => {
    expect(component.hasClass('addon')).to.equal(true);
  });

  it('should propagate className', () => {
    expect(component.hasClass('propagatedClass')).to.equal(true);
  });

  it('should propagate any props', () => {
    expect(component.prop('propagatedProp')).to.equal(true);
  });

  it('should render a separator as first child when position is right', () => {
    const separator = '_ _ _';
    component = shallow(<Addon addon={addon} position="right" separator={separator} />);

    expect(component.childAt(0).equals(separator)).to.equal(true);
  });

  it('should render a separator as last child when position is left', () => {
    const separator = '_ _ _';
    component = shallow(<Addon addon={addon} position="left" separator={separator} />);

    const children = component.children().length;

    expect(component.childAt(children - 1).equals(separator)).to.equal(true);
  });

  it('should add default class addon--left to prefix', () => {
    component = shallow(<Addon addon="." position="left" />);
    expect(component.hasClass('addon--left')).to.equal(true);
  });

  it('should add default class addon--right to suffix', () => {
    component = shallow(<Addon addon="." position="right" />);
    expect(component.hasClass('addon--right')).to.equal(true);
  });

  it('should take custom className', () => {
    const className = 'custom-class';
    component = shallow(<Addon addon="." position="right" className={className} />);
    expect(component.hasClass(className)).to.equal(true);
  });
});
