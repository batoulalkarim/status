import React from 'react';
import { NavLink } from 'react-router-dom';
import {AiOutlineHome} from 'react-icons/ai'

function NavBar() {
  return (
    <nav className='navbar'>
      <NavLink exact to="/"> <AiOutlineHome /> </NavLink>
      <NavLink exact to="/rankings">Rankings</NavLink>
      <NavLink exact to="/redemption">Redemption</NavLink>
      <NavLink exact to="/new-post">New Post</NavLink>
    </nav>
  )
}

export default NavBar