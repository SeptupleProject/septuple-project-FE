import React from 'react';
import { toast, ToastContainer } from 'react-toastify';
import {
   FormControl,
   Input,
   InputGroup,
   InputLeftElement,
} from '@chakra-ui/react';
import { Grid, GridItem } from '@chakra-ui/react';
import Icon from '../../../components/Icon/Icon';
import { Select, Text } from '@chakra-ui/react';
import ButtonBlue from '../../../components/Button/ButtonBlue';
import { Button } from '@chakra-ui/react';
import { history } from '../../../App';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { useFormik } from 'formik';
import { useRef } from 'react';
import { createUserAction } from '../../../redux/action/accountAction';
const CreateUser = () => {
   const dispatch = useDispatch();
   const emailInput = useRef(null);
   const formik = useFormik({
      initialValues: {
         email: '',
         password: '',
         role: '',
      },
      validationSchema: Yup.object({
         email: Yup.string()
            .email('Email is invalid')
            .required('Email cannot be empty'),
         password: Yup.string()
            .required('Password cannot be empty')
            .min(3, 'Password must be at least 3 letters')
            .max(10, 'Password must shoter than 11 letters'),
         role: Yup.string().required('Please pick a role'),
      }),
      onSubmit: (values) => {
         dispatch(createUserAction(values));
      },
   });
   const handleOnClick = () => {
      if (Object.keys(formik.errors).length > 0) {
         for (const error in formik.errors) {
            toast.error(`${formik.errors[error]}`, {
               position: 'top-right',
               autoClose: 1000,
               hideProgressBar: false,
               closeOnClick: true,
               pauseOnHover: false,
               draggable: true,
               progress: undefined,
               theme: 'colored',
            });
         }
      } else {
         formik.handleSubmit();
      }
   };
   return (
      <>
         <center className='create-user-area'>
            <FormControl onSubmit={formik.handleSubmit}>
               <Grid
                  className='m-4'
                  gap={6}
               >
                  <GridItem
                     colStart={2}
                     colEnd={4}
                  >
                     <Text
                        fontSize='4xl'
                        className='heading mt-0'
                        colorScheme='blue'
                     >
                        Create a new user
                     </Text>
                  </GridItem>
                  <GridItem colSpan={2}>
                     <InputGroup>
                        <InputLeftElement
                           pointerEvents='none'
                           children={
                              <Icon
                                 fontSize='15px'
                                 content='fa-regular fa-envelope'
                              />
                           }
                        />
                        <Input
                           onBlur={formik.handleBlur}
                           onChange={formik.handleChange}
                           name='email'
                           type='email'
                           placeholder='Email Address'
                           ref={emailInput}
                        />
                     </InputGroup>
                  </GridItem>
                  <GridItem colSpan={2}>
                     <InputGroup>
                        <InputLeftElement
                           pointerEvents='none'
                           children={
                              <Icon
                                 fontSize='15px'
                                 content='fa-solid fa-key'
                              />
                           }
                        />
                        <Input
                           onChange={formik.handleChange}
                           onBlur={formik.handleBlur}
                           name='password'
                           type='text'
                           placeholder='Password'
                        />
                     </InputGroup>
                  </GridItem>
                  <GridItem colSpan={4}>
                     <Select
                        name='role'
                        variant='outline'
                        placeholder='Choose Position'
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                     >
                        <option value='Staff'>Staff</option>
                        <option value='QAC'>QA Coordinator</option>
                        <option value='QAM'>QA Manager</option>
                     </Select>
                  </GridItem>
                  <GridItem colSpan={4}>
                     <Button
                        colorScheme='red'
                        variant='ghost'
                        size='lg'
                        className='mr-3'
                        onClick={() => {
                           history.push('/user-dashboard');
                        }}
                     >
                        Back
                     </Button>

                     <div
                        onClick={handleOnClick}
                        className='d-inline'
                     >
                        <ButtonBlue
                           className='ml-3'
                           padding='9px 25px'
                           text='Create'
                        />
                     </div>
                  </GridItem>
               </Grid>
            </FormControl>
            <ToastContainer />
         </center>
      </>
   );
};

export default CreateUser;
