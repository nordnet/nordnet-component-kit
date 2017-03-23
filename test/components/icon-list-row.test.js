import React from 'react';
import { expect } from 'chai';
import { mount } from 'enzyme';

import IconListRow from '../../src/components/icon-list-row/icon-list-row';

describe('<IconListRow />', () => {
  let component;
  const icon = (<div>icon</div>);
  const span1 = (<span>span1</span>);
  const span2 = (<span>span2</span>);
  const span3 = (<span>span3</span>);
  const span4 = (<span>span4</span>);

  beforeEach(() => {
    component = mount(
      <IconListRow
        iconComponent={icon}
        topRightComponent={span1}
        topLeftComponent={span2}
        bottomRightComponent={span3}
        bottomLeftComponent={span4}
      />
    );
  });

  it('should render mounted components', () => {
    expect(component).to.contain(icon);
    expect(component).to.contain(span1);
    expect(component).to.contain(span2);
    expect(component).to.contain(span3);
    expect(component).to.contain(span4);
  });
});
