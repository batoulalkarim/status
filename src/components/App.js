import '../App.css';
import NavBar from './NavBar';
import HomePage from './HomePage';
import RankingsPage from './RankingsPage';
import RedemptionPage from './RedemptionPage';
import Profile from './Profile';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import { React, useState, useEffect} from 'react';
import NewPost from './NewPost';
import UserRating from './UserRating';



function App() {
  const [profileData, setProfileData] = useState([]);
  const [isHome, setIsHome] = useState(true);

  function reloadProfiles() {
    fetch('http://localhost:8002/profiles')
    .then(response => response.json())
    .then(data => setProfileData(data));
  }
  
  useEffect(() => {
    reloadProfiles();
  },[])

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

  if (!profileData) return <h3>Loading...</h3>;




  return (
    <Router>
       <UserRating user={profileData[0]} isHome={isHome}/>
      <Switch>
      <Route exact path='/'>
        <HomePage onDeletePost={handleDeletePost}
         profiles={profileData} 
         onUpdateComments={handleUpdateComments}
       
         />
      </Route>
      <Route exact path='/rankings'>
        <RankingsPage profiles={profileData}/>
      </Route>
      <Route exact path='/profiles/:id'>
        <Profile  />
      </Route>
      <Route exact path='/new-post'>
        <NewPost
        // onDeletePost={handleDeletePost}  
        onAddPost={reloadProfiles} 
        yourAccount={profileData[0]}/>
      </Route>
      <Route exact path='/redemption'>
        <RedemptionPage />
      </Route>
    </Switch>
    <NavBar />
    </Router>
  );
}
export default App;