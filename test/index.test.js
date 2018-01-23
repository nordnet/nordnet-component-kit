import { expect } from 'chai';

import * as NCK from '../src';

describe('nordnet-component-kit', () => {
  describe('Number components', () => {
    it('should export a Currency component', () => {
      expect(typeof NCK.Currency).to.equal('function');
    });

    it('should export a Development component', () => {
      expect(typeof NCK.Development).to.equal('function');
    });

    it('should export a Percent component', () => {
      expect(typeof NCK.Percent).to.equal('function');
    });

    it('should export a Value component', () => {
      expect(typeof NCK.Value).to.equal('function');
    });
  });

  describe('Other components', () => {
    it('should export a DateTime component', () => {
      expect(typeof NCK.DateTime).to.equal('function');
    });

    it('should export a IconRow component', () => {
      expect(typeof NCK.IconRow).to.equal('function');
    });
  });

  describe('utils', () => {
    it('should export utils obejct', () => {
      expect(typeof NCK.utils).to.equal('object');
    });

    it('should export a getTickDecimals utility function', () => {
      expect(typeof NCK.utils.getTickDecimals).to.equal('function');
    });

    it('should export a getDevelopmentPercentage utility function', () => {
      expect(typeof NCK.utils.getDevelopmentPercentage).to.equal('function');
    });
  });
});
