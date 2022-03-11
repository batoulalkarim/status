import {React, useState, useEffect} from 'react';
import {useLocation} from "react-router-dom";
import trophy from "../images/trophy.png";

function RankingsPage({profiles, onPathChange}) {

  const [sortBy, setSortBy] = useState('popular');
  let location = useLocation();
  
  useEffect(() => {
    onPathChange(location.pathname);
  },[location.pathname, onPathChange]);

  function onSortChange(newSort) {
    setSortBy(newSort);
  }

  const rankedProfiles = (sortBy === 'popular') ? profiles.sort((a,b) => b.rating - a.rating) : profiles.sort((a,b) => a.rating - b.rating);

  return (
    <div>
      <h1 className="rankTitle">Rankings</h1>
      <div>
      <img className="trophy" src={trophy}  alt="elegant trophy hd png" />
      </div>
      <div className="moveSortbar" >
      <div id="sort-bar" className="">
        <label><strong>Sort popularity: </strong></label>
        <select name="profile-sorter" id="profile-sorter" 
        onChange={(e) => onSortChange(e.target.value)} value={sortBy} >
          <option value="popular">High to low</option>
          <option value="unpopular">Low to high</option>
        </select>
      </div>
      </div>
      <ol>
        {
          rankedProfiles.map(profile => {
            return (
              <li className="lirating" key={profile.id}>{profile.name} | {profile.rating} stars</li>
            )
          })
        }
      </ol>
    </div>
  )
}

export default RankingsPage