import React from 'react';

class HogTile extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      isDetailShowing: false
    }
  }

  togglePig = () => {
    this.setState ({
      isDetailShowing: !this.state.isDetailShowing
    })
  }

render() {
  return (
    <div className="pigTile" onClick={this.togglePig}>
      <h3 className= "content"> Name: {this.props.hog.name}</h3>
      <div className="extra content">
        { this.state.isDetailShowing ?
          <div><p>Specialty: {this.props.hog.specialty}</p>
          <p>Highest Honor: {this.props.hog['highest medal achieved']}</p>
          <p>Weight: {this.props.hog.weight}</p>
          </div> : null }
      </div>
    </div>
    )
  }
}


export default HogTile;
