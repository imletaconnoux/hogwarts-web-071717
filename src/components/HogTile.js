import React from 'react';

const HogTile = (props) => {

  const clickHandler = () => {
    // console.log(event)
    return props.showMeMore(props.hog)
  }

  return(
    <div className="pigTile">
      <h3 className= "content" onClick={clickHandler}> Name: {props.hog.name}</h3>
      <div>
        {clickHandler}
      </div>
    </div>

  )
}


export default HogTile;
// 
// return(
//   <div>
//     <h3 className= "content">Weight: {hog.weight}</h3>
//     <h3 className= "content">Specialty: {hog.specialty}</h3>
//     <h3 className= "content">Greased: {hog.greased}</h3>
//   </div>
// )
