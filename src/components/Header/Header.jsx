import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../assets/img/logo-horizontal.png';
import Icon from '../Icon/Icon';
import { history } from '../../App';
import { dangXuatReducer } from '../../redux/reducers/accountReducer';
import { useDispatch, useSelector } from 'react-redux';

const Header = () => {
   const dispatch = useDispatch();
   const signedInAccount = useSelector(
      (state) => state.accountReducer.signedInAccount
   );
   const renderHeader = () => {
      if (Object.keys(signedInAccount).length > 0) {
         return (
            <>
               <li className='nav-item'>
                  <p className='title-2 nav-link text-dark'>
                     Hello, {signedInAccount.username}
                  </p>
               </li>

               <li className='nav-item'>
                  <div
                     className='nav-link'
                     onClick={() => {
                        if (window.confirm('Do you want to exit ?') == true) {
                           dispatch(dangXuatReducer({}));
                           history.replace('/login');
                        }
                     }}
                  >
                     <Icon
                        content='fa-solid fa-arrow-right-from-bracket'
                        color='#FF0000'
                     />
                  </div>
               </li>
            </>
         );
      } else {
         return (
            <>
               <li className='nav-item active'>
                  <NavLink
                     className='nav-link text-dark'
                     to='/login'
                  >
                     Log In
                  </NavLink>
               </li>
            </>
         );
      }
   };
   return (
      <div className='staff-header'>
         <nav
            style={{ width: '90%', margin: '0 auto' }}
            className='navbar navbar-expand-lg navbar-dark header p-0 my-0'
         >
            <div className='d-flex justify-content-between w-100'>
               <NavLink
                  className='navbar-brand'
                  to='/'
               >
                  <img
                     style={{ width: '250px' }}
                     src={logo}
                  />
               </NavLink>

               <div
                  className='collapse navbar-collapse flex-grow-0'
                  id='navbarNav'
               >
                  <ul className='navbar-nav'>{renderHeader()}</ul>
               </div>
            </div>
         </nav>
      </div>
   );
};

export default Header;

{
   /* <button
className='navbar-toggler bg-dark'
type='button'
data-toggle='collapse'
data-target='#navbarNav'
aria-controls='navbarNav'
aria-expanded='false'
aria-label='Toggle navigation'
>
<span className='navbar-toggler-icon' />
</button> */
}
