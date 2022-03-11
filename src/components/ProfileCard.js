import React from 'react';
import { Link } from 'react-router-dom';
import Stars from "./rating/Stars";

function ProfileCard({ profile, onDeletePost}){
    return(
       <div className="homeContainer">    
        <div className="column">
            <Link to= {`profiles/${profile.id}`}>
        <div className="cards">
                <div className="image">
                    <img alt="oh no!" src={profile.image} className="profilePicture" />
                </div>
                <div className="content">
                    <div className="header">
                      <h5>{profile.name} </h5>
                      <h5>{profile.caption}</h5>
                      <Stars size={30} rating={profile.rating} />
                    </div>
                </div>
                {/* <button onClick={(event) => 
                    onDeletePost(event, profile)}>Block</button> */}
            </div>
            </Link>
        </div>
        </div>
    )
}

export default ProfileCard