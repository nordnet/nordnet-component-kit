import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';

import BasicLine from '../../src/components/basic-list/basic-list';

describe('<BasicLine />', () => {
  describe('with default parameters set (value & currency/suffix)', () => {
    let component;

    beforeEach(() => {
      const musicians = ['peter', 'bjorn', 'john', 'kitti'];
      component = shallow(
        <BasicLine>
          {musicians.map(musician => (
            <h1 key={musician} style={{ margin: 0 }} >{musician}</h1>
          ))}
        </BasicLine>);
    });

    it('should render 4 children elements', () => {
      expect(component.prop('children').length).to.equal(4);
    });

    it('should render 3 line elements', () => {
      expect(component.find('hr').nodes.length).to.equal(3);
    });
  });
});
