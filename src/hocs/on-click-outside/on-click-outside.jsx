import React, { Component } from 'react';

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
      this.handleKeyUp = this.handleKeyUp.bind(this);
    }

    componentDidMount() {
      document.addEventListener('click', this.handleClick);
      document.addEventListener('keyup', this.handleKeyUp);
    }

    componentWillUnmount() {
      document.removeEventListener('click', this.handleClick);
      document.removeEventListener('keyup', this.handleKeyUp);
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

    handleKeyUp(e) {
      // "key" is the new way, not yet supported in all browsers
      if (e.key && e.key === 'Escape') {
        this.wrapped.handleClickOutside(e);
      } else {
        // fallback to "which" for other browsers
        if (!e.which && (e.charCode || e.keyCode)) {
          e.which = e.charCode ? e.charCode : e.keyCode;
        }
        if (e.which === KEYCODE_ESC) {
          this.wrapped.handleClickOutside(e);
        }
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
