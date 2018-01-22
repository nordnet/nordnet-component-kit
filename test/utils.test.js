import { expect } from 'chai';

import { numberIsFinite, getTickDecimals, getFractionDigits, getDevelopmentPercentage } from '../src/utils';

describe('utils', () => {
  describe('numberIsFinite', () => {
    it('should be a function', () => {
      expect(numberIsFinite).to.be.a('function');
    });

    it('should return false for Infinity', () => {
      expect(numberIsFinite(Infinity)).to.equal(false);
    });

    it('should return false for NaN', () => {
      expect(numberIsFinite(NaN)).to.equal(false);
    });

    it('should return false for -Infinity', () => {
      expect(numberIsFinite(-Infinity)).to.equal(false);
    });

    it('should return false for "0"', () => {
      expect(numberIsFinite('0')).to.equal(false);
    });

    it('should return false for null', () => {
      expect(numberIsFinite(null)).to.equal(false);
    });

    it('should return true for 0', () => {
      expect(numberIsFinite(0)).to.equal(true);
    });

    it('should return true for 2e64', () => {
      expect(numberIsFinite(2e64)).to.equal(true);
    });
  });

  describe('getTickDecimals', () => {
    const ticks = [
      {
        decimals: 1,
        tick: 0.5,
        to_price: 999.5,
        from_price: 500,
      },
      {
        decimals: 3,
        tick: 0.001,
        to_price: 1.999,
        from_price: 1,
      },
      {
        decimals: 3,
        tick: 0.002,
        to_price: 4.998,
        from_price: 2,
      },
      {
        decimals: 4,
        tick: 0.0001,
        to_price: 0.4999,
        from_price: 0,
      },
    ];

    it('should be a function', () => {
      expect(getTickDecimals).to.be.a('function');
    });

    it('should return undefined when value is not defined', () => {
      expect(getTickDecimals(null, ticks)).to.equal(undefined);
    });

    it('should return undefined when ticks is not defined', () => {
      expect(getTickDecimals(1)).to.equal(undefined);
    });

    it('should return undefined when there is matching tick for value', () => {
      expect(getTickDecimals(50, ticks)).to.equal(undefined);
    });

    it('should return 1 when value is between 500 and 1000', () => {
      expect(getTickDecimals(750, ticks)).to.equal(1);
    });

    it('should return 3 when value is between 1 and 2', () => {
      expect(getTickDecimals(1.4, ticks)).to.equal(3);
    });

    it('should return 4 when value is between 0 and 0.5', () => {
      expect(getTickDecimals(0.4, ticks)).to.equal(4);
    });

    it('should work even though `tick` is not defined', () => {
      const modifiedTicks = [...ticks].map(t => ({
        decimals: t.decimals,
        to_price: t.to_price,
        from_price: t.from_price,
      }));
      expect(getTickDecimals(1.4, modifiedTicks)).to.equal(3);
    });
  });

  describe('getFractionDigits', () => {
    it('should be a function', () => {
      expect(getFractionDigits).to.be.a('function');
    });

    it('should return first argument if it is a number', () => {
      const args = [1, '4', null, NaN];
      expect(getFractionDigits(...args)).to.equal(args[0]);
    });

    it('should return undefined when nothing matches', () => {
      const args = ['4', null, NaN];
      expect(getFractionDigits(...args)).to.equal(undefined);
    });

    it('should return second argument when first argument is not a number', () => {
      const args = [null, 2];
      expect(getFractionDigits(...args)).to.equal(args[1]);
    });
  });

  describe('getDevelopmentPercentage', () => {
    it('should be a function', () => {
      expect(getDevelopmentPercentage).to.be.a('function');
    });
    it('should return 0 if one of the arguments is not a number', () => {
      expect(getDevelopmentPercentage()).to.equal(0);
      expect(getDevelopmentPercentage(0)).to.equal(0);
      expect(getDevelopmentPercentage(0, '0')).to.equal(0);
    });
    it('should return the percentual development between the parameters', () => {
      expect(getDevelopmentPercentage(1, 1)).to.equal(0);
      expect(getDevelopmentPercentage(1, 2)).to.equal(100);
      expect(getDevelopmentPercentage(2, 1)).to.equal(-50);
    });
  });
});
