import React from 'react';
import PureComponent from 'react-pure-render/component';
import { Row, Col } from 'react-bem-grid';
import Section from '../components/section/section';
import { Development } from 'nordnet-component-kit';

class DevelopmentSection extends PureComponent {
  render() {
    const example = (
      <Row>
        <Col xs={ 6 } sm={ 3 } lg={ 2 }>
          <Development value={ 9.2333 } decimals={ 4 } />
        </Col>
        <Col xs={ 6 } sm={ 3 } lg={ 2 }>
          <Development value={ -112.2334 } decimals={ 2 } />
        </Col>
        <Col xs={ 6 } sm={ 3 } lg={ 2 }>
          <Development value={ 0 } decimals={ 1 } type="number" />
        </Col>
        <Col xs={ 6 } sm={ 3 } lg={ 2 }>
          <Development value={ 2.2333 } type="percentage" />
        </Col>
        <Col xs={ 6 } sm={ 3 } lg={ 2 }>
          <Development value={ -1.2334 } type="currency" currency="SEK" suffixSize="small" />
        </Col>
        <Col xs={ 6 } sm={ 3 } lg={ 2 }>
          <Development value={ 0 } decimals={ 3 } type="currency" suffix="USD" />
        </Col>
      </Row>
    );

    const code = `<Development value={ 9.2333 } decimals={ 4 } />
<Development value={ -112.2334 } decimals={ 2 } />
<Development value={ 0 } decimals={ 1 } type="number" />
<Development value={ 2.2333 } type="percentage" />
<Development value={ -1.2334 } type="currency" currency="SEK" suffixSize="small" />
<Development value={ 0 } decimals={ 3 } type="currency" suffix="USD" />`;

    return (
      <Section
        title="Development"
        description="This is the development component"
        example={ example }
        code={ code }
      />
    );
  }
}

export default DevelopmentSection;
