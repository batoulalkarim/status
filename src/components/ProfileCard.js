import React from 'react';
import { Link } from 'react-router-dom';

function ProfileCard({ profile }){
    return(
      <Link to={`profiles/${profile.id}`}>
        <div className="column">
        <div className="cards" >
                <div className="image">
                    <img alt="oh no!" src="src/profileimages/profilepic1.png" className="profilePicture" />
                </div>
                <div className="content">
                    <div className="header">
                      <h5>{profile.name} </h5>
                      <h5>{profile.caption}</h5>
                    </div>
                </div>
            </div>
        </div>
        </Link>
    )
}

export default ProfileCard