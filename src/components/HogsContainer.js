import React from 'react';
import ReactDOM from 'react-dom';
import { Hogs } from '../porkers_data.js'
import HogsIndex from './HogsIndex';
import HogTile from './HogTile';


class HogsContainer extends React.Component{

  constructor(){
    super();
    this.state = {
      hogs: []
    }
  }



  render() {
    return (
      <div>
        <p>Hi</p>
        <HogsIndex />
      </div>
    )
  }

}

export default HogsContainer;
