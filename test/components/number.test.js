import React from 'react';
import { IntlProvider } from 'react-intl';
import { expect } from 'chai';
import { shallow } from 'enzyme';

import Number from '../../src/components/number/number';
import { getFractionDigits } from '../../src/utils';
import Addon from '../../src/components/addon/addon';
import VisuallyHidden from '../../src/components/visually-hidden/visually-hidden';

const intlProvider = new IntlProvider({ locale: 'en' }, {});
const { intl } = intlProvider.getChildContext();

describe('<Number />', () => {
  describe('with default parameter set (value)', () => {
    let component;
    const defaultValue = 2.5432;

    beforeEach(() => {
      component = shallow(<Number.WrappedComponent value={defaultValue} valueClass="test" intl={intl} />);
    });

    it('minimumFractionDigits should be 2 and maximumFractionDigits to 2', () => {
      expect(getFractionDigits(null, null, 2)).to.equal(2);
    });

    it('should consist of two spans', () => {
      expect(component.find('span')).to.have.length(2);
    });

    it('should have value placed in the inner span', () => {
      expect(component.find('.test').text()).to.equal('2.54');
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
      const component = shallow(<Number.WrappedComponent intl={intl} valueClass="test" value={1.4444} valueDecimals={decimals} />);
      expect(component.find('.test').text()).to.equal('1.444');
    });

    it('should display 4 decimals when value < 0.5', () => {
      const component = shallow(<Number.WrappedComponent intl={intl} valueClass="test" value={0.2} ticks={ticks} />);
      expect(component.find('.test').text()).to.equal('0.2000');
    });

    it('should display 3 decimals when value >= 1 and value < 2', () => {
      const component = shallow(<Number.WrappedComponent intl={intl} valueClass="test" value={1.22} ticks={ticks} />);
      expect(component.find('.test').text()).to.equal('1.220');
    });

    it('should display 1 decimals when value >= 500 and value < 1000', () => {
      const component = shallow(<Number.WrappedComponent intl={intl} valueClass="test" value={888} ticks={ticks} />);
      expect(component.find('.test').text()).to.equal('888.0');
    });

    it('should default to valueDecimals when there is no matching tick', () => {
      const decimals = 1;
      const component = shallow(
        <Number.WrappedComponent intl={intl} valueClass="test" value={444} ticks={ticks} valueDecimals={decimals} />,
      );
      expect(component.find('.test').text()).to.equal('444.0');
    });

    it('should find correct tick when value > to_price and value < to_price + tick', () => {
      const component = shallow(<Number.WrappedComponent intl={intl} valueClass="test" value={999.7} ticks={ticks} />);
      expect(component.find('.test').text()).to.equal('999.7');
    });

    it('should respect maximum number of decimals when no ticks given', () => {
      const valueMaxDecimals = 3;
      const valueDecimals = 2;
      const component = shallow(
        <Number.WrappedComponent
          intl={intl}
          valueClass="test"
          value={99.12345}
          valueDecimals={valueDecimals}
          valueMaxDecimals={valueMaxDecimals}
        />,
      );
      expect(component.find('.test').text()).to.equal('99.123');
    });

    it('should respect minimum number of decimals when no ticks given', () => {
      const valueMinDecimals = 4;
      const valueDecimals = 5;
      const component = shallow(
        <Number.WrappedComponent
          intl={intl}
          valueClass="test"
          value={99.1}
          valueDecimals={valueDecimals}
          valueMinDecimals={valueMinDecimals}
        />,
      );
      expect(component.find('.test').text()).to.equal('99.1000');
    });

    it('should respect ticks when max and min num of decimals given', () => {
      const tick = ticks[3];
      const valueMaxDecimals = tick.decimals + 1;
      const valueMinDecimals = tick.decimals - 1;
      const value = tick.from_price + tick.tick;
      const component = shallow(
        <Number.WrappedComponent
          intl={intl}
          valueClass="test"
          value={value}
          valueMinDecimals={valueMinDecimals}
          valueMaxDecimals={valueMaxDecimals}
          ticks={[tick]}
        />,
      );
      expect(component.find('.test').text()).to.equal('0.0001');
    });

    it('should default to decimals when no ticks nor max num decimals', () => {
      const decimals = 3;
      const value = 3.1415;
      const component = shallow(
        <Number.WrappedComponent intl={intl} valueClass="test" value={value} ticks={[]} valueDecimals={decimals} />,
      );
      expect(component.find('.test').text()).to.equal('3.142');
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
    expect(component.find('Addon[position="left"]').prop('addon')).to.equal(prefix);
  });

  it('should be possible to add a suffix', () => {
    const suffix = '987654321';
    const component = shallow(<Number.WrappedComponent intl={intl} value={1} suffix={suffix} />);
    expect(
      component
        .find('Addon[position="right"]')
        .render()
        .text(),
    ).to.equal(suffix);
  });

  it('should be possible to add a prefix and a suffix', () => {
    const data = ['123456789', '987654321'];
    const component = shallow(<Number.WrappedComponent intl={intl} value={1} prefix={data[0]} suffix={data[1]} />);
    component.find(Addon).forEach((node, index) => {
      expect(node.prop('addon'), data[index]);
    });
  });

  it('should be able to add custom classes to prefix', () => {
    const prefixClass = 'custom-class';
    const component = shallow(<Number.WrappedComponent intl={intl} value={1} prefix="." prefixClass={prefixClass} />);
    expect(component.find('Addon[position="left"]').prop('className')).to.equal(prefixClass);
  });

  it('should be able to add custom classes to suffix', () => {
    const suffixClass = 'custom-class';
    const component = shallow(<Number.WrappedComponent intl={intl} value={1} suffix="." suffixClass={suffixClass} />);
    expect(component.find('Addon[position="right"]').prop('className')).to.equal(suffixClass);
  });

  it('should be able to add custom classes to value', () => {
    const valueClass = 'custom-class';
    const component = shallow(<Number.WrappedComponent intl={intl} value={1} valueClass={valueClass} />);
    expect(component.find('.custom-class')).to.have.length(1);
  });

  it('should be able to add custom styles to prefix', () => {
    const prefixStyle = { color: 'custom' };
    const component = shallow(<Number.WrappedComponent intl={intl} value={1} prefix="." prefixStyle={prefixStyle} />);
    expect(component.find('Addon[position="left"]').prop('style')).to.deep.equal(prefixStyle);
  });

  it('should be able to add custom styles to suffix', () => {
    const suffixStyle = { color: 'custom' };
    const component = shallow(<Number.WrappedComponent intl={intl} value={1} suffix="." suffixStyle={suffixStyle} />);
    expect(component.find('Addon[position="right"]').prop('style')).to.deep.equal(suffixStyle);
  });

  it('should be able to add custom styles to value', () => {
    const valueStyle = { color: 'custom' };
    const component = shallow(<Number.WrappedComponent intl={intl} value={1} valueStyle={valueStyle} />);
    expect(component.find('.number > span').prop('style')).to.equal(valueStyle);
  });

  it('should be able to add custom prefixSeparator', () => {
    const component = shallow(<Number.WrappedComponent intl={intl} value={1} prefix=":" prefixSeparator=")" />);
    expect(component.find('Addon[position="left"]').prop('separator')).to.equal(')');
  });

  it('should be able to add custom suffixSeparator', () => {
    const component = shallow(<Number.WrappedComponent intl={intl} value={1} suffix="(" suffixSeparator=":" />);
    expect(component.find('Addon[position="right"]').prop('separator')).to.deep.equal(':');
  });

  it('should be able to handle null value as dash', () => {
    const component = shallow(<Number.WrappedComponent valueClass="test" intl={intl} value={null} useDashForInvalidValues />);
    expect(component.find('span').text()).to.equal('–');
  });

  it('should be able to handle undefined value as dash', () => {
    const component = shallow(<Number.WrappedComponent valueClass="test" intl={intl} value={undefined} useDashForInvalidValues />);
    expect(component.find('span').text()).to.equal('–');
  });

  it('should be able to handle NaN value as dash', () => {
    const component = shallow(<Number.WrappedComponent valueClass="test" intl={intl} value={1 / 0} useDashForInvalidValues />);
    expect(component.find('span').text()).to.equal('–');
  });

  it('should be able to handle infinity value as dash', () => {
    const component = shallow(
      <Number.WrappedComponent valueClass="test" intl={intl} value={Number.POSITIVE_INFINITY} useDashForInvalidValues />,
    );
    expect(component.find('span').text()).to.equal('–');
  });

  it('should be able to handle negative infinity value as dash', () => {
    const component = shallow(
      <Number.WrappedComponent valueClass="test" intl={intl} value={Number.NEGATIVE_INFINITY} useDashForInvalidValues />,
    );
    expect(component.find('span').text()).to.equal('–');
  });

  describe('abbreviation', () => {
    it('should add M abbreviation suffix for million', () => {
      const suffix = 'SEK';
      const component = shallow(<Number.WrappedComponent intl={intl} value={9} suffix={suffix} abbreviation="million" />);
      expect(
        component
          .find('Addon[position="right"]')
          .render()
          .text(),
      ).to.equal(`M${suffix}`);
    });

    it('should transform 10,000,000 to 10 M', () => {
      const component = shallow(
        <Number.WrappedComponent intl={intl} value={10000000} valueClass="test" abbreviation="million" valueDecimals={0} />,
      );

      expect(component.find('.test').text()).to.equal('10');
    });

    it('should work together with decimals', () => {
      const component = shallow(
        <Number.WrappedComponent intl={intl} value={9600000} valueClass="test" abbreviation="million" valueDecimals={1} />,
      );

      expect(component.find('.test').text()).to.equal('9.6');
    });
  });

  describe.only('a11y', () => {
    const render = props => shallow(<Number.WrappedComponent intl={intl} valueClass="value" {...props} />);
    const findA11ySpan = component => component.find(VisuallyHidden).dive();
    it('should render a a11y-friendly number', () => {
      const a11ySpan = findA11ySpan(render({ value: 1.0 }));
      expect(a11ySpan.children().contains(1.0)).to.equal(true);
    });
    it('should render a a11y-friendly negative number', () => {
      const a11ySpan = findA11ySpan(render({ value: -1 }));
      expect(a11ySpan.children().contains(-1)).to.equal(true);
    });
    it('should have the right amount of decimals', () => {
      const a11ySpan = findA11ySpan(render({ value: 1.777, valueMaxDecimals: 2 }));
      expect(a11ySpan.children().contains('1.78')).to.equal(true);
    });
    it('should not round off', () => {
      const a11ySpan = findA11ySpan(render({ value: 1.777, valueMaxDecimals: 5 }));
      expect(a11ySpan.children().contains(1.777)).to.equal(true);
    });
    it('should prefer the ariaPrefix', () => {
      const a11ySpan = findA11ySpan(render({ value: 1, ariaPrefix: '-', prefix: <span /> }));
      expect(a11ySpan.children().contains('-')).to.equal(true);
      expect(a11ySpan.children().contains(1)).to.equal(true);
    });
  });
});
