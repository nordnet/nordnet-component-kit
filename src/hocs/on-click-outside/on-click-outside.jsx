import React, { Component } from 'react';

/**
  Calls handleClickOutside function of wrapped component when a click has been made outside the
  element returned in the topDOMElement callback.
*/
export default function onClickOutside(WrappedComponent) {
  class ClickOutside extends Component {
    constructor(props) {
      super(props);
      this.handleClick = this.handleClick.bind(this);
    }

    componentDidMount() {
      document.addEventListener('click', this.handleClick);
    }

    componentWillUnmount() {
      document.removeEventListener('click', this.handleClick);
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
