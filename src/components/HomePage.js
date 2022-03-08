
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