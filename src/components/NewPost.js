import React, { useState } from 'react';

function NewPost({ onAddPost }){
    const [caption, setCaption] = useState("")
    const [image, setImage] =useState("")

    function handleSubmit(e) {
        e.preventDefault();
        fetch('http://localhost:8002/profiles/', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                caption: caption,
                image: image,
            }),
        })
        .then(res => res.json())
        .then((newPost) => onAddPost(newPost));
    }


    return(
        <div className="newpostContainer">
            <h2>New Post</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Write a Caption..." value={caption} onChange={(e) => setCaption(e.target.value)} />
                <input type="text" name="image" placeholder="Image URL" value={image} onChange={(e) => setImage(e.target.value)} />
                <button type="submit">Post Pic</button>
            </form>

        </div>
    )
}

export default NewPost;