import React from 'react';
import { FormControl, FormErrorMessage } from '@chakra-ui/react';
import { Input } from '@chakra-ui/react';
import ButtonBlue from '../../components/Button/ButtonBlue';

const LogIn = () => {
   return (
      <div className='container d-flex flex-column justify-content-center h-100 '>
         <h1 className='title-1'>Log into your existing account</h1>
         <div className='container'>
            <FormControl>
               <div className='w-75 mx-auto '>
                  <div className='d-flex'>
                     <div className='d-inline mr-2 my-auto'>
                        <i className='fa-regular fa-user'></i>
                     </div>
                     <Input
                        placeholder='Email'
                        type='email'
                     />
                  </div>
                  <div className='my-4'></div>
                  <div className='d-flex'>
                     <div className='d-inline mr-2 my-auto'>
                        <i
                           style={{ fontSize: '15px' }}
                           className='fa-regular fa-keyboard'
                        ></i>
                     </div>
                     <Input
                        placeholder='Password'
                        type='password'
                     />
                  </div>
               </div>
               <div className='mx-auto mt-5'>
                  <ButtonBlue
                     text='Log in'
                     padding='8px 48px'
                     fontSize='16px'
                     fontWeight='600'
                  />
               </div>
            </FormControl>
         </div>
      </div>
   );
};

export default LogIn;
