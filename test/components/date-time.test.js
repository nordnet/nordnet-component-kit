import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';

import DateTime from '../../src/components/date-time/date-time';

describe('<DateTime />', () => {
  let component;
  const defaultTimestamp = 1461756108561;

  describe('with type="date"', () => {
    describe('and format="numeric"', () => {
      beforeEach(() => {
        component = shallow(<DateTime value={ defaultTimestamp } format="numeric" type="date" />);
      });

      it('should wrap a FormattedDate', () => {
        expect(component.type().name).to.equal('FormattedDate');
      });

      it('should set year, month and day to "numeric"', () => {
        expect(component.prop('year')).to.equal('numeric');
        expect(component.prop('month')).to.equal('numeric');
        expect(component.prop('day')).to.equal('numeric');
      });
    });

    describe('and format="human"', () => {
      it('should set month="long" when format="human"', () => {
        component = shallow(<DateTime value={ defaultTimestamp } format="human" type="date" />);
        expect(component.prop('month')).to.equal('long');
      });
    });

    describe('and iso set', () => {
      it('should wrap a DateTimeIso', () => {
        component = shallow(<DateTime value={ defaultTimestamp } type="date" iso />);
        expect(component.type().name).to.equal('DateTimeIso');
      });
    });
  });

  describe('with type="relative"', () => {
    describe('and format="numeric"', () => {
      beforeEach(() => {
        component = shallow(<DateTime value={ defaultTimestamp } format="numeric" type="relative" />);
      });

      it('should wrap a FormattedRelative', () => {
        expect(component.type().name).to.equal('FormattedRelative');
      });

      it('should set style to "numeric" by default', () => {
        expect(component.prop('style')).to.equal('numeric');
      });
    });

    describe('and format="human"', () => {
      it('should set style to "best fit" by if format="human"', () => {
        component = shallow(<DateTime value={ defaultTimestamp } type="relative" format="human" />);
        expect(component.prop('style')).to.equal('best fit');
      });
    });
  });

  describe('with type="time"', () => {
    describe('and format="numeric"', () => {
      beforeEach(() => {
        component = shallow(<DateTime value={ defaultTimestamp } format="numeric" type="time" />);
      });

      it('should wrap a FormattedTime', () => {
        expect(component.type().name).to.equal('FormattedTime');
      });

      it('should set hour, minute and second to "numeric"', () => {
        expect(component.prop('hour')).to.equal('numeric');
        expect(component.prop('minute')).to.equal('numeric');
        expect(component.prop('second')).to.equal('numeric');
      });
    });

    describe('and format="human"', () => {
      it('should set hour and minute to "numeric" when format="human"', () => {
        component = shallow(<DateTime value={ defaultTimestamp } format="human" type="time" />);
        expect(component.prop('hour')).to.equal('numeric');
        expect(component.prop('minute')).to.equal('numeric');
      });
    });
  });
});
