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
}

export default ProfileCard