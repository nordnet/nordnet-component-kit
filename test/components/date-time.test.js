import React from 'react';
import { expect } from 'chai';
import { shallow, mount } from 'enzyme';
import DateTime from '../../src/components/date-time/date-time';

describe('<DateTime />', () => {
  let component;
  const defaultTimestamp = 1461756108561;

  describe('with type="date"', () => {
    beforeEach(() => {
      component = shallow(<DateTime value={ defaultTimestamp } type="date" />);
    });

    it('should wrap a FormattedDate', () => {
      expect(component.type().name).to.equal('FormattedDate');
    });

    it('should set year, month and day to "numeric"', () => {
      expect(component.prop('year')).to.equal('numeric');
      expect(component.prop('month')).to.equal('numeric');
      expect(component.prop('day')).to.equal('numeric');
    });

    it('should set month="long" when format="human"', () => {
      component = shallow(<DateTime value={ defaultTimestamp } format="human" />);
      expect(component.prop('month')).to.equal('long');
    });

    describe('and iso set', () => {
      beforeEach(() => {
        component = shallow(<DateTime value={ defaultTimestamp } type="date" iso />);
      });

      it('should wrap a DateTimeIso', () => {
        expect(component.type().name).to.equal('DateTimeIso');
      });
    });
  });

  describe('with type="relative"', () => {
    beforeEach(() => {
      component = shallow(<DateTime value={ defaultTimestamp } type="relative" />);
    });

    it('should wrap a FormattedRelative', () => {
      expect(component.type().name).to.equal('FormattedRelative');
    });

    it('should set style to "numeric" by default', () => {
      expect(component.prop('style')).to.equal('numeric');
    });

    it('should set style to "best fit" by if format="human"', () => {
      component = shallow(<DateTime value={ defaultTimestamp } type="relative" format="human" />);
      expect(component.prop('style')).to.equal('best fit');
    });
  });
});
