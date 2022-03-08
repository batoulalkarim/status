import '../App.css';
import NavBar from './NavBar';
import HomePage from './HomePage';
import RankingsPage from './RankingsPage';
import { Route, Switch } from "react-router-dom";
import { React, useState, useEffect} from 'react';

function App() {

  const [profileData, setProfileData] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8002/profiles')
    .then(response => response.json())
    .then(data => setProfileData(data));
  },[])

  return (
    <div className="App">
      <Switch>
      <Route exact path="/">
        <HomePage profiles={profileData}/>
      </Route>
      <Route exact path="/rankings">
        <RankingsPage />
      </Route>
    </Switch>
      <NavBar />
    </div>
  );
}

export default App;
