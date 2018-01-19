/* eslint-disable import/first */
import './intl';
import 'babel-polyfill';

import PropTypes from 'prop-types';
import React from 'react';
import { addLocaleData, IntlProvider } from 'react-intl';
import { ThemeProvider } from 'react-jss';
import { Input, theme } from 'nordnet-ui-kit';

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
      <ThemeProvider theme={theme}>
        <div>
          <div style={wrapperStyle}>
            <Input
              type="select"
              label="Locale"
              variant="secondary"
              placeholder="Pick a locale"
              onChange={this.change}
              value={this.state.locale}
              options={this.state.options}
            />
          </div>
          <IntlProvider locale={this.state.locale}>{this.props.children}</IntlProvider>
        </div>
      </ThemeProvider>
    );
  }
}

Wrapper.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Wrapper;
