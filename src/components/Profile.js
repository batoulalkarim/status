import {React, useState, useEffect } from 'react';
import { useParams } from "react-router-dom";


function Profile() {

  const [profile, setProfile] = useState(null);
  const { id } = useParams()
    
    useEffect(() => {
        fetch(`http://localhost:8002/profiles/${id}`)
            .then(r => r.json())
            .then(data => setProfile(data))
    }, [id]);

    if(!profile) return <h2>Loading...</h2>

  return (
    <div>
      <h1 className="status">Profile Page</h1>
    <div className="profileCard">
     <img src={profile.profile_pic} alt="profile"></img>
     <h4>{profile.name}</h4>
     <h5>{profile.caption}</h5>
      
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