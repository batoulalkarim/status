
import {React, useState} from 'react';
import ProfileCard from './ProfileCard';
import star from '../images/star.png';


function HomePage({profiles, onDeletePost, onUpdateComments}) {

  const [search, setSearch] = useState('')

  function handleSearchChange(e) {
    setSearch(e.target.value);
  }

  const filteredProfiles = profiles.filter(profile => {
    return ((profile.name.toLowerCase().includes(search.toLowerCase())) || (profile.username.toLowerCase().includes(search.toLowerCase())))
  })

  return (
    <div className='wrap'>
      
      {/* this div below is also going to hold the search bar */}
      <div className="homeTopBar">
      <h1 className="status">~Status~</h1>
      <img className="searchimg" src="https://i0.wp.com/www.thinkafrica.fi/wp-content/uploads/2019/04/search-icon.png?fit=1200%2C1200&ssl=1&w=640" alt="oh no" />
      <input type="search" placeholder="Search" className="search" 
      onChange={handleSearchChange} value={search} />
      
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
            <h3 className="graytext">Today you've earned <strong> 7 </strong> five star ratings!</h3>
              <h3>Your moon is in renogade, the stars have aligned</h3>
            </div>
          </div>
          </div>
          <div className="sflist">
            <h2 className="ss">Suggested:</h2>
            <img className="s_pic" src="https://images.saymedia-content.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:eco%2Cw_1200/MTc0NDI5MTc5NzI1NDg5Nzk4/top-10-greatest-leonardo-dicaprio-movies.jpg" alt="oh no!" />
               <h4 className="ylun">@youngLeo</h4>
               <h4 className="yln">Leonardo DiCaprio</h4>
                <h4 className="ylf">Follow</h4>
            <img className="s_pic" src="https://www.billboard.com/wp-content/uploads/2022/03/50-cent-2021-billboard-1548.jpg" alt="oh no!" />
            <h4 className="fcun">@50Cent</h4>
            <h4 className="fcn">50</h4> 
            <h4 className="fcf">Follow</h4>  
            <img className="s_pic" src="https://img.rasset.ie/0000c437-500.jpg" alt="oh no!" />
            <h4 className="bun">@BoratOfficial</h4>
            <h4 className="bn">Borat Sagdiyev</h4>
            <h4 className='bf'>Follow</h4>
          </div>
      {
        filteredProfiles.map(profile => {
          if (profile.image) {
            return (
            <ProfileCard key={profile.id} profile={profile} onDeletePost={onDeletePost} onUpdateComments={onUpdateComments}/>
          )}
          else return null;
          }
        )
      }
    </div>
  )
}
export default HomePage