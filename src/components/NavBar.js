import React from 'react';
import { NavLink } from 'react-router-dom';
import {AiFillHome} from 'react-icons/ai';
import {GiRank3} from 'react-icons/gi';
import { GoPlus } from 'react-icons/go';
import {FaGamepad} from 'react-icons/fa'

function NavBar() {
  return (
    <nav className='navbar'>
      <NavLink exact to="/"> <AiFillHome size="20px"/> </NavLink>
      <NavLink exact to="/rankings"><GiRank3 size="20px"/></NavLink>
      <NavLink exact to="/redemption"><FaGamepad size="20px"/></NavLink>
      <NavLink exact to="/new-post"><GoPlus size="20px"/></NavLink>
    </nav>
  )
}

export default NavBar