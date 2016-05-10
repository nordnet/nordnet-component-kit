import React, { PropTypes } from 'react';
import classnames from 'classnames';
import { Logo, Icon, variables } from 'nordnet-ui-kit';
import './renderer.scss';

export default function Renderer({ title, components, toc, sidebar }) {
  return (
    <div className={ classnames('ReactStyleguidist-Layout__root', { 'ReactStyleguidist-Layout__sidebar': !sidebar }) }>
      <main className="ReactStyleguidist-Layout__wrapper">
        <div className="ReactStyleguidist-Layout__content">
          <div className="ReactStyleguidist-Layout__components">
            { components }
          </div>
        </div>
        <div className="ReactStyleguidist-Layout__sidebar">
          <a href="https://github.com/nordnet/nordnet-component-kit">
            <h1 className="ReactStyleguidist-Layout__heading">
              <Logo />
              { title.replace('Nordnet ', '').toLowerCase() }
            </h1>
          </a>
          { toc }
          <footer className="ReactStyleguidist-Layout__footer">
            Made with <Icon type="heart" stroke={ variables.colorPrimary } />
          </footer>
        </div>
      </main>
    </div>
  );
}

Renderer.propTypes = {
  title: PropTypes.string.isRequired,
  components: PropTypes.object.isRequired,
  toc: PropTypes.node.isRequired,
  sidebar: PropTypes.bool,
};
