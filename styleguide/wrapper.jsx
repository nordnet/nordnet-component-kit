import React from 'react';
import { addLocaleData, IntlProvider } from 'react-intl';

import en from 'react-intl/locale-data/en';
import sv from 'react-intl/locale-data/sv';
import fi from 'react-intl/locale-data/fi';
import nb from 'react-intl/locale-data/nb';
import da from 'react-intl/locale-data/da';

addLocaleData([...en, ...sv, ...fi, ...nb, ...da]);

const optionNames = {
  en: 'English',
  sv: 'Swedish',
  fi: 'Finnish',
  nb: 'Norwegian',
  da: 'Danish',
};

const wrapperStyle = {
  fontFamily: 'monospace',
  fontSize: '14px',
  display: 'block',
  position: 'relative',
  top: '-15px',
  left: '-15px',
  paddingLeft: '15px',
  paddingTop: '5px',
  paddingBottom: '5px',
  width: '200px',
  background: '#f5f5f5',
  borderRadius: '2px',
};

class Wrapper extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      locale: 'en',
      options: Object.keys(optionNames),
      optionNames,
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
        <div style={ wrapperStyle }>
          <label htmlFor="select-locale">Locale: </label>
          <select name="select-locale" onChange={ this.change } value={ this.state.locale }>
            { this.state.options.map(locale => (
              <option key={ locale } value={ locale }>
                { this.state.optionNames[locale] }
              </option>
              ))
            }
          </select>
        </div>
        <IntlProvider locale={ this.state.locale }>
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
