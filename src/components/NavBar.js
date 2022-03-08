import React from 'react';
import { NavLink, BrowserRouter as Router } from 'react-router-dom';

function NavBar() {
  return (
    <Router>
      <nav className='navbar'>
        <NavLink exact to="/">Home</NavLink>
        <NavLink exact to="/rankings">Rankings</NavLink>
        <NavLink exact to="/retribution">Retribution</NavLink>
        <NavLink exact to="/new-post">New Post</NavLink>
      </nav>
    </Router>
  )
}

export default NavBar