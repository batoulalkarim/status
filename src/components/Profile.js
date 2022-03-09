import {React, useState, useEffect} from 'react';
import {useParams} from "react-router-dom";
import Stars from "./rating/Stars";

function Profile() {
    const [profile, setProfile] = useState(null);
    const {id} = useParams()

    useEffect(() => {
      fetch(`http://localhost:8002/profiles/${id}`)
      .then(r => r.json())
      .then(data => setProfile(data))
    }, [id])
    if(!profile) return null;

  return (
    <div>
      <h1 className="status">Profile Page</h1>
    <div className="profileCard">

    <h5 className="username">@{profile.username}</h5>
    <h4>{profile.name}</h4>
    <img src={profile.image} alt="profile" className="ppc"></img>
    <h5 className="picCaption">{profile.username} : {profile.caption}</h5>
    <Stars size={30} rating={profile.rating} />
      
    </div>
    <br />
    <br />
    <div className="commentsFormContainer">
      <form className="commentsForm">
        <label className="formLabel">Comment</label>
        <input type="text" placeholder="Leave a Comment..."className="commentInput" />
        <input type= "submit" value="Submit" />
      </form>
    </div>
    </div>
  )
}

export default Profile