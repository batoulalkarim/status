import React from 'react';
import { Link } from 'react-router-dom';

function ProfileCard({ profile, onDeletePost }){
//     function handleDeletePost(){

//         fetch(`http://localhost:8002/profiles/${profile.id}`, {
//             method: "DELETE",
//         });
//         onDeletePost(profile.id);
//     }

    return(
        <Link to= {`profiles/${profile.id}`}>
       <div className="homeContainer">    
        <div className="column">
        <div className="cards">
                <div className="image">
                    <img alt="oh no!" src={profile.profile_pic} className="profilePicture" />
                </div>
                <div className="content">
                    <div className="header">
                      <h5>{profile.name} </h5>
                      <h5>{profile.caption}</h5>

                    </div>

                </div>
                <button onSubmit={(event) => onDeletePost(event, profile)}>Delete</button>
            </div>
        </div>
        </div>
        </Link>
    )
}

export default ProfileCard