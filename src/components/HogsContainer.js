import React from 'react';

import HogsIndex from './HogsIndex';
import HogTile from './HogTile';

class HogsContainer extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      hogs: [...this.props.hogsData]
    }
  }

  handleFilter = (event) => {
    event.preventDefault()

    // console.log(event.target)
    if (this.state.hogs.length === 13 ){

      const greased = this.state.hogs.filter((hog) => { return hog.greased === true})
      this.setState ({hogs: greased}, console.log(this.state.hogs))
      console.log(greased)
      //console.log(this.state.hogs)
    } else {
      this.setState ({
        hogs: [...this.props.hogsData]
      })
    }
  }

  handleSort = (e) => {
    let newHogs = this.state.hogs.sort((prev, next) => {
      if (prev[e.target.value] < next[e.target.value]) return -1
      if (prev[e.target.value] > next[e.target.value]) return 1
      return 0
    })

   this.setState({
      filteredhogs: newHogs
    })
  }





  render() {
    return (
      <div className= "ui container">


          <label>Greased?</label>
          <input type="checkbox" id="greased" onChange={this.handleFilter}/>
          <label>Sort By:</label>
          <select onChange={this.handleSort}>
            <option></option>
            <option value="name">Name</option>
            <option value="weight">Weight</option>
          </select>


        <HogsIndex allHogs={this.state.hogs} showMeMore={this.showDetails} />
      </div>
    )
  }

}

export default HogsContainer;
