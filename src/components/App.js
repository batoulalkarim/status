import '../App.css';
import NavBar from './NavBar';
import HomePage from './HomePage';
import RankingsPage from './RankingsPage';
import Profile from './Profile';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
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
    <Router>
      <Switch>
      <Route exact path='/'>
        <HomePage profiles={profileData}/>
      </Route>
      <Route exact path='/rankings'>
        <RankingsPage />
      </Route>
      <Route path='/profiles/:id'>
        <Profile />
      </Route>
      <Route exact path='/new-post'>
        <NewPost
        onDeletePost={handleDeletePost}  
        onAddPost={handleAddToFeed} />
      </Route>
    </Switch>
      <NavBar />
      </Router>
  );
}
export default App;