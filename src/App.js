import React, { Component } from 'react';
import { ThemeProvider } from 'styled-components';
import { PageTitleBar, Nav, Menu, MenuItem, NavItem } from 'sharedcomponents';
import { HSLLogo, JourneyPlanner, Tickets, CustomerService, Latest, More, TravelCard, SignIn } from 'sharedcomponents/lib/Icons';
import hslTheme from './themes.hsl.js';
import './App.css';

const languages = [
  { id: 'fi', name: 'FI' },
  { id: 'sv', name: 'SV' },
  { id: 'en', name: 'EN' }
];

const icons = [
  [<JourneyPlanner height="2.5rem" width="2.5rem" />, 'Reittiopas'],
  [<Tickets height="2.5rem" width="2.5rem" />, 'Liput ja hinnat'],
  [<CustomerService height="2.5rem" width="2.5rem" />, 'Asiakaspalvelu'],
  [<Latest height="2.5rem" width="2.5rem" />, 'Uutta'],
  [<More height="2.5rem" width="2.5rem" />, 'Lisää']
];
const logo = <HSLLogo height="3.75rem" />;

class App extends Component {
  render() {
    return (
      <ThemeProvider theme={hslTheme}>

        <div className="App">
          <Nav
            logo={logo}
            menu={
              <Menu
                selectedLanguage={'fi'}
                languages={languages}
                changeLanguage={(lang) => console.log('lang chage clicked', lang)}
              >
                <MenuItem
                  link={<span />}
                  icon={<TravelCard height="3.5rem" />}
                  text="Matkakortti"
                  textPosition="Right"
                  key="travelcard"
                />
                <MenuItem
                  link={<span />}
                  icon={<SignIn height="3.5rem" />}
                  text="Kirjaudu"
                  textPosition="Right"
                  key="signin"
                />
              </Menu>
            }
          >
            {icons.map(icon =>
              (<NavItem
                key={icon[1]}
                link={<span />}
                icon={icon[0]}
                text={icon[1]}
                textPosition={'Bottom'}
              />)
            )}
          </Nav>
          <PageTitleBar>
            <h1>Welcome to React</h1>
          </PageTitleBar>
          <p className="App-intro">
            To get started, edit <code>src/App.js</code> and save to reload.
          </p>
        </div>
      </ThemeProvider>
    );
  }
}

export default App;
