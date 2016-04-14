import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import { Currency } from '../../../src';

describe('<Currency />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Currency />);
  });

  it('should render <div> as container', () => expect(wrapper.type()).to.equal('div'));
});
