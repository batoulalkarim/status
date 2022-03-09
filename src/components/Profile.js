import {React, useState, useEffect} from 'react';
import {useParams} from "react-router-dom";
import Stars from "./rating/Stars";
import RatingForm from "./rating/RatingForm";
import {AiOutlineSmile} from "react-icons/ai"

function Profile({onUpdateComments}) {
    const [profile, setProfile] = useState(null);
    const [isHidden, setIsHidden] = useState(true)
    const {id} = useParams()
    const [comment, setComment] = useState("");
    const [submittedData, setSubmittedData] = useState([]);

    function reloadProfile() {
      fetch(`http://localhost:8002/profiles/${id}`)
      .then(r => r.json())
      .then(data => setProfile(data))
    }

    useEffect(() => {
      fetch(`http://localhost:8002/profiles/${id}`)
      .then(r => r.json())
      .then(data => setProfile(data))
    }, [id])

    function changeHidden() {
      setIsHidden(!isHidden);
    }

    function handleKeyDown(e) {
      e.preventDefault();
      if (e.key === 'Escape' && !isHidden) {
        setIsHidden(true);
      }
    }

  if(!profile) return null;


    function handleCommentChange(event){
      setComment(event.target.value);
    }

    function handleSubmit(event){
      event.preventDefault();
      const commentData = {comment: comment};
      const commentArray = [...submittedData, commentData];
      setSubmittedData(commentArray);
      setComment("");
      fetch(`http://localhost:8001/profiles/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({comments: comment})
      })
      .then(res => res.json())
      .then((updatedComment) => {
        onUpdateComments(updatedComment)
      });
    }

    const listOfComments = submittedData.map((profile, index) => {
      return(
        <li key={index}>
          {profile.comment}
        </li>
      )
    })
    



  return (
    <div tabIndex={0} onKeyDown={(e) => handleKeyDown(e)} className="profile-div">
      <h1 className="status">Profile Page</h1>
    <div className="profileCard">

    <h5 className="username">@{profile.username}</h5>
    <h4>{profile.name}</h4>
    <img src={profile.image} alt="profile" className="ppc"></img>
    <h5 className="picCaption">{profile.username} : {profile.caption}</h5>
    <RatingForm isHidden={isHidden} changeHidden={changeHidden} profile={profile} reloadProfile={reloadProfile}/>
    <Stars size={25} rating={profile.rating} />
    <button onClick={changeHidden}>Rate</button>
    </div>
    <br />
    <br />
    <div className="commentsContainer">
        <div className="commentsFormContainer">
          <div className="commentsGoHere">
          <h4><u>{profile.username}</u> : {profile.caption}</h4>
          </div>
         <ul>
          {listOfComments}
         </ul>
         <div className="formOnBottom">
           <form className="commentsForm" onSubmit={handleSubmit}>
             <label className="formLabel"><AiOutlineSmile size="25px" /></label>
             <input type="text" placeholder="Add a Comment..."className="commentInput" value={comment} onChange={handleCommentChange}/>
             <input type= "submit" value="Post" />
           </form>
         </div>
       </div>
    </div>
  </div>
  )
}

export default Profile