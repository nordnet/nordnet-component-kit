# onClickOutside

HOC that invokes method
```javascript
handleClickOutside(event)
```
in wrapped component if a click is made outside the dom node provided in the topDOMElement callback.

Example of implementing callback:
```jsx
<div className="my-top-node" ref={this.props.topDOMElement}>
  ...
</div>
```

**Note** that topDOMElement can't be a React component.

Example usage:
```jsx
import { onClickOutside } from 'nordnet-component-kit';

class Example extends React.Component {
  constructor(props) {
    super(props);
    this.handleClickOutside = this.handleClickOutside.bind(this);
  }

  handleClickOutside(event) {
    // Do stuff when click made outside div#my-container
  }

  render() {
    return (
      <div id="my-container" ref={this.props.topDOMElement}>
        Hello
      </div>
    );
  }
}

export default onClickOutside(Example);
```

    const React = require('react');
    const { onClickOutside } = require('../src');
    const style = {
      border: '1px solid black',
      padding: '0.8rem',
    };
    class Example extends React.Component {
      constructor(props) {
        super(props);
        this.handleClickOutside = this.handleClickOutside.bind(this);
        this.handleClickInside = this.handleClickInside.bind(this);
        this.state = { outside: 'false' };
      }

      handleClickOutside() {
        this.setState({ outside: true });
      }

      handleClickInside() {
        this.setState({ outside: false });
      }

      render() {
        return (
          <span ref={this.props.topDOMElement} style={style} onClick={this.handleClickInside} >
            { this.state.outside ? 'Click on me' : 'Click outside me'}
          </span>
        );
      }
    }

    const OnClickOutsideDemo = onClickOutside(Example);

    <OnClickOutsideDemo />
