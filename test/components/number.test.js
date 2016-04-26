import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import Number from '../../src/components/number/number';
import Addon from '../../src/components/addon/addon';
import { FormattedNumber } from 'react-intl';

describe('<Number />', () => {
  describe('with default parameter set (value)', () => {
    let component;
    const defaultValue = 2.5432;

    beforeEach(() => {
      component = shallow(
        <Number
          value={ defaultValue }
        />);
    });

    it('should default to set minimumFractionDigits and maximumFractionDigits to 2', () => {
      expect(component.find(FormattedNumber).prop('maximumFractionDigits')).to.equal(2);
      expect(component.find(FormattedNumber).prop('minimumFractionDigits')).to.equal(2);
    });

    it('should pass value through to FormattedNumber', () => {
      expect(component.find(FormattedNumber).prop('value')).to.equal(defaultValue);
    });
  });

  it('should add "white-space": "nowrap" to Number', () => {
    const component = shallow(<Number value={ 1 } />);
    expect(component.prop('style').whiteSpace).to.equal('nowrap');
  });

  it('should add class "number" to Number', () => {
    const component = shallow(<Number value={ 1 } />);
    expect(component.hasClass('number')).to.equal(true);
  });

  it('should be possible to add a prefix', () => {
    const prefix = '123456789';
    const component = shallow(<Number value={ 1 } prefix={ prefix } />);
    expect(component.find(Addon).children().text()).to.equal(prefix);
  });

  it('should be possible to add a suffix', () => {
    const suffix = '987654321';
    const component = shallow(<Number value={ 1 } suffix={ suffix } />);
    expect(component.find(Addon).children().text()).to.equal(suffix);
  });

  it('should be possible to add a prefix and a suffix', () => {
    const data = ['123456789', '987654321'];
    const component = shallow(<Number value={ 1 } prefix={ data[0] } suffix={ data[1] } />);
    component.find(Addon).forEach((node, index) => {
      expect(node.children().text(), data[index]);
    });
  });

  it('should add default class addon--left to prefix', () => {
    const component = shallow(<Number value={ 1 } prefix="." />);
    expect(component.find(Addon).hasClass('addon--left')).to.equal(true);
  });

  it('should add default class addon--right to suffix', () => {
    const component = shallow(<Number value={ 1 } suffix="." />);
    expect(component.find(Addon).hasClass('addon--right')).to.equal(true);
  });

  it('should be able to add custom classes to prefix', () => {
    const prefixClass = 'custom-class';
    const component = shallow(<Number value={ 1 } prefix="." prefixClass={ prefixClass } />);
    expect(component.find(Addon).hasClass(prefixClass)).to.equal(true);
  });

  it('should be able to add custom classes to suffix', () => {
    const suffixClass = 'custom-class';
    const component = shallow(<Number value={ 1 } suffix="." suffixClass={ suffixClass } />);
    expect(component.find(Addon).hasClass(suffixClass)).to.equal(true);
  });

  it('should be able to add custom classes to value', () => {
    const valueClass = 'custom-class';
    const component = shallow(<Number value={ 1 } valueClass={ valueClass } />);
    expect(component.find(FormattedNumber).parent().hasClass(valueClass)).to.equal(true);
  });

  it('should be able to add custom styles to prefix', () => {
    const prefixStyle = { color: 'custom' };
    const component = shallow(<Number value={ 1 } prefix="." prefixStyle={ prefixStyle } />);
    expect(component.find(Addon).prop('style')).to.deep.equal(prefixStyle);
  });

  it('should be able to add custom styles to suffix', () => {
    const suffixStyle = { color: 'custom' };
    const component = shallow(<Number value={ 1 } suffix="." suffixStyle={ suffixStyle } />);
    expect(component.find(Addon).prop('style')).to.deep.equal(suffixStyle);
  });

  it('should be able to add custom styles to value', () => {
    const valueStyle = { color: 'custom' };
    const component = shallow(<Number value={ 1 } valueStyle={ valueStyle } />);
    expect(component.find(FormattedNumber).parent().prop('style')).to.deep.equal(valueStyle);
  });

  it('should be able to add custom prefixSeparator', () => {
    const component = shallow(<Number value={ 1 } prefix=":" prefixSeparator=")" />);
    expect(component.find(Addon).children().text()).to.equal(':)');
  });

  it('should be able to add custom suffixSeparator', () => {
    const component = shallow(<Number value={ 1 } suffix="(" suffixSeparator=":" />);
    expect(component.find(Addon).children().text()).to.deep.equal(':(');
  });
});
