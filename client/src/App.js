import React, { Component } from 'react';

import { Navigation } from './routes';
import { Main } from './routes/routes';
import { Footer } from './routes/footer';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Navigation />
        <div id="navPortal" className="under"></div>
        <Main />
        <Footer />
      </div>
    );
  }
}

export default App;
