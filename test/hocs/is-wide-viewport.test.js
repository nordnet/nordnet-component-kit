import React from 'react';
import { expect } from 'chai';
import { mount } from 'enzyme';
import sinon from 'sinon';

import { Component as DummyComponent } from './is-wide-viewport-dummy-component';
import isWideViewport from '../../src/hocs/is-wide-viewport/is-wide-viewport';

const sandbox = sinon.sandbox.create();

describe('isWideViewport HOC', () => {
  afterEach(() => {
    sandbox.restore();
  });

  it('should have correct name', () => {
    const expected = `IsWideViewport(${DummyComponent.name})`;
    const actual = isWideViewport()(DummyComponent).displayName;

    expect(actual).to.equal(expected);
  });

  it('should set wideViewport to true when window width above threshold on mount', () => {
    const mockedWindow = {
      matchMedia: () => ({ matches: true }),
      addEventListener: () => {},
    };
    const WrappingComponent = isWideViewport(10, mockedWindow)(DummyComponent);
    const component = mount(<WrappingComponent />);
    const actual = component.state('wideViewport');

    expect(actual).to.be.true();
  });

  it('should set wideViewport to false when window width above threshold on mount', () => {
    const mockedWindow = {
      matchMedia: () => ({ matches: false }),
      addEventListener: () => {},
    };
    const WrappingComponent = isWideViewport(10, mockedWindow)(DummyComponent);
    const component = mount(<WrappingComponent />);

    expect(component.state('wideViewport')).to.be.false();
  });

  it('should set wrapped components wideViewport prop to true when window width changes from below to above threshold', () => {
    let resizeCallback;
    const mockedWindow = {
      matchMedia: () => ({ matches: false }),
      addEventListener: (name, cb) => (resizeCallback = cb),
    };
    const WrappingComponent = isWideViewport(10, mockedWindow)(DummyComponent);
    const component = mount(<WrappingComponent />);
    const WrappedComponent = component.find(DummyComponent);

    mockedWindow.matchMedia = () => ({ matches: true });
    resizeCallback();

    expect(WrappedComponent.prop('wideViewport')).to.be.true();
  });

  it('should set wrapped components wideViewport prop to false when window width changes from above to below threshold', () => {
    let resizeCallback;
    const mockedWindow = {
      matchMedia: () => ({ matches: true }),
      addEventListener: (name, cb) => (resizeCallback = cb),
    };
    const WrappingComponent = isWideViewport(10, mockedWindow)(DummyComponent);
    const component = mount(<WrappingComponent />);
    const WrappedComponent = component.find(DummyComponent);

    mockedWindow.matchMedia = () => ({ matches: false });
    resizeCallback();

    expect(WrappedComponent.prop('wideViewport')).to.be.false();
  });

  it('should remove event listener on unmount', () => {
    const removeEventListenerSpy = sandbox.spy();
    const mockedWindow = {
      matchMedia: () => ({ matches: true }),
      addEventListener: () => {},
      removeEventListener: removeEventListenerSpy,
    };
    const WrappingComponent = isWideViewport(10, mockedWindow)(DummyComponent);
    const component = mount(<WrappingComponent />);
    component.unmount();

    expect(removeEventListenerSpy.called).to.be.true();
  });
});
