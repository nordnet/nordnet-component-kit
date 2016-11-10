import React from 'react';
import { IntlProvider } from 'react-intl';
import { expect } from 'chai';
import { shallow } from 'enzyme';

import Number, { getFractionDigits } from '../../src/components/number/number';
import Addon from '../../src/components/addon/addon';

const intlProvider = new IntlProvider({ locale: 'en' }, {});
const { intl } = intlProvider.getChildContext();

describe('<Number />', () => {
  describe('with default parameter set (value)', () => {
    let component;
    const defaultValue = 2.5432;

    beforeEach(() => {
      component = shallow(
        <Number.WrappedComponent
          value={defaultValue}
          intl={intl}
        />);
    });

    it('minimumFractionDigits should be 2 and maximumFractionDigits to 2', () => {
      expect(getFractionDigits(null, null, 2)).to.equal(2);
    });

    it('should consist of two spans', () => {
      expect(component.find('span')).to.have.length(2);
    });

    it('should have value placed in the inner span', () => {
      expect(component.find('.number > span').text()).to.equal('2.54');
    });

    it('should have value as title', () => {
      expect(component.find('span.number').prop('title')).to.equal('2.54');
    });
  });

  describe('ticks', () => {
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

    it('should default to valueDecimals when no ticks are supplied', () => {
      const decimals = 3;
      const component = shallow(<Number.WrappedComponent intl={intl} value={1.4444} valueDecimals={decimals} />);
      expect(component.find('.number > span').text()).to.equal('1.444');
    });

    it('should display 4 decimals when value < 0.5', () => {
      const component = shallow(<Number.WrappedComponent intl={intl} value={0.2} ticks={ticks} />);
      expect(component.find('.number > span').text()).to.equal('0.2000');
    });

    it('should display 3 decimals when value >= 1 and value < 2', () => {
      const component = shallow(<Number.WrappedComponent intl={intl} value={1.22} ticks={ticks} />);
      expect(component.find('.number > span').text()).to.equal('1.220');
    });

    it('should display 1 decimals when value >= 500 and value < 1000', () => {
      const component = shallow(<Number.WrappedComponent intl={intl} value={888} ticks={ticks} />);
      expect(component.find('.number > span').text()).to.equal('888.0');
    });

    it('should default to valueDecimals when there is no matching tick', () => {
      const decimals = 1;
      const component = shallow(<Number.WrappedComponent intl={intl} value={444} ticks={ticks} valueDecimals={decimals} />);
      expect(component.find('.number > span').text()).to.equal('444.0');
    });

    it('should find correct tick when value > to_price and value < to_price + tick', () => {
      const component = shallow(<Number.WrappedComponent intl={intl} value={999.7} ticks={ticks} />);
      expect(component.find('.number > span').text()).to.equal('999.7');
    });

    it('should respect maximum number of decimals when no ticks given', () => {
      const valueMaxDecimals = 3;
      const valueDecimals = 2;
      const component = shallow(<Number.WrappedComponent
        intl={intl}
        value={99.12345}
        valueDecimals={valueDecimals}
        valueMaxDecimals={valueMaxDecimals}
      />);
      expect(component.find('.number > span').text()).to.equal('99.123');
    });

    it('should respect minimum number of decimals when no ticks given', () => {
      const valueMinDecimals = 4;
      const valueDecimals = 5;
      const component = shallow(<Number.WrappedComponent
        intl={intl}
        value={99.1}
        valueDecimals={valueDecimals}
        valueMinDecimals={valueMinDecimals}
      />);
      expect(component.find('.number > span').text()).to.equal('99.1000');
    });

    it('should respect ticks when max and min num of decimals given', () => {
      const tick = ticks[3];
      const valueMaxDecimals = tick.decimals + 1;
      const valueMinDecimals = tick.decimals - 1;
      const value = tick.from_price + tick.tick;
      const component = shallow(<Number.WrappedComponent
        intl={intl}
        value={value}
        valueMinDecimals={valueMinDecimals}
        valueMaxDecimals={valueMaxDecimals}
        ticks={[tick]}
      />);
      expect(component.find('.number > span').text()).to.equal('0.0001');
    });

    it('should default to decimals when no ticks nor max num decimals', () => {
      const decimals = 3;
      const value = 3.1415;
      const component = shallow(<Number.WrappedComponent intl={intl} value={value} ticks={[]} valueDecimals={decimals} />);
      expect(component.find('.number > span').text()).to.equal('3.142');
    });
  });

  it('should add white-space: "nowrap" to Number', () => {
    const component = shallow(<Number.WrappedComponent intl={intl} value={1} />);
    expect(component.prop('style').whiteSpace).to.equal('nowrap');
  });

  it('should add class "number" to Number', () => {
    const component = shallow(<Number.WrappedComponent intl={intl} value={1} />);
    expect(component.hasClass('number')).to.equal(true);
  });

  it('should be possible to add a prefix', () => {
    const prefix = '123456789';
    const component = shallow(<Number.WrappedComponent intl={intl} value={1} prefix={prefix} />);
    expect(component.find(Addon).children().text()).to.equal(prefix);
  });

  it('should be possible to add a suffix', () => {
    const suffix = '987654321';
    const component = shallow(<Number.WrappedComponent intl={intl} value={1} suffix={suffix} />);
    expect(component.find(Addon).children().text()).to.equal(suffix);
  });

  it('should be possible to add a prefix and a suffix', () => {
    const data = ['123456789', '987654321'];
    const component = shallow(<Number.WrappedComponent intl={intl} value={1} prefix={data[0]} suffix={data[1]} />);
    component.find(Addon).forEach((node, index) => {
      expect(node.children().text(), data[index]);
    });
  });

  it('should add default class addon--left to prefix', () => {
    const component = shallow(<Number.WrappedComponent intl={intl} value={1} prefix="." />);
    expect(component.find(Addon).hasClass('addon--left')).to.equal(true);
  });

  it('should add default class addon--right to suffix', () => {
    const component = shallow(<Number.WrappedComponent intl={intl} value={1} suffix="." />);
    expect(component.find(Addon).hasClass('addon--right')).to.equal(true);
  });

  it('should be able to add custom classes to prefix', () => {
    const prefixClass = 'custom-class';
    const component = shallow(<Number.WrappedComponent intl={intl} value={1} prefix="." prefixClass={prefixClass} />);
    expect(component.find(Addon).hasClass(prefixClass)).to.equal(true);
  });

  it('should be able to add custom classes to suffix', () => {
    const suffixClass = 'custom-class';
    const component = shallow(<Number.WrappedComponent intl={intl} value={1} suffix="." suffixClass={suffixClass} />);
    expect(component.find(Addon).hasClass(suffixClass)).to.equal(true);
  });

  it('should be able to add custom classes to value', () => {
    const valueClass = 'custom-class';
    const component = shallow(<Number.WrappedComponent intl={intl} value={1} valueClass={valueClass} />);
    expect(component.find('.custom-class')).to.have.length(1);
  });

  it('should be able to add custom styles to prefix', () => {
    const prefixStyle = { color: 'custom' };
    const component = shallow(<Number.WrappedComponent intl={intl} value={1} prefix="." prefixStyle={prefixStyle} />);
    expect(component.find(Addon).prop('style')).to.deep.equal(prefixStyle);
  });

  it('should be able to add custom styles to suffix', () => {
    const suffixStyle = { color: 'custom' };
    const component = shallow(<Number.WrappedComponent intl={intl} value={1} suffix="." suffixStyle={suffixStyle} />);
    expect(component.find(Addon).prop('style')).to.deep.equal(suffixStyle);
  });

  it('should be able to add custom styles to value', () => {
    const valueStyle = { color: 'custom' };
    const component = shallow(<Number.WrappedComponent intl={intl} value={1} valueStyle={valueStyle} />);
    expect(component.find('.number > span').prop('style')).to.equal(valueStyle);
  });

  it('should be able to add custom prefixSeparator', () => {
    const component = shallow(<Number.WrappedComponent intl={intl} value={1} prefix=":" prefixSeparator=")" />);
    expect(component.find(Addon).children().text()).to.equal(':)');
  });

  it('should be able to add custom suffixSeparator', () => {
    const component = shallow(<Number.WrappedComponent intl={intl} value={1} suffix="(" suffixSeparator=":" />);
    expect(component.find(Addon).children().text()).to.deep.equal(':(');
  });
});
