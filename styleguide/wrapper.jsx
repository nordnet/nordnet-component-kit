import React from 'react';
import { addLocaleData, IntlProvider } from 'react-intl';

import en from 'react-intl/locale-data/en';
import sv from 'react-intl/locale-data/sv';
import fi from 'react-intl/locale-data/fi';
import nb from 'react-intl/locale-data/nb';
import da from 'react-intl/locale-data/da';

addLocaleData([...en, ...sv, ...fi, ...nb, ...da]);

function Wrapper({ children }) {
  return (
    <IntlProvider locale="en">
      {children}
    </IntlProvider>
  );
}

Wrapper.propTypes = {
  children: React.PropTypes.node.isRequired,
};

export default Wrapper;
