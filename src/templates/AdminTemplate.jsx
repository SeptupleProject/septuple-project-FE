import React from 'react';
import { NavLink, Route } from 'react-router-dom';
import Icon from '../components/Icon/Icon';
import logoVertical from '../assets/img/logo-vertical.png';
import { history } from '../App';
export const AdminTemplate = (props) => {
   return (
      <Route
         exact
         path={props.path}
         render={(propsRoute) => {
            return (
               <div className='container-fluid admin-navigation bg-light'>
                  <div className='row'>
                     <div className='col-2 px-4 menu-col-2'>
                        <div className='admin-nav'>
                           <div className='container '>
                              <img
                                 className='py-0 img-fluid mx-auto mt-5'
                                 src={logoVertical}
                                 style={{ width: '150px' }}
                              />
                              <div role='tabpanel mt-3'>
                                 <div
                                    className='list-group text-center h-100'
                                    id='myList'
                                    role='tablist'
                                 >
                                    <NavLink
                                       className='list-group-item list-group-item-action p-0 mx-auto mt-4'
                                       data-toggle='list'
                                       role='tab'
                                       to='/academic-dashboard'
                                    >
                                       <div className='d-flex px-3 pb-2'>
                                          <Icon content='fa-regular fa-clock' />
                                          <p className='ml-2'>Academic Year</p>
                                       </div>
                                    </NavLink>
                                    <div className='my-2'></div>
                                    <NavLink
                                       className='list-group-item list-group-item-action p-0 mx-auto'
                                       data-toggle='list'
                                       role='tab'
                                       to='/user-dashboard'
                                    >
                                       <div className='d-flex px-3 pb-2'>
                                          <Icon content='fa-regular fa-user' />
                                          <p className='ml-2'>User</p>
                                       </div>
                                    </NavLink>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                     <div className='col-10 px-0'>
                        <nav className='navbar navbar-light py-4'>
                           <div className='header d-flex justify-content-between mx-auto'>
                              <p className='title-2'>Hello, username</p>
                              <div
                                 onClick={() => {
                                    history.push('/login');
                                 }}
                              >
                                 <Icon
                                    content='fa-solid fa-arrow-right-from-bracket'
                                    color='#FF0000'
                                 />
                              </div>
                           </div>
                        </nav>
                        <props.component {...propsRoute} />
                     </div>
                  </div>
               </div>
            );
         }}
      />
   );
};

export default AdminTemplate;
