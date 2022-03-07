import '../App.css';
import NavBar from './NavBar';
import HomePage from './HomePage';
import RankingsPage from './RankingsPage';
import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Switch>
      <Route exact path="/">
        <HomePage />
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
