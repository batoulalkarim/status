import React from 'react';
import ProfileCard from './ProfileCard';

function HomePage({profiles}) {
  return (
    <div className="homepage">
      <h1>Status</h1>
      {
        profiles.map(profile => {
          return (
            <ProfileCard key={profile.id} profile={profile} />
          )
        })
      }
    </div>
  )
}

export default HomePage