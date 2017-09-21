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

  handleSubmit = (event) => {
    event.preventDefault()
  }

  // showDetails = (hog) => {
  //   hog.isShowing = true
  //   this.setState = ({
  //     hogs: [...{hog}]
  //   })
    // const hogName = this.state.hogs.find((hog) => hog.name === hogToFind.name )
    // this.setState({
    //   isShowing: true
    // }, console.log(this.state))


  render() {
    return (
      <div className= "ui container">

        <form onSubmit={this.handleSubmit}>
          <label>Greased?</label>
          <input type="checkbox" id="greased" onChange={this.handleChange}/>
          <label>Sort By:</label>
          <select onChange={this.handleSelect}>
            <option></option>
            <option value="name">Name</option>
            <option value="weight">Weight</option>
          </select>
          <input type="submit" value="Filter hogs"/>
          </form>
        <HogsIndex allHogs={this.state.hogs} showMeMore={this.showDetails} />
      </div>
    )
  }

}

export default HogsContainer;
