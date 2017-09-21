import React, { Component } from 'react';
import { Hogs } from '../porkers_data.js'
import '../App.css';
import Nav from './Nav';
import HogsContainer from './HogsContainer';
import HogsIndex from './HogsIndex';
import HogTile from './HogTile';


class App extends Component {
  render() {
    return (
      <div className="App">
          < Nav />
          < HogsContainer />

      </div>
    )
  }
}

export default App;
