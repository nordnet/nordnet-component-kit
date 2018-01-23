import { expect } from 'chai';

import isoDate from '../../src/components/date-time-iso/iso-date';

describe('isoDate', () => {
  const year = 2015;
  const month = 11;
  const day = 15;
  const hours = 15;
  const minutes = 17;
  const seconds = 19;

  const dateAsString = `${year}-${month + 1}-${day}`; // Because why not zero indexed
  const timeAsString = `${hours}:${minutes}:${seconds}`;

  const aDate = new Date(year, month, day, hours, minutes, seconds);
  const iso = isoDate(aDate);

  it('should be able to get full date', () => {
    expect(iso.get('date')).to.equal(dateAsString);
  });

  it('should be able to get full time', () => {
    expect(iso.get('time')).to.equal(timeAsString);
  });

  it('should be able to get only hours', () => {
    expect(iso.get('HH')).to.equal(`${hours}`);
  });

  it('should be able to get only minutes', () => {
    expect(iso.get('MM')).to.equal(`${minutes}`);
  });

  it('should be able to get only seconds', () => {
    expect(iso.get('SS')).to.equal(`${seconds}`);
  });

  it('should be able to get a custom range', () => {
    const range = [1, 4];
    expect(iso.get('custom', range)).to.equal(dateAsString.substring(...range));
  });
});
