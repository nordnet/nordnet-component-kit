import React from 'react';
import PureComponent from 'react-pure-render/component';
import { Grid } from 'react-bem-grid';
import './app.scss';
import Nav from './components/nav/nav';
import CurrencySection from './sections/currencySection';
import PercentSection from './sections/percentSection';
import DevelopmentSection from './sections/developmentSection';
import DateTimeSection from './sections/dateTimeSection';

class App extends PureComponent {
  render() {
    const sections = [
      <CurrencySection />,
      <PercentSection />,
      <DevelopmentSection />,
      <DateTimeSection />,
    ];
    const navItems = sections.map(section => section.type.name.replace('Section', ''));

    return (
      <div>
        <Nav items={ navItems } />
        <Grid>
          {sections.map((section, index) => (
            <span key={ index }>
              { section }
            </span>))}
        </Grid>
        <footer style={{ height: '100vh' }}>
          <center>
            <span style={{ fontSize: '10px', position: 'static' }}>
              Small hack to be able to scroll past end ™
            </span>
          </center>
        </footer>
      </div>
    );
  }
}

export default App;
