import React, { Component } from 'react';
import { ThemeProvider } from 'styled-components';
import { PageTitleBar } from 'sharedcomponents';
import hslTheme from './themes.hsl.js';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <ThemeProvider theme={hslTheme}>
        <div className="App">
          <div className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
          </div>
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
