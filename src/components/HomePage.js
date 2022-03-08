<<<<<<< HEAD
import React from 'react';
import ProfileCard from './ProfileCard';

function HomePage({profiles}) {
  return (
    <div className="homepage">
      <h1>Status</h1>
=======

import React from 'react';
import ProfileCard from './ProfileCard';
import star from '../profileimages/star.png';


function HomePage({profiles}) {
  return (
    <div className='homepage'>
      <h1 className="status">~Status~</h1>
      <div className='stars'>
      <img src={star} alt="oh no" className='stars' />
      <img src={star} alt="oh no" className='stars'/>
      <img src={star} alt="oh no" className='stars'/>
      <img src={star} alt="oh no" className='stars'/>
      <img src={star} alt="oh no" className='stars'/>
      </div>
>>>>>>> de8585d45bc8e3215b07a522891214008754beed
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