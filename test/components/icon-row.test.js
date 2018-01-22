import React from 'react';
import { expect } from 'chai';
import { mount } from 'enzyme';

import IconRow from '../../src/components/icon-row/icon-row';

describe('<IconRow />', () => {
  let component;
  const icon = <div>icon</div>;
  const span1 = <span>span1</span>;
  const span2 = <span>span2</span>;
  const span3 = <span>span3</span>;
  const span4 = <span>span4</span>;

  beforeEach(() => {
    component = mount(<IconRow icon={icon} topRight={span1} topLeft={span2} bottomRight={span3} bottomLeft={span4} />);
  });

  it('should render mounted components', () => {
    expect(component.contains(icon)).to.equal(true);
    expect(component.contains(span1)).to.equal(true);
    expect(component.contains(span2)).to.equal(true);
    expect(component.contains(span3)).to.equal(true);
    expect(component.contains(span4)).to.equal(true);
  });
});
