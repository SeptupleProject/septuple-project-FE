import React from 'react';
import ButtonBlue from '../../components/Button/ButtonBlue';
import { useDispatch } from 'react-redux';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { ToastContainer } from 'react-toastify';
import { Helmet } from 'react-helmet';
import { loginAction } from '../../redux/action/accountAction';
import { FormControl, FormErrorMessage } from '@chakra-ui/react';
import { Input } from '@chakra-ui/react';
const LogIn = () => {
   const dispatch = useDispatch();
   const formik = useFormik({
      initialValues: {
         email: '',
         password: '',
      },
      validationSchema: Yup.object({
         email: Yup.string().required('Email cannot be empty'),
         password: Yup.string().required('Password cannot be empty'),
      }),
      onSubmit: (values) => {
         dispatch(loginAction(values));
      },
   });
   const handleEnterLogin = (event) => {
      if (event.keyCode === 13) {
         formik.handleSubmit();
      }
   };
   return (
      <>
         <Helmet>
            <title>Login</title>
         </Helmet>
         <div className='container d-flex flex-column justify-content-center h-100 '>
            <h1 className='title-1'>Log into your existing account</h1>
            <div className='container'>
               <FormControl isInvalid={formik.errors.email}>
                  <div className='w-75 mx-auto '>
                     <div className='d-flex'>
                        <div className='d-inline mr-2 my-auto'>
                           <i className='fa-regular fa-user'></i>
                        </div>
                        <Input
                           placeholder='Email'
                           type='email'
                           onChange={formik.handleChange}
                           onBlur={formik.handleBlur}
                           name='email'
                           onKeyUp={handleEnterLogin}
                        />
                     </div>
                     {formik.errors.email ? (
                        <FormErrorMessage className='ml-4'>
                           {formik.errors.email}
                        </FormErrorMessage>
                     ) : null}
                     <div className='my-4'></div>
                     <div className='d-flex'>
                        <div className='d-inline mr-2 my-auto'>
                           <i
                              style={{ fontSize: '15px' }}
                              className='fa-regular fa-keyboard'
                           ></i>
                        </div>
                        <Input
                           onBlur={formik.handleBlur}
                           onChange={formik.handleChange}
                           placeholder='Password'
                           type='password'
                           name='password'
                           onKeyUp={handleEnterLogin}
                        />
                     </div>
                     {formik.errors.password ? (
                        <FormErrorMessage className='ml-4'>
                           {formik.errors.password}
                        </FormErrorMessage>
                     ) : null}
                  </div>
                  <div className='mx-auto mt-5'>
                     <div
                        type='button'
                        onClick={formik.handleSubmit}
                     >
                        <ButtonBlue
                           text='Log in'
                           padding='8px 48px'
                           fontSize='16px'
                           fontWeight='600'
                        />
                     </div>
                  </div>
               </FormControl>
            </div>
            <ToastContainer />
         </div>
      </>
   );
};

export default LogIn;
