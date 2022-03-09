
import React from 'react';
import ProfileCard from './ProfileCard';
import star from '../images/star.png';


function HomePage({profiles, onDeletePost }) {
  return (
    <div className='wrap'>
      
      {/* this div below is also going to hold the search bar */}
      <div className="homeTopBar">
      <h1 className="status">~Status~</h1>
      <input type="text" placeholder="Search" className="search"/>
      
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
          <div className="suggestedWrap">
          <div className="tophalfsuggested">
            <div className="suggestedFollow">
              <img className="smallPic" src="https://raw.githubusercontent.com/batoulalkarim/status/Zelie-day-2/src/images/batoul-profile-pic.png" alt="oh no" />
              <h4 className="thuser">@batoulalkarim</h4>
              <h4 className="thuser1">Batoul Alkarim </h4>
            <h3 className="graytext">Suggestions For You</h3>
            </div>
            <div className="bottomhalfsuggested">

            </div>
          </div>
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