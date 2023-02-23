import React from 'react';
import { NavLink, Route } from 'react-router-dom';
import Icon from '../components/Icon/Icon';
import logoVertical from '../assets/img/logo-vertical.png';
import { useDisclosure } from '@chakra-ui/react';
import { useDispatch, useSelector } from 'react-redux';
import {
   Modal,
   ModalOverlay,
   ModalContent,
   ModalHeader,
   ModalFooter,
   ModalBody,
   ModalCloseButton,
   Button,
} from '@chakra-ui/react';
import { dangXuatReducer } from '../redux/reducers/accountReducer';
export const AdminTemplate = (props) => {
   const { isOpen, onOpen, onClose } = useDisclosure();
   const finalRef = React.useRef(null);
   const dispatch = useDispatch();
   let signedInAccount = useSelector(
      (state) => state.accountReducer.signedInAccount
   );

   const renderModal = () => {
      return (
         <Modal
            closeOnOverlayClick={true}
            finalFocusRef={finalRef}
            isOpen={isOpen}
            onClose={onClose}
            isCentered
         >
            <ModalOverlay />

            <ModalContent>
               <ModalHeader className='title-2 display-3 '>Log Out</ModalHeader>
               <ModalCloseButton />
               <ModalBody>Do you want to log out ?</ModalBody>

               <ModalFooter>
                  <Button
                     colorScheme='blue'
                     mr={3}
                     onClick={onClose}
                     variant='ghost'
                  >
                     Cancel
                  </Button>
                  <Button
                     onClick={() => {
                        dispatch(dangXuatReducer());
                     }}
                     colorScheme='red'
                  >
                     Log Out
                  </Button>
               </ModalFooter>
            </ModalContent>
         </Modal>
      );
   };

   const renderNavBarByRole = (role) => {
      if (role === 'admin') {
         return (
            <>
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
            </>
         );
      } else if (role === 'qaCoordinator') {
         return (
            <>
               <NavLink
                  className='list-group-item list-group-item-action p-0 mx-auto mt-4'
                  data-toggle='list'
                  role='tab'
                  to='/qacoordinator-dashboard'
               >
                  <div className='d-flex px-3 pb-2'>
                     <Icon content='fa-solid fa-chart-line' />

                     <p className='ml-2'>Dashboard</p>
                  </div>
               </NavLink>
               <div className='my-2'></div>
               <NavLink
                  className='list-group-item list-group-item-action p-0 mx-auto'
                  data-toggle='list'
                  role='tab'
                  to='/staff-management'
               >
                  <div className='d-flex px-3 pb-2'>
                     <Icon content='fa-solid fa-user-group' />
                     <p className='ml-2'>Staff</p>
                  </div>
               </NavLink>
            </>
         );
      } else if (role === 'qaManager') {
         return (
            <>
               <NavLink
                  className='list-group-item list-group-item-action p-0 mx-auto mt-4'
                  data-toggle='list'
                  role='tab'
                  to='/department-dashboard'
               >
                  <div className='d-flex px-3 pb-2'>
                     <Icon content='fa-solid fa-building' />
                     <p className='ml-2'>Department</p>
                  </div>
               </NavLink>
               <div className='my-2'></div>
               <NavLink
                  className='list-group-item list-group-item-action p-0 mx-auto'
                  data-toggle='list'
                  role='tab'
                  to='/categories-dashboard'
               >
                  <div className='d-flex px-3 pb-2'>
                     <Icon content='fa-solid fa-server' />
                     <p className='ml-2'>Categories</p>
                  </div>
               </NavLink>
            </>
         );
      }
   };

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
                                    {renderNavBarByRole(signedInAccount.role)}
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                     <div className='col-10 px-0'>
                        <nav className='navbar navbar-light py-4'>
                           <div className='header d-flex justify-content-between mx-auto'>
                              <p className='title-2'>
                                 Hello, {signedInAccount.username}
                              </p>
                              <div onClick={onOpen}>
                                 <Icon
                                    content='fa-solid fa-arrow-right-from-bracket'
                                    color='#FF0000'
                                 />
                              </div>
                           </div>
                           {renderModal()}
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
