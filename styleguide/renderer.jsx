import React, { PropTypes } from 'react';
import classnames from 'classnames';
import { Logo, Icon, variables } from 'nordnet-ui-kit';
import './renderer.scss';
import './intl.js';

class Renderer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: !window.Intl,
    };
  }

  componentDidMount() {
    if (this.state.isLoading) {
      const that = this;
      this.looper = setInterval(function loadIntl() {
        if (window.Intl) {
          clearInterval(this.looper);
          that.setState({ isLoading: false });
        }
      }, 250);
    }
  }

  render() {
    const { title, components, toc, sidebar } = this.props;
    if (this.state.isLoading) {
      return null;
    }

    return (
      <div className={classnames('ReactStyleguidist-Layout__root')}>
        <main className="ReactStyleguidist-Layout__wrapper">
          <div className="ReactStyleguidist-Layout__content">
            <div className="ReactStyleguidist-Layout__components">
              { components }
            </div>
          </div>
          <div
            className={classnames(
              'ReactStyleguidist-Layout__sidebar',
              { 'ReactStyleguidist-Layout__sidebar--hidden': !sidebar })}
          >
            <a href="https://github.com/nordnet/nordnet-component-kit">
              <h1 className="ReactStyleguidist-Layout__heading">
                <Logo />
                { title.replace('Nordnet ', '').toLowerCase() }
              </h1>
            </a>
            { toc }
            <footer className="ReactStyleguidist-Layout__footer">
              Made with <Icon type="heart" stroke={variables.colorPrimary} />
            </footer>
          </div>
        </main>
      </div>
    );
  }
}

Renderer.propTypes = {
  title: PropTypes.string.isRequired,
  components: PropTypes.object.isRequired,
  toc: PropTypes.node.isRequired,
  sidebar: PropTypes.bool,
};

export default Renderer;
