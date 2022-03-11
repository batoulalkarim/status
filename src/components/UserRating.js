import React from "react";
import Stars from "./rating/Stars";



function UserRating({user, pathname}){

    if (!user) return null;

    return (
        <div>
            <div className={pathname.includes('profiles') ? "userWrap2" : "userWrap"}>
                <h4 className="yr">Your Rating:</h4>
                <Stars size={35} rating={user.rating} />
            </div>
        </div>
    )
}

export default UserRating;