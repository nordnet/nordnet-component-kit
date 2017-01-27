import React, { Component } from 'react';

// Documentation here: https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/keyCode
const KEYCODE_ESC = 27;

/**
  Calls handleClickOutside function of wrapped component when a click has been made outside the
  element returned in the topDOMElement callback.
*/
export default function onClickOutside(WrappedComponent) {
  class ClickOutside extends Component {
    constructor(props) {
      super(props);
      this.handleClick = this.handleClick.bind(this);
      this.handleKeyDown = this.handleKeyDown.bind(this);
    }

    componentDidMount() {
      document.addEventListener('click', this.handleClick);
      document.addEventListener('keydown', this.handleKeyDown);
    }

    componentWillUnmount() {
      document.removeEventListener('click', this.handleClick);
      document.removeEventListener('keydown', this.handleKeyDown);
    }

    handleClick(event = {}) {
      const { target } = event;
      if (
        this.element &&
        this.wrapped &&
        target &&
        typeof this.wrapped.handleClickOutside === 'function' &&
        !this.element.contains(target)
      ) {
        this.wrapped.handleClickOutside(event);
      }
    }

    handleKeyDown(e) {
      if (e.keyCode === KEYCODE_ESC) {
        this.wrapped.handleClickOutside(event);
      }
    }

    render() {
      return (
        <WrappedComponent
          {...this.props}
          ref={(wrapped) => { this.wrapped = wrapped; }}
          topDOMElement={(element) => { this.element = element; }}
        />
      );
    }
  }

  ClickOutside.displayName = `ClickOutside(${WrappedComponent.name})`;

  return ClickOutside;
}
