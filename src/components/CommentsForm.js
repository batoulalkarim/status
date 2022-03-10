import {React, useState } from 'react';
import {AiOutlineSmile} from "react-icons/ai";

function CommentsForm({profile, reloadProfile}) {

  const [newComment, setNewComment] = useState('');

  function handleCommentChange(e) {
    setNewComment(e.target.value);
  }

  const updatedProfile = {...profile, comments: [...profile.comments, newComment]};

  function handleCommentSubmit(e) {
    e.preventDefault();
    if (newComment !== '') {
      fetch(`http://localhost:8002/profiles/${profile.id}`, {
        method: 'PATCH',
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(updatedProfile)
      })
      .then(response => response.json())
      .then(() => {
        reloadProfile();
        setNewComment('')
      });
    }
  }

  return (
      <form className="commentsForm" onSubmit={handleCommentSubmit} >
        <label className="formLabel"><AiOutlineSmile size="25px" /></label>
        <input type="text" placeholder="Add a Comment..." className="commentInput"
        value={newComment} onChange={handleCommentChange} />
        <button type="submit">Post</button>
      </form>
  )
}

export default CommentsForm;