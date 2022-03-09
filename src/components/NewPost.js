import {React, useEffect, useState } from 'react';
import { useHistory } from "react-router-dom";

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
      console.log(updatedAccount);
      fetch('http://localhost:8002/profiles/1',{
        method: 'PATCH',
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(updatedAccount)
        })
        .then(response => response.json())
        .then(newPost => {
          onAddPost(newPost);
          e.target.reset();
          history.push('/');
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
        <h2>New Post</h2>
      </div>
      <div className="npForm">
        <form onSubmit={handleSubmit}>
          <h1>Are You Ready To Post?</h1>
         <input className="cap1" name="caption" type="text" placeholder="Write a Caption..." 
          onChange={handleChange} />
        {/* <input name="image" type="file" accept="image/png, image/jpeg, image/jpg" 
          onChange={handleChange}  /> */}
         <input name="image" type="text" placeholder="add image url"
          onChange={handleChange}  />
          <button type="submit">Post Pic</button>
        </form>
      </div>
    </div>
  )
}

export default NewPost;