import React from 'react';
import PureComponent from 'react-pure-render/component';
import { Row, Col } from 'react-bem-grid';
import Section from '../components/section/section';
import { Percent } from 'nordnet-formatter';

class PercentSection extends PureComponent {
  render() {
    const example = (
      <Row>
        <Col xs={ 6 } sm={ 3 } lg={ 2 }>
          <Percent value={ 9.2333 } decimals={ 4 } suffixSeparator=" " />
        </Col>
        <Col xs={ 6 } sm={ 3 } lg={ 2 }>
          <Percent value={ 1134.2334 } decimals={ 2 } suffixSeparator="_" />
        </Col>
        <Col xs={ 6 } sm={ 3 } lg={ 2 }>
          <Percent value={ 134.2334 } decimals={ 3 } />
        </Col>
      </Row>
    );

    const code = `<Percent value={ 9.2333 } decimals={ 4 } suffixSeparator=" " />
<Percent value={ 1134.2334 } decimals={ 2 } suffixSeparator="_" />
<Percent value={ 134.2334 } decimals={ 3 } />`;

    return (
      <Section
        title="Percent"
        description="This is the percent component"
        example={ example }
        code={ code }
      />
    );
  }
}

export default PercentSection;
