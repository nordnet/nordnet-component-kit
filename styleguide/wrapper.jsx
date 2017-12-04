/* eslint-disable import/first */
import './intl';
import 'babel-polyfill';
import React from 'react';
import { addLocaleData, IntlProvider } from 'react-intl';
import { Input } from 'nordnet-ui-kit';

// Add some nice styles to the documentation
import 'nordnet-ui-kit/documentation/documentation.scss';
import 'nordnet-ui-kit/dist/input/input.css';
import 'nordnet-ui-kit/dist/tooltip/tooltip.css';

import en from 'react-intl/locale-data/en';
import sv from 'react-intl/locale-data/sv';
import fi from 'react-intl/locale-data/fi';
import nb from 'react-intl/locale-data/nb';
import da from 'react-intl/locale-data/da';

addLocaleData([...en, ...sv, ...fi, ...nb, ...da]);

const options = [
  { label: 'English', value: 'en' },
  { label: 'Swedish', value: 'sv' },
  { label: 'Finnish', value: 'fi' },
  { label: 'Norwegian', value: 'nb' },
  { label: 'Danish', value: 'da' },
];

const wrapperStyle = {
  fontSize: '14px',
  position: 'relative',
  maxWidth: '200px',
};

class Wrapper extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      locale: 'en',
      options,
    };

    this.change = this.change.bind(this);
  }

  shouldComponentUpdate(nextProps, nextState) {
    return nextState.locale !== this.state.locale;
  }

  change(event) {
    this.setState({ locale: event.target.value });
  }

  render() {
    return (
      <div>
        <div style={wrapperStyle}>
          <Input
            type="select"
            label="Locale"
            placeholder="Pick a locale"
            onChange={this.change}
            value={this.state.locale}
            options={this.state.options}
          />
        </div>
        <IntlProvider locale={this.state.locale}>
          { this.props.children }
        </IntlProvider>
      </div>
    );
  }
}

Wrapper.propTypes = {
  children: React.PropTypes.node.isRequired,
};

export default Wrapper;
