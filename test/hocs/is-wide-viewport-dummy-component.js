import React from 'react';
import isWideViewport from '../../src/hocs/is-wide-viewport/is-wide-viewport';

const Dummy = () => (<div />);

export { Dummy as Component };
export default isWideViewport(0)(Dummy);
