import React from 'react';
import { Input, InputGroup, InputLeftElement } from '@chakra-ui/react';
import { Grid, GridItem } from '@chakra-ui/react';
import Icon from '../../../components/Icon/Icon';
import { Text } from '@chakra-ui/react';
import ButtonBlue from '../../../components/Button/ButtonBlue';
import { Button } from '@chakra-ui/react';
import { history } from '../../../App';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useFormik } from 'formik';
import { createNewAcademicYearAction } from '../../../redux/action/academicYearAction';
import { toast, ToastContainer } from 'react-toastify';
import moment from 'moment/moment';
const CreateAcademic = () => {
   const today = moment().format('YYYY-MM-DD');
   const [startDateInput, setStartDateInput] = useState('text');
   const [endDateInput, setEndDateInput] = useState('text');
   const [ideaDeadlineInput, setIdeaDeadlineInput] = useState('text');
   const dispatch = useDispatch();
   const signedInAccount = useSelector(
      (state) => state.accountReducer.signedInAccount
   );
   const validateEmptyInput = (values) => {
      let valid = true;
      let object = {
         name: 'Name',
         startDate: 'Start date',
         endDate: 'End date',
      };
      for (const value in values) {
         if (values[value] === '') {
            for (const item in object) {
               if (item === value) {
                  toast.error(`${object[item]} is empty`, {
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
            }
            valid = false;
         }
      }
      return valid;
   };
   const validateDateInThePast = (values) => {
      let valid = false;
      valid = moment(values.startDate) < moment(values.endDate);
      if (valid === false) {
         toast.error(`Academic year is invalid`, {
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
      return valid;
   };

   const formik = useFormik({
      initialValues: {
         name: '',
         startDate: '',
         endDate: '',
      },
      onSubmit: (values) => {
         let valid = false;
         valid = validateEmptyInput(values) && validateDateInThePast(values);
         if (valid) {
            values = {
               name: values.name,
               startDate: moment(values.startDate).toISOString(),
               endDate: moment(values.endDate).toISOString(),
            };
            dispatch(createNewAcademicYearAction(values));
         }
      },
   });

   return (
      <>
         <center className='create-user-area'>
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
                     Create a new academic year
                  </Text>
               </GridItem>
               <GridItem colSpan={4}>
                  <InputGroup>
                     <InputLeftElement
                        pointerEvents='none'
                        children={
                           <Icon
                              fontSize='15px'
                              content='fa-regular fa-clock'
                           />
                        }
                     />
                     <Input
                        isDisabled={
                           signedInAccount.role === 'QAM' ? true : false
                        }
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        name='name'
                        type='text'
                        placeholder='Name of Academic Year'
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
                              content='fa-regular fa-calendar'
                           />
                        }
                     />
                     <Input
                        isDisabled={
                           signedInAccount.role === 'QAM' ? true : false
                        }
                        min={today}
                        name='startDate'
                        placeholder='Start Date'
                        size='md'
                        type={startDateInput}
                        onChange={formik.handleChange}
                        onFocus={() => {
                           setStartDateInput('date');
                        }}
                        onBlur={() => {
                           setStartDateInput('text');
                        }}
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
                              content='fa-regular fa-calendar'
                           />
                        }
                     />
                     <Input
                        isDisabled={
                           signedInAccount.role === 'QAM' ? true : false
                        }
                        min={today}
                        name='endDate'
                        placeholder='End Date'
                        size='md'
                        type={endDateInput}
                        onChange={formik.handleChange}
                        onFocus={() => {
                           setEndDateInput('date');
                        }}
                        onBlur={() => {
                           setEndDateInput('text');
                        }}
                     />
                  </InputGroup>
               </GridItem>
               <GridItem colSpan={4}>
                  <InputGroup>
                     <InputLeftElement
                        pointerEvents='none'
                        children={
                           <Icon
                              fontSize='15px'
                              content='fa-regular fa-calendar'
                           />
                        }
                     />
                     <Input
                        min={today}
                        isDisabled={
                           signedInAccount.role === 'QAM' ? false : true
                        }
                        type={ideaDeadlineInput}
                        placeholder="Idea's Deadline"
                        name='ideaDeadline'
                        onChange={formik.handleChange}
                        onFocus={() => {
                           setIdeaDeadlineInput('date');
                        }}
                        onBlur={() => {
                           setIdeaDeadlineInput('text');
                        }}
                     />
                  </InputGroup>
               </GridItem>
               <GridItem colSpan={4}>
                  <Button
                     colorScheme='red'
                     variant='ghost'
                     size='lg'
                     className='mr-3'
                     onClick={() => {
                        history.push('/academic-dashboard');
                     }}
                  >
                     Back
                  </Button>
                  <div
                     onClick={formik.handleSubmit}
                     className='d-inline'
                     type='submit'
                  >
                     <ButtonBlue
                        className='ml-3'
                        padding='9px 25px'
                        text='Create'
                     />
                  </div>
               </GridItem>
            </Grid>
         </center>
         <ToastContainer />
      </>
   );
};

export default CreateAcademic;
