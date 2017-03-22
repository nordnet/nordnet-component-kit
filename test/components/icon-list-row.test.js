import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';

import IconListRow from '../../src/components/icon-list-row/icon-list-row';

describe('<IconListRow />', () => {
  describe('with default parameters set (value & currency/suffix)', () => {
    let component;
    const children = [
      (<div>Icon</div>),
      (<span>span1</span>),
      (<span>span2</span>),
      (<span>span3</span>),
      (<span>span4</span>),
    ];

    beforeEach(() => {
      component = shallow(
        <IconListRow>
          {children.map(child => (
            child
          ))}
        </IconListRow>
      );
    });

    it('should render children', () => {
      children.map(child => (
        expect(component.contains(child)).to.equal(true)
      ));
    });
  });
});
