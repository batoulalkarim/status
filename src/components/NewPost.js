import {React, useEffect, useState } from 'react';
import { useHistory } from "react-router-dom";
import responses from "../data";

function NewPost({ onAddPost, yourAccount }){

  let history = useHistory();
  const [updatedAccount, setUpdatedAccount] = useState({});

  useEffect(() => {
    setUpdatedAccount({...yourAccount, image: '', caption: ''});
  },[yourAccount]);

  function handleSubmit(e) {
    e.preventDefault();
    if (updatedAccount.image === '' || updatedAccount.caption === '') {
      alert('Post must include image and caption');
    }
    else {
      const response = responses[Math.floor(Math.random()*responses.length)];
      const newRating = Math.round((Math.min(Math.max((updatedAccount.rating + response.increment), 0), 5))*10)/10;
      fetch('http://localhost:8002/profiles/1',{
        method: 'PATCH',
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({...updatedAccount, rating: newRating})
        })
        .then(response => response.json())
        .then(newPost => {
          onAddPost(newPost);
          e.target.reset();
          history.push('/');
          alert(response.alert);
        });
    }
  }

  function handleChange(e) {
    if (e.target.name === 'image') {
      // const url = URL.createObjectURL(e.target.files[0]);
      // setUpdatedAccount({...updatedAccount, image: url});
      setUpdatedAccount({...updatedAccount, image: e.target.value});
    }
    else {
      setUpdatedAccount({...updatedAccount, caption: e.target.value});
    }
  }

  if(!updatedAccount) return null;


  
  return(
    <div className="newpostContainer">
      <div className="headingNP">
        <h2 className="np">New Post</h2>
      </div>
      <div className="npForm">
        <form className="npbgf" onSubmit={handleSubmit}>
          <h1 className="npbgf">Are You Ready To Post?</h1>
         <input className="cap1" name="caption" type="text" placeholder="Write a Caption..." 
          onChange={handleChange} />
        {/* <input name="image" type="file" accept="image/png, image/jpeg, image/jpg" 
          onChange={handleChange}  /> */}
         <input name="image" type="text" placeholder="add image url"
          onChange={handleChange}  />
          <button type="submit" >Post Pic</button>
        </form>
      </div>
    </div>
  )
}

export default NewPost;