import React from 'react';
import isWideViewport from '../../src/hocs/is-wide-viewport/is-wide-viewport';

const Dummy = () => (<div />);

export default isWideViewport(Dummy);
