import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';

import Addon from '../../src/components/addon/addon';

describe('<Addon />', () => {
  let component;
  const child = <div>test</div>;

  beforeEach(() => {
    component = shallow(
      <Addon className="propagatedClass" propagatedProp>
        {child}
      </Addon>,
    );
  });

  it('should render children', () => {
    expect(component.contains(child)).to.equal(true);
  });

  it('should add className "addon"', () => {
    expect(component.hasClass('addon')).to.equal(true);
  });

  it('should propagate className', () => {
    expect(component.hasClass('propagatedClass')).to.equal(true);
  });

  it('should propagate any props', () => {
    expect(component.prop('propagatedProp')).to.equal(true);
  });
});
