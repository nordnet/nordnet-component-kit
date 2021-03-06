import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import { FormattedDate, FormattedRelativeTime, FormattedTime } from 'react-intl';

import DateTime from '../../src/components/date-time/date-time';

describe('<DateTime />', () => {
  let component;
  const defaultTimestamp = 1461756108561;

  describe('with type="date"', () => {
    describe('and format="numeric"', () => {
      beforeEach(() => {
        component = shallow(<DateTime value={defaultTimestamp} format="numeric" type="date" />);
      });

      it('should wrap a FormattedDate', () => {
        expect(component.type()).to.equal(FormattedDate);
      });

      it('should set year, month and day to "numeric"', () => {
        expect(component.prop('year')).to.equal('numeric');
        expect(component.prop('month')).to.equal('numeric');
        expect(component.prop('day')).to.equal('numeric');
      });
    });

    describe('and format="human"', () => {
      it('should set month="long" when format="human"', () => {
        component = shallow(<DateTime value={defaultTimestamp} format="human" type="date" />);
        expect(component.prop('month')).to.equal('long');
      });
    });

    describe('and iso set', () => {
      it('should wrap a DateTimeIso', () => {
        component = shallow(<DateTime value={defaultTimestamp} type="date" iso />);
        expect(component.type().name).to.equal('DateTimeIso');
      });
    });
  });

  describe('with type="relative"', () => {
    describe('and format="numeric"', () => {
      beforeEach(() => {
        component = shallow(<DateTime value={defaultTimestamp} format="numeric" type="relative" />);
      });

      it('should wrap a FormattedRelative', () => {
        expect(component.type()).to.equal(FormattedRelativeTime);
      });

      it('should set numeric to "always" by default', () => {
        expect(component.prop('numeric')).to.equal('always');
      });
    });

    describe('and format="human"', () => {
      it('should set numeric to "auto" if format="human"', () => {
        component = shallow(<DateTime value={defaultTimestamp} type="relative" format="human" />);
        expect(component.prop('numeric')).to.equal('auto');
      });
    });
  });

  describe('with type="time"', () => {
    describe('and format="numeric"', () => {
      beforeEach(() => {
        component = shallow(<DateTime value={defaultTimestamp} format="numeric" type="time" />);
      });

      it('should wrap a FormattedTime', () => {
        expect(component.type()).to.equal(FormattedTime);
      });

      it('should set hour, minute and second to "numeric"', () => {
        expect(component.prop('hour')).to.equal('numeric');
        expect(component.prop('minute')).to.equal('numeric');
        expect(component.prop('second')).to.equal('numeric');
      });
    });

    describe('and format="human"', () => {
      it('should set hour and minute to "numeric" when format="human"', () => {
        component = shallow(<DateTime value={defaultTimestamp} format="human" type="time" />);
        expect(component.prop('hour')).to.equal('numeric');
        expect(component.prop('minute')).to.equal('numeric');
      });
    });
  });

  describe('with useDashForInvalidValues', () => {
    it('should render dash for invalid date values', () => {
      const invalidDates = [undefined, null, 'foo'];
      invalidDates.forEach(invalidDate => {
        component = shallow(<DateTime value={invalidDate} useDashForInvalidValues />);
        expect(component.type()).to.equal('span');
        expect(component.text()).to.equal('–');
      });
    });

    it('should not render dash for valid date values', () => {
      const validDates = [defaultTimestamp, 0, new Date(), '2019-02-14'];
      validDates.forEach(validDate => {
        component = shallow(<DateTime value={validDate} useDashForInvalidValues />);
        expect(component.type()).to.equal(FormattedDate);
        expect(component.text()).to.not.equal('–');
      });
    });
  });
});
