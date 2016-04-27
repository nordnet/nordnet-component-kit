import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import DateTimeIso from '../../src/components/date-time-iso/date-time-iso';

describe('<DateTimeIso />', () => {
  let component;
  const defaultTimestamp = 1461756108561;

  it('should show HH if prop hour is supplied', () => {
    component = shallow(<DateTimeIso value={ defaultTimestamp } hour="numeric" />);
    expect(component.text().split(' ')[1].match(/^[0-9][0-9]$/)).to.not.equal(null);
  });

  it('should show HH:MM if prop minute is supplied', () => {
    component = shallow(<DateTimeIso value={ defaultTimestamp } minute="numeric" />);
    expect(component.text().split(' ')[1].match(/^[0-9][0-9]:[0-9][0-9]$/)).to.not.equal(null);
  });

  it('should show HH:MM:SS if prop second is supplied', () => {
    component = shallow(<DateTimeIso value={ defaultTimestamp } second="numeric" />);
    expect(component.text().split(' ')[1].match(/^[0-9][0-9]:[0-9][0-9]:[0-9][0-9]$/)).to.not.equal(null);
  });
});
