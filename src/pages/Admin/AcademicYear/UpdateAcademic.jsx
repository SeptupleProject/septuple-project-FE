import React from 'react';
import { Input, InputGroup, InputLeftElement } from '@chakra-ui/react';
import { Grid, GridItem } from '@chakra-ui/react';
import Icon from '../../../components/Icon/Icon';
import { Text } from '@chakra-ui/react';
import ButtonBlue from '../../../components/Button/ButtonBlue';
import moment from 'moment/moment';
import { useFormik } from 'formik';
import { ToastContainer } from 'react-toastify';
import { Button } from '@chakra-ui/react';
import { history } from '../../../App';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateAcademicYearAction } from '../../../redux/action/academicYearAction';
import {
   createObjectDateToUpdate,
   validateDateToUpdate,
   validateIdeaDeadline,
} from '../../../settings/common';
import { QAM } from '../../../settings/setting';
const UpdateAcademic = () => {
   const today = moment().format('YYYY-MM-DD');
   const [startDateInput, setStartDateInput] = useState('text');
   const [endDateInput, setEndDateInput] = useState('text');
   const [ideaDateInput, setIdeaDateInput] = useState('text');
   const dispatch = useDispatch();
   const academicYearDetail = useSelector(
      (state) => state.academicYearReducer.academicYearDetail
   );
   const signedInAccount = useSelector(
      (state) => state.accountReducer.signedInAccount
   );
   let { name, startDate, endDate, ideaDeadline, id } = academicYearDetail;

   const formik = useFormik({
      enableReinitialize: true,
      initialValues: {
         name: name,
         startDate: startDate,
         endDate: endDate,
         ideaDeadline: ideaDeadline,
      },
      onSubmit: (values) => {
         let valid = false;
         valid = validateDateToUpdate(values, formik.initialValues);
         if (valid) {
            let dateToUpdate = createObjectDateToUpdate(
               id,
               startDate,
               endDate,
               values
            );
            dispatch(updateAcademicYearAction(id, dateToUpdate));
         }
      },
   });

   const formikIdea = useFormik({
      enableReinitialize: true,
      initialValues: {
         name: name,
         startDate: startDate,
         endDate: endDate,
         ideaDeadline: ideaDeadline,
      },
      onSubmit: (values) => {
         if (values.ideaDeadline !== 'Invalid date') {
            let valid = validateIdeaDeadline(
               values.ideaDeadline,
               startDate,
               endDate
            );
            if (valid) {
               let dateToUpdate = createObjectDateToUpdate(
                  id,
                  startDate,
                  endDate,
                  values
               );
               dateToUpdate = {
                  ...dateToUpdate,
                  ideaDeadline: `${moment(values.ideaDeadline).toISOString()}`,
               };
               dispatch(updateAcademicYearAction(id, dateToUpdate));
            }
         } else {
            alert.warning('Please pick a date', 'top-right', null, 'dark');
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
                     Update academic year 2023
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
                        isDisabled={signedInAccount.role === QAM ? true : false}
                        name='name'
                        type='text'
                        placeholder={formik.initialValues.name}
                        onChange={formik.handleChange}
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
                        isDisabled={signedInAccount.role === QAM ? true : false}
                        name='startDate'
                        placeholder={formik.initialValues.startDate}
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
                        isDisabled={signedInAccount.role === QAM ? true : false}
                        name='endDate'
                        placeholder={formik.initialValues.endDate}
                        onChange={formik.handleChange}
                        size='md'
                        type={endDateInput}
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
                        type={ideaDateInput}
                        isDisabled={signedInAccount.role === QAM ? false : true}
                        name='ideaDeadline'
                        placeholder={
                           formikIdea.initialValues.ideaDeadline ===
                           'Invalid date'
                              ? 'Set Idea Deadline'
                              : formikIdea.initialValues.ideaDeadline
                        }
                        onChange={formikIdea.handleChange}
                        onFocus={() => {
                           setIdeaDateInput('date');
                        }}
                        onBlur={() => {
                           setIdeaDateInput('text');
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
                        history.replace('/academic-dashboard');
                     }}
                  >
                     Cancel
                  </Button>
                  {signedInAccount.role === QAM ? (
                     <div
                        className='d-inline'
                        onClick={formikIdea.handleSubmit}
                     >
                        <ButtonBlue
                           className='ml-3'
                           padding='9px 25px'
                           text='Update'
                        />
                     </div>
                  ) : (
                     <div
                        className='d-inline'
                        onClick={formik.handleSubmit}
                     >
                        <ButtonBlue
                           className='ml-3'
                           padding='9px 25px'
                           text='Update'
                        />
                     </div>
                  )}
               </GridItem>
            </Grid>
            <ToastContainer />
         </center>
      </>
   );
};

export default UpdateAcademic;
