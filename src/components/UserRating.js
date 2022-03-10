import React from "react";
import Stars from "./rating/Stars";



function UserRating({user}){
    return (
        <div>
            <div className="userWrap">
                <h4 className="yr">Your Rating:</h4>
                <Stars size={35} rating={user.rating} />
            </div>
        </div>
    )
}

export default UserRating;