import React from 'react';
import { useHistory } from 'react-router-dom';

function ProfileCard({ profile, onDeletePost }){
    const history = useHistory();
    function handleDeletePost(){
        fetch(`http://localhost:8002/profiles/${profile.id}`, {
            method: "DELETE",
        });
        onDeletePost(profile.id);
    }

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
                <button onSubmit={handleDeletePost}>Delete</button>
            </div>
        </div>
    )
}

export default ProfileCard