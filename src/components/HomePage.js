
import React from 'react';
import ProfileCard from './ProfileCard';
import star from '../images/star.png';


function HomePage({profiles, onDeletePost }) {
  return (
    <div className='homepage'>
      
      {/* this div below is also going to hold the search bar */}
      <div className="homeTopBar">
      <h1 className="status">~Status~</h1>
     
        <div className="moveStars">
          <div className='stars'>
          
            <img src={star} alt="oh no" className='stars' />
            <img src={star} alt="oh no" className='stars'/>
            <img src={star} alt="oh no" className='stars'/>
            <img src={star} alt="oh no" className='stars'/>
            <img src={star} alt="oh no" className='stars'/>
          </div>
          </div>
      </div>
      {
        profiles.map(profile => {
          return (
            <ProfileCard key={profile.id} profile={profile} onDeletePost={onDeletePost}/>
          )
        })
      }
    </div>
  )
}
export default HomePage