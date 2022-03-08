import '../App.css';
import NavBar from './NavBar';
import HomePage from './HomePage';
import RankingsPage from './RankingsPage';
import Profile from './Profile';
import { Route, Switch } from 'react-router-dom';
import { React, useState, useEffect} from 'react';
import NewPost from './NewPost';

function App() {

  const [profileData, setProfileData] = useState([]);
  useEffect(() => {
    fetch('http://localhost:8002/profiles')
    .then(response => response.json())
    .then(data => setProfileData(data));
  },[])

  function handleAddToFeed(newPost){
    const updatedProfilesArray = [...profileData, newPost];
    setProfileData(updatedProfilesArray)
  }

  function handleDeletePost(id) {
    const updatedProfilesArray = profileData.filter((profile) => profile.id !== id);
    setProfileData(updatedProfilesArray)
  }


  return (
    <div className='App'>
      <Switch>
      <Route exact path='/'>
        <HomePage profiles={profileData}/>
      </Route>
      <Route exact path='/rankings'>
        <RankingsPage />
      </Route>
      <Route path='/Profile.js'>
        <Profile />
      </Route>
      <Route exact path='/new-post'>
        <NewPost
        onDeletePost={handleDeletePost}  
        onAddPost={handleAddToFeed} />
      </Route>
    </Switch>
      <NavBar />
    </div>
  );
}
export default App;