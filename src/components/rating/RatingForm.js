import {React, useState} from 'react'
import emptystar from "../../images/emptystar.png";
import fullstar from "../../images/fullstar.png";

function RatingForm({isHidden, changeHidden, profile, reloadProfile, onRate, userRating}) {

  const [starFullness, setStarFullness] = useState(0);

  function handleStarClick(clickedStar) {
    switch (clickedStar) {
      case "0":
        setStarFullness(1);
      break;
      case "1":
        setStarFullness(2);
      break;
      case "2":
        setStarFullness(3);
      break;
      case "3":
        setStarFullness(4);
      break;
      case "4":
        setStarFullness(5);
      break;
      default: setStarFullness(0);
    }
  }

  const updatedRating = Math.round((((profile.rating*(5-userRating))+starFullness)/(6-userRating))*10)/10;
  const updatedProfile = {...profile, rating: updatedRating}

  function handleSubmitRate() {
    if (starFullness > 0){
      fetch(`http://localhost:8002/profiles/${profile.id}`, {
        method: 'PATCH',
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(updatedProfile)
      })
      .then(response => response.json())
      .then(() => {
        changeHidden();
        onRate();
        reloadProfile();
      })
    }
    console.log(updatedProfile);
  }

  return (
    <div className={isHidden ? 'hidden' : 'rating-form'}>
      <div className="edit-stars">
        <img id={0} src={starFullness > 0? fullstar : emptystar} alt="star" height={30} onClick={(e) => handleStarClick(e.target.id)} />
        <img id={1} src={starFullness > 1? fullstar : emptystar} alt="star" height={30} onClick={(e) => handleStarClick(e.target.id)} />
        <img id={2} src={starFullness > 2? fullstar : emptystar} alt="star" height={30} onClick={(e) => handleStarClick(e.target.id)} />
        <img id={3} src={starFullness > 3? fullstar : emptystar} alt="star" height={30} onClick={(e) => handleStarClick(e.target.id)} />
        <img id={4} src={starFullness > 4? fullstar : emptystar} alt="star" height={30} onClick={(e) => handleStarClick(e.target.id)} />
      </div>
      <button onClick={handleSubmitRate} >Rate</button>
    </div>
  )
}

export default RatingForm