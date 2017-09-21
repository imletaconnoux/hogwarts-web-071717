import React from 'react';
import HogTile from './HogTile';

const HogsIndex = (props) => {
  // console.log(props)
  const hogTiles = props.allHogs.map((hog, index) => {
    return <HogTile key={index} hog={hog} showMeMore={props.showMeMore}/>
  })
  return (
    <div className="ui cards">
    {hogTiles}
    </div>
  )
}


export default HogsIndex;
