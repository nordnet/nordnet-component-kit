import React from 'react';
import sinon from 'sinon';
import { expect } from 'chai';
import { shallow } from 'enzyme';

import Number from '../../src/components/number/number';
import Updateable from '../../src/components/updateable/updateable';

describe('<Updateable />', () => {
  let component;
  let clock;
  const defaultValue = 2.5432;

  beforeEach(() => {
    clock = sinon.useFakeTimers();
    component = shallow(<Updateable value={defaultValue} />);
  });

  afterEach(() => {
    clock.restore();
  });

  it('should wrap a Number component', () => {
    expect(component.find(Number)).to.have.length(1);
  });

  it('should add positive class if updated value is greater', () => {
    component.setProps({ value: 2474 });
    expect(component.hasClass('updateable--positive')).to.equal(true);
  });

  it('should add negative class if updated value is less', () => {
    component.setProps({ value: -10.225 });
    expect(component.hasClass('updateable--negative')).to.equal(true);
  });

  it('should not change class if value is the same', () => {
    component.setProps({ value: defaultValue });
    expect(component.hasClass('updateable--negative')).to.equal(false);
    expect(component.hasClass('updateable--positive')).to.equal(false);
  });

  it('should remove class after animation time has passed', () => {
    const animationTime = 1000;
    component = shallow(<Updateable value={defaultValue} animationTime={animationTime} />);
    component.setProps({ value: -10.225 });
    expect(component.hasClass('updateable--negative')).to.equal(true);
    clock.tick(animationTime);
    component.update();
    expect(component.hasClass('updateable--negative')).to.equal(false);
  });

  it('should only update value each maxUpdateFrequency ms', () => {
    const maxUpdateFrequency = 1000;
    component = shallow(<Updateable value={defaultValue} maxUpdateFrequency={maxUpdateFrequency} />);

    component.setProps({ value: -10.225 });
    clock.tick(maxUpdateFrequency / 2);
    component.update();
    component.setProps({ value: 25.3 });
    expect(component.find(Number).prop('value')).to.equal(-10.225);

    clock.tick(maxUpdateFrequency);
    component.update();
    expect(component.find(Number).prop('value')).to.equal(25.3);
  });
});
