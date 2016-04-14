import React from 'react';
import PureComponent from 'react-pure-render/component';
import { Row, Col } from 'react-bem-grid';
import Section from '../components/section/section';
import { Currency } from 'nordnet-formatter';

class CurrencySection extends PureComponent {
  render() {
    const example = (
      <Row>
        <Col xs={ 6 } sm={ 3 } lg={ 2 }>
          <Currency value={ 9.2333 } currency={ "EUR" } decimals={ 4 } suffixSize="normal" />
        </Col>
        <Col xs={ 6 } sm={ 3 } lg={ 2 }>
          <Currency value={ 1134.2334 } suffix={ "SEK" } decimals={ 2 } suffixSize="small" />
        </Col>
        <Col xs={ 6 } sm={ 3 } lg={ 2 }>
          <Currency value={ 134.2334 } currency={ "DKK" } decimals={ 3 } />
        </Col>
      </Row>
    );

    const code = `<Currency value={ 9.2333 } currency={ "EUR" } decimals={ 4 } suffixSize="big" />
<Currency value={ 1134.2334 } suffix={ "SEK" } decimals={ 2 } suffixSize="small" />
<Currency value={ 134.2334 } currency={ "DKK" } decimals={ 3 } />`;

    return (
      <Section
        title="Currency"
        description="This is the currency component"
        example={ example }
        code={ code }
      />
    );
  }
}

export default CurrencySection;
