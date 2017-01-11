import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';

import TooltipDelayContent, { delayToHHMMSS } from '../../../src/components/freshness-indicator/tooltip-delay-content';

const getComponent = (delay = 0, notActive = false) => shallow(<TooltipDelayContent delay={delay} notActive={notActive} />);
describe('<TooltipDelayContent />', () => {
  it('should render NO_DELAY message if there is no delay', () => {
    expect(getComponent().find('FormattedMessage')).to.have.prop('id', 'COMPONENT_KIT.FRESHNESS_INDICATOR.NO_DELAY');
  });

  it('should render NOT_ACTIVE message if notActive is set', () => {
    expect(getComponent(1, true).find('FormattedMessage')).to.have.prop('id', 'COMPONENT_KIT.FRESHNESS_INDICATOR.NOT_ACTIVE');
  });

  it('should render 2 formatted messages if the delay is 1 sec', () => {
    expect(getComponent(1).find('FormattedMessage')).to.have.length(2);
  });

  it('should render 3 formatted messages if the delay is 61 sec', () => {
    expect(getComponent(61).find('FormattedMessage')).to.have.length(3);
  });

  it('should render 4 formatted messages if the delay is 60 * 61 + 1 sec', () => {
    expect(getComponent((60 * 61) + 1).find('FormattedMessage')).to.have.length(4);
  });

  it('should render DELAY message if delay is larger than 1 and notActive is false', () => {
    expect(getComponent(1).find('FormattedMessage[id="COMPONENT_KIT.FRESHNESS_INDICATOR.DELAY"]')).to.have.length(1);
  });

  describe('delayToHHMMSS function', () => {
    it('should return 2 on hour value if delay is 3600 * 2 + 1234', () => {
      expect(delayToHHMMSS((3600 * 2) + 1234).hours).to.equal(2);
    });

    it('should return 3 on minute value if delay is 60 * 3 + 13', () => {
      expect(delayToHHMMSS((60 * 3) + 13).minutes).to.equal(3);
    });

    it('should return 52 on second value if delay is 52', () => {
      expect(delayToHHMMSS(52).seconds).to.equal(52);
    });

    it('should not have any hour or minute key if delay is < 60', () => {
      expect(delayToHHMMSS(52)).to.deep.equal({
        seconds: 52,
      });
    });
  });
});
