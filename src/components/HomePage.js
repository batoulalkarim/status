
import React from 'react';
import ProfileCard from './ProfileCard';
import star from '../images/star.png';


function HomePage({profiles, onDeletePost }) {
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
          if (profile.image) {
            return (
            <ProfileCard key={profile.id} profile={profile} onDeletePost={onDeletePost}/>
          )}
          else return null;
          }
        )
      }
    </div>
  )
}
export default HomePage