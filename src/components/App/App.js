import React, { Component } from 'react';
import Header from '../Header/Header';
import GiphyApi from '../GiphyApi/GiphyApi';

class App extends Component {
  render() {
    return (
      <div>
        <Header />

        <GiphyApi />
      </div>
    );
  }
}

export default App;
