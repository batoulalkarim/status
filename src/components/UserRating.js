import React from "react";
import Stars from "./rating/Stars";


function UserRating(){
    return (
        <div>
            <div className="userWrap">
                <h4 className="yr">Your Rating:</h4>
                <Stars size={35} />
            </div>
        </div>
    )
}

export default UserRating;