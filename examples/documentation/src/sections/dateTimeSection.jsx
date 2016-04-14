import React from 'react';
import PureComponent from 'react-pure-render/component';
import { Row, Col } from 'react-bem-grid';
import Section from '../components/section/section';
import { DateTime } from 'nordnet-component-kit';

class DateTimeSection extends PureComponent {
  render() {
    const example = (
      <Row>
        <Col xs={ 6 } sm={ 3 } lg={ 2 }>
          <DateTime value={ new Date() } />
        </Col>
        <Col xs={ 6 } sm={ 3 } lg={ 2 }>
          <DateTime value={ new Date() } iso minute="numeric" />
        </Col>
        <Col xs={ 6 } sm={ 3 } lg={ 2 }>
          <DateTime value={ 19234829847289 } format="human" />
        </Col>
        <Col xs={ 6 } sm={ 3 } lg={ 2 }>
          <DateTime value={ 19234829847289 } format="numeric" type="date" />
        </Col>
        <Col xs={ 6 } sm={ 3 } lg={ 2 }>
          <DateTime value={ (new Date() - 24 * 60 * 60 * 1000) } format="human" type="relative" />
        </Col>
        <Col xs={ 6 } sm={ 3 } lg={ 2 }>
          <DateTime value={ (new Date() - 24 * 60 * 60 * 1000) } format="numeric" type="relative" />
        </Col>
      </Row>
    );

    const code = `<DateTime value={ new Date() } />
<DateTime value={ new Date() } iso minute="numeric" />
<DateTime value={ 19234829847289 } format="human" />
<DateTime value={ 19234829847289 } format="numeric" type="date" />
<DateTime value={ (new Date() - 24 * 60 * 60 * 1000) } format="human" type="relative" />
<DateTime value={ (new Date() - 24 * 60 * 60 * 1000) } format="numeric" type="relative" />`;

    return (
      <Section
        title="DateTime"
        description="This is the datetime component"
        example={ example }
        code={ code }
      />
    );
  }
}

export default DateTimeSection;
