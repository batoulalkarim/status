import {React, useEffect, useState } from 'react';
import { useHistory, useLocation } from "react-router-dom";
import responses from "../data";

function NewPost({ onAddPost, yourAccount, onPathChange }){

  let history = useHistory();
  const [updatedAccount, setUpdatedAccount] = useState({});

  let location = useLocation();
  
  useEffect(() => {
    onPathChange(location.pathname);
  },[location.pathname, onPathChange]);

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
    <div id="entirePage">
    <div className="newpostContainer">
      <div className="headingNP">
        <h2 className="np">New Post</h2>
      </div>
      <div className="npForm">
        <form className="npbgf" onSubmit={handleSubmit}>
          <h1 className="npbgft">Are You Ready To Post?</h1>
         <input className="cap1" name="caption" type="text" placeholder="Write a Caption..." 
          onChange={handleChange} />
        {/* <input name="image" type="file" accept="image/png, image/jpeg, image/jpg" 
          onChange={handleChange}  /> */}
         <input name="image" type="text" placeholder="add image url"
          onChange={handleChange}  />
          <button type="submit" >Post Pic</button>
        </form>
      </div>
      <div className="checklist">
        <h1 id="checklistTITLE">Checklist BEFORE you post..</h1>
          <ol className="checklistli">
            <strong>
            <li className="checklistli">Did you wash your face?</li>
            <li className="checklistli">Are your teeth white?</li>
            <li className="checklistli">Do you have any acne? if so- use a filter</li>
            <li className="checklistli">Is your mustache showing girlie?</li>
            <li className="checklistli">Does your outfit match?</li>
            <li className="checklistli">Do you feel confident?</li>
            <li className="checklistli">Did you get rid of fly away hairs?</li>
            <li className="checklistli">Can anyone rate you less than 5 stars on this post?</li>
            <li className="checklistli">Are you exuding Boss Girl Energy?</li>
            <li className="checklistli">Bestie.. are you SURE this is it?</li>
            </strong>
          </ol>
      </div>
    </div>
    </div>
  )
}

export default NewPost;