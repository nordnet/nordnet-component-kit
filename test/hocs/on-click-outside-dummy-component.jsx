import React, { PropTypes } from 'react';
import onClickOutside from '../../src/hocs/on-click-outside/on-click-outside';

class Dummy extends React.Component {
  constructor(props) {
    super(props);
    this.handleClickOutside = this.handleClickOutside.bind(this);
  }

  handleClickOutside() {
    this.props.clickedOutsideSpy();
  }

  render() {
    return (
      <div id="top">
        <div id="mid" ref={this.props.topDOMElement}>
          <div id="bot" />
        </div>
      </div>
    );
  }
}

Dummy.propTypes = {
  topDOMElement: PropTypes.func.isRequired,
  clickedOutsideSpy: PropTypes.func.isRequired,
};

export default onClickOutside(Dummy);
