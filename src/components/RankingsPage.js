import {React, useState} from 'react'

function RankingsPage({profiles}) {

  const [sortBy, setSortBy] = useState('popular');

  function onSortChange(newSort) {
    setSortBy(newSort);
  }

  const rankedProfiles = (sortBy === 'popular') ? profiles.sort((a,b) => b.rating - a.rating) : profiles.sort((a,b) => a.rating - b.rating);

  return (
    <div>
      <div id="sort-bar">
        <label>Sort popularity: </label>
        <select name="profile-sorter" id="profile-sorter" 
        onChange={(e) => onSortChange(e.target.value)} value={sortBy} >
          <option value="popular">High to low</option>
          <option value="unpopular">Low to high</option>
        </select>
      </div>

      <ol>
        {
          rankedProfiles.map(profile => {
            return (
              <li key={profile.id}> {profile.name} {profile.rating} stars</li>
            )
          })
        }
      </ol>
    </div>
  )
}

export default RankingsPage