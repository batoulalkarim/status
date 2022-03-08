<<<<<<< HEAD
import React from 'react'

function ProfileCard() {
  return (
    <div className="profile-card">
      <h3>Name</h3>
      <h5>@username</h5>
      
    </div>
  )
=======
import React from 'react';
import { useHistory } from 'react-router-dom';

function ProfileCard({ profile }){
    const history = useHistory();
    return(
        <div className="column">
        <div className="cards" onClick={() => history.push('/Profile.js')}>
                <div className="image">
                    <img alt="oh no!" src={profile.profile_pic} className="profilePicture" />
                </div>
                <div className="content">
                    <div className="header">
                      <h5>{profile.name} </h5>
                      <h5>{profile.caption}</h5>

                    </div>

                </div>
            </div>
        </div>
    )
>>>>>>> de8585d45bc8e3215b07a522891214008754beed
}

export default ProfileCard