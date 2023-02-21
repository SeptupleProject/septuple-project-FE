import React, { useEffect } from 'react';
import { FormControl, FormErrorMessage } from '@chakra-ui/react';
import { Input } from '@chakra-ui/react';
import ButtonBlue from '../../components/Button/ButtonBlue';
import { useDispatch, useSelector } from 'react-redux';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { toast, ToastContainer } from 'react-toastify';
import { dangNhapAction } from '../../redux/action/accountAction';
const LogIn = () => {
   const accounts = useSelector((state) => state.accountReducer.accounts);
   const dispatch = useDispatch();
   const formik = useFormik({
      initialValues: {
         username: '',
         password: '',
      },
      validationSchema: Yup.object({
         username: Yup.string().required('Username cannot be empty'),
         password: Yup.string().required('Password cannot be empty'),
      }),
      onSubmit: (values) => {
         let isValid = false;
         accounts.map((item) => {
            if (
               item.username === values.username &&
               item.password === values.password
            ) {
               isValid = true;
               dispatch(dangNhapAction(item));
            }
         });
         if (!isValid) {
            toast.error('Đăng nhập thất bại', {
               position: 'top-center',
               autoClose: 1000,
               hideProgressBar: false,
               closeOnClick: true,
               pauseOnHover: true,
               progress: undefined,
               theme: 'colored',
            });
         }
      },
   });

   return (
      <div className='container d-flex flex-column justify-content-center h-100 '>
         <h1 className='title-1'>Log into your existing account</h1>
         <div className='container'>
            <FormControl isInvalid={formik.errors.username}>
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
                        name='username'
                     />
                  </div>
                  {formik.errors.username ? (
                     <FormErrorMessage className='ml-4'>
                        {formik.errors.username}
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
   );
};

export default LogIn;
