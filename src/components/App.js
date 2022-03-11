import '../App.css';
import NavBar from './NavBar';
import HomePage from './HomePage';
import RankingsPage from './RankingsPage';
import RedemptionPage from './redemption/RedemptionPage';
import Profile from './Profile';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import { React, useState, useEffect} from 'react';
import NewPost from './NewPost';
import UserRating from './UserRating';


function App() {
  const [profileData, setProfileData] = useState([]);
  const [currentPath, setCurrentPath] = useState('/');

  function reloadProfiles() {
    fetch('http://localhost:8002/profiles')
    .then(response => response.json())
    .then(data => setProfileData(data));
  }
  
  useEffect(() => {
    console.log(currentPath);
    reloadProfiles();
  },[currentPath]);

  function handleDeletePost(profile, event) {
    event.stopImmediatePropagation();
    event.nativeEvent.stopImmediatePropagation();
   const foundIndex = profileData.findIndex(item => profile.id === item.id);
    if (foundIndex === -1) {
      console.log("secret message")
    } else {
      const copyArray = [...profileData];
      copyArray.splice(foundIndex, 1);

      setProfileData(copyArray)
    }
         fetch(`http://localhost:8002/profiles/${profile.id}`, {
              method: "DELETE",
              headers: {
                "Content-Type": "application/json"
              }
          })
          // onDeletePost(profile.id);
          console.log("deleting id")
        }
    
    function handleUpdateComments(updatedComment){
      const updatedProfilesArray = profileData.filter((profile) => {
        if(profile.id === updatedComment.id){
          return updatedComment;
        } else {
          return profile
        }
      })
      setProfileData(updatedProfilesArray);
    }

    function onPathChange(newPath) {
      setCurrentPath(newPath);
    }

  if (!profileData) return <h3>Loading...</h3>;

  return (
    <Router>
       <UserRating user={profileData[0]} pathname={currentPath} />
      <Switch>
      <Route exact path='/'>
        <HomePage onDeletePost={handleDeletePost}
         profiles={profileData} 
         onUpdateComments={handleUpdateComments}
         onPathChange={onPathChange}
         />
      </Route>
      <Route exact path='/rankings'>
        <RankingsPage profiles={profileData} onPathChange={onPathChange}/>
      </Route>
      <Route exact path='/profiles/:id'>
        <Profile onPathChange={onPathChange} user={profileData[0]}/>
      </Route>
      <Route exact path='/new-post'>
        <NewPost
        // onDeletePost={handleDeletePost}  
        onAddPost={reloadProfiles} 
        yourAccount={profileData[0]}
        onPathChange={onPathChange}/>
      </Route>
      <Route exact path='/redemption'>
        <RedemptionPage user={profileData[0]} reloadProfiles={reloadProfiles} onPathChange={onPathChange}/>
      </Route>
    </Switch>
    <NavBar />
    </Router>
  );
}
export default App;