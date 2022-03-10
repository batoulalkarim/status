import {React, useState, useEffect} from 'react';
import {useParams} from "react-router-dom";
import Stars from "./rating/Stars";
import RatingForm from "./rating/RatingForm";
import CommentsForm from "./CommentsForm";

function Profile({onUpdateComments}) {
    const [profile, setProfile] = useState(null);
    const [isHidden, setIsHidden] = useState(true)
    const {id} = useParams()

    function reloadProfile() {
      fetch(`http://localhost:8002/profiles/${id}`)
      .then(r => r.json())
      .then(data => setProfile(data))
    }

    useEffect(() => {
      fetch(`http://localhost:8002/profiles/${id}`)
      .then(r => r.json())
      .then(data => setProfile(data))
    }, [id]);

    function changeHidden() {
      setIsHidden(!isHidden);
    }

    function handleKeyDown(e) {
      if (e.key === 'Escape' && !isHidden) {
        setIsHidden(true);
      }
    }

  if(!profile) return null;

    const listOfComments = profile.comments.map(comment =>{
      return <li key={profile.comments.indexOf(comment)} >{comment}</li>;
    })
    

  return (
    <div tabIndex={0} onKeyDown={(e) => handleKeyDown(e)} className="profile-div">
      <h1 className="status">Profile Page</h1>
    <div className="profileCard">

    <h5 className="username">@{profile.username}</h5>
    <h4>{profile.name}</h4>
    <img src={profile.image} alt="profile" className="ppc"></img>
    <h5 className="picCaption">{profile.username} : {profile.caption}</h5>
    <RatingForm isHidden={isHidden} changeHidden={changeHidden} profile={profile} reloadProfile={reloadProfile}/>
    <Stars size={25} rating={profile.rating} />
    {
      profile.id !== 1 ? <button onClick={changeHidden}>Rate</button> : null
    }
    </div>
    <br />
    <br />
    <div className="commentsContainer">
      <div className="commentsFormContainer">
        <div className="commentsGoHere">
          <h4><u>{profile.username}</u> : {profile.caption}</h4>
        </div>

        <ul>
          {listOfComments}
        </ul>

      <div className="formOnBottom">
        <CommentsForm profile={profile} reloadProfile={reloadProfile}/>
      </div>
  </div>
    </div>
    </div>
  )
}

export default Profile