import '../App.css';
import NavBar from './NavBar';
import HomePage from './HomePage';
import RankingsPage from './RankingsPage';
<<<<<<< HEAD
import { Route, Switch } from "react-router-dom";
=======
import Profile from './Profile';
import { Route, Switch } from 'react-router-dom';
>>>>>>> de8585d45bc8e3215b07a522891214008754beed
import { React, useState, useEffect} from 'react';

function App() {

  const [profileData, setProfileData] = useState([]);
<<<<<<< HEAD

=======
>>>>>>> de8585d45bc8e3215b07a522891214008754beed
  useEffect(() => {
    fetch('http://localhost:8002/profiles')
    .then(response => response.json())
    .then(data => setProfileData(data));
  },[])

  return (
    <div className='App'>
      <Switch>
<<<<<<< HEAD
      <Route exact path="/">
=======
      <Route exact path='/'>
>>>>>>> de8585d45bc8e3215b07a522891214008754beed
        <HomePage profiles={profileData}/>
      </Route>
      <Route exact path='/rankings'>
        <RankingsPage />
      </Route>
      <Route path='/Profile.js'>
        <Profile />
      </Route>
    </Switch>
      <NavBar />
    </div>
  );
}
export default App;