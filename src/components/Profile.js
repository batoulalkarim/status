import React from 'react'


function Profile({profile}) {

  return (
    <div>
      <h1 className="status">Profile Page</h1>
    <div className="profileCard">
     <h1>image here</h1>
     <h4>name here</h4>
     <h5>caption here</h5>
      
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