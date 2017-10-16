import React from 'react';

const checkIfWideViewport = (breakpoint, win) => {
  if (!win || !breakpoint) {
    return false;
  }

  return win.matchMedia(`(min-width: ${breakpoint}px)`).matches;
};

/**
 * Sets the wrapped component's property 'wideViewport' to true when
 * viewport size is greater than, or equal to, given breakpoint.
 * Otherwise the property is false
 */

export default function isWideViewport(breakpoint, win = window) {
  return function (WrappedComponent) {
    class IsWideViewport extends React.Component {
      constructor(props) {
        super(props);
        this.state = {
          wideViewport: false,
        };

        this.handleResize = this.handleResize.bind(this);
      }

      componentDidMount() {
        this.handleResize();
        win.addEventListener('resize', this.handleResize);
      }

      componentWillUnmount() {
        win.removeEventListener('resize', this.handleResize);
      }

      handleResize() {
        const wideViewport = checkIfWideViewport(breakpoint, win);
        if (this.state.wideViewport !== wideViewport) {
          this.setState({ wideViewport });
        }
      }

      render() {
        return (
          <WrappedComponent
            {...this.props}
            wideViewport={this.state.wideViewport}
          />
        );
      }
    }

    IsWideViewport.displayName = `IsWideViewport(${WrappedComponent.name})`;

    return IsWideViewport;
  };
}
