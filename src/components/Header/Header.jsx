import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../assets/img/logo-horizontal.png';
import Icon from '../Icon/Icon';
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
import { useDisclosure } from '@chakra-ui/react';
import { logoutAction } from '../../redux/action/accountAction';
const Header = () => {
   const { isOpen, onOpen, onClose } = useDisclosure();
   const finalRef = React.useRef(null);
   const dispatch = useDispatch();
   let signedInAccount = useSelector(
      (state) => state.accountReducer.signedInAccount
   );

   const renderHeaderByRole = (role) => {
      if (role === 'Admin') {
         return (
            <>
               <li className='nav-item active'>
                  <NavLink
                     className='nav-link text-dark'
                     to='/academic-dashboard'
                  >
                     Academic Year
                  </NavLink>
               </li>
               <li className='nav-item active'>
                  <NavLink
                     className='nav-link text-dark'
                     to='/user-dashboard'
                  >
                     User Management
                  </NavLink>
               </li>
            </>
         );
      } else if (role === 'QAC') {
         return (
            <>
               <li className='nav-item active'>
                  <NavLink
                     className='nav-link text-dark'
                     to='/qacoordinator-dashboard'
                  >
                     Statistics Dashboard
                  </NavLink>
               </li>
               <li className='nav-item active'>
                  <NavLink
                     className='nav-link text-dark'
                     to='/staff-management'
                  >
                     Staff
                  </NavLink>
               </li>
            </>
         );
      } else if (role === 'QAM') {
         return (
            <>
               <li className='nav-item active'>
                  <NavLink
                     className='nav-link text-dark'
                     to='/academic-dashboard'
                  >
                     Academic Year
                  </NavLink>
               </li>
               <li className='nav-item active'>
                  <NavLink
                     className='nav-link text-dark'
                     to='/department-dashboard'
                  >
                     Deparment
                  </NavLink>
               </li>
               <li className='nav-item active'>
                  <NavLink
                     className='nav-link text-dark'
                     to='/categories-dashboard'
                  >
                     Category
                  </NavLink>
               </li>
            </>
         );
      }
   };

   const renderHeader = () => {
      if (Object.keys(signedInAccount).length > 0) {
         return (
            <>
               <li className='nav-item'>
                  <p className='title-2 nav-link text-dark'>
                     Hello,{' '}
                     <span style={{ color: '#3182ce' }}>
                        {signedInAccount.email}
                     </span>
                  </p>
               </li>
               {renderHeaderByRole(signedInAccount.role)}
               <li className='nav-item'>
                  <div
                     className='nav-link'
                     onClick={onOpen}
                  >
                     <Icon
                        content='fa-solid fa-arrow-right-from-bracket'
                        color='#FF0000'
                     />
                  </div>
                  {renderModal()}
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
                        dispatch(logoutAction());
                        onClose();
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
               <button
                  className='navbar-toggler bg-white'
                  type='button'
                  data-toggle='collapse'
                  data-target='#navbarNav'
                  aria-controls='navbarNav'
                  aria-expanded='false'
                  aria-label='Toggle navigation'
               >
                  <span className='navbar-toggler-icon text-dark' />
               </button>
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
