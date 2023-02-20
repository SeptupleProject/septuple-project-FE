import React from 'react';
import { NavLink } from 'react-router-dom';
const Header = () => {
   return (
      <nav className='navbar navbar-expand-lg navbar-dark bg-dark '>
         <NavLink
            className='navbar-brand'
            to='/'
         >
            Navbar
         </NavLink>
         <button
            className='navbar-toggler'
            type='button'
            data-toggle='collapse'
            data-target='#navbarNav'
            aria-controls='navbarNav'
            aria-expanded='false'
            aria-label='Toggle navigation'
         >
            <span className='navbar-toggler-icon' />
         </button>
         <div
            className='collapse navbar-collapse'
            id='navbarNav'
         >
            <ul className='navbar-nav text-white'>
               <li className='nav-item active'>
                  <NavLink
                     className='nav-link'
                     to='/home'
                  >
                     Home
                  </NavLink>
               </li>
               <li className='nav-item active'>
                  <NavLink
                     className='nav-link'
                     to='/login'
                  >
                     Log In
                  </NavLink>
               </li>
            </ul>
         </div>
      </nav>
   );
};

export default Header;
