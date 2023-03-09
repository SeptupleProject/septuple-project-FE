import React from 'react';
import {
   Input,
   InputGroup,
   InputLeftElement,
   FormHelperText,
} from '@chakra-ui/react';
import { Grid, GridItem } from '@chakra-ui/react';
import Icon from '../../../components/Icon/Icon';
import { Text } from '@chakra-ui/react';
import ButtonBlue from '../../../components/Button/ButtonBlue';
import moment from 'moment/moment';
import { useFormik } from 'formik';
import { toast, ToastContainer } from 'react-toastify';
import { Button } from '@chakra-ui/react';
import { history } from '../../../App';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateAcademicYearAction } from '../../../redux/action/academicYearAction';
const UpdateAcademic = () => {
   const today = moment().format('YYYY-MM-DD');
   const [startDateInput, setStartDateInput] = useState('text');
   const [endDateInput, setEndDateInput] = useState('text');
   const dispatch = useDispatch();
   const academicYearDetail = useSelector(
      (state) => state.academicYearReducer.academicYearDetail
   );
   const signedInAccount = useSelector(
      (state) => state.accountReducer.signedInAccount
   );
   let { name, startDate, endDate, ideaDeadline, id } = academicYearDetail;

   const validateDateInThePast = (values) => {
      let valid = false;
      valid = values.startDate < values.endDate;
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
      enableReinitialize: true,
      initialValues: {
         name: name,
         startDate: startDate,
         endDate: endDate,
      },
      onSubmit: (values) => {
         let valid = false;
         valid = validateDateInThePast(values);
         let dateToUpdate = {};
         if (valid) {
            if (values.startDate == startDate && values.endDate == endDate) {
               dateToUpdate = {
                  id: id,
                  name: values.name,
                  startDate: moment(
                     values.startDate,
                     'DD.MM.YYYY HH:mm'
                  ).toISOString(),
                  endDate: moment(
                     values.endDate,
                     'DD.MM.YYYY HH:mm'
                  ).toISOString(),
               };
            } else if (
               values.startDate !== startDate &&
               values.endDate !== endDate
            ) {
               dateToUpdate = {
                  id: id,
                  name: values.name,
                  startDate: moment(values.startDate).toISOString(),
                  endDate: moment(values.endDate).toISOString(),
               };
            } else if (
               values.startDate == startDate &&
               values.endDate !== endDate
            ) {
               dateToUpdate = {
                  id: id,
                  name: values.name,
                  startDate: moment(
                     values.startDate,
                     'DD.MM.YYYY HH:mm'
                  ).toISOString(),
                  endDate: moment(values.endDate).toISOString(),
               };
            } else {
               dateToUpdate = {
                  id: id,
                  name: values.name,
                  startDate: moment(values.startDate).toISOString(),
                  endDate: moment(
                     values.endDate,
                     'DD.MM.YYYY HH:mm'
                  ).toISOString(),
               };
            }

            dispatch(updateAcademicYearAction(id, dateToUpdate));
         }
      },
   });

   const formikIdea = useFormik({
      enableReinitialize: true,
      initialValues: {
         ideaDeadline: ideaDeadline,
      },
      onSubmit: (values) => {},
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
                        isDisabled={
                           signedInAccount.role === 'QAM' ? true : false
                        }
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
                        min={today}
                        isDisabled={
                           signedInAccount.role === 'QAM' ? true : false
                        }
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
                        min={today}
                        isDisabled={
                           signedInAccount.role === 'QAM' ? true : false
                        }
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
                        min={today}
                        isDisabled={
                           signedInAccount.role === 'QAM' ? false : true
                        }
                        name='ideaDeadline'
                        placeholder={
                           formikIdea.initialValues.ideaDeadline ===
                           'Invalid date'
                              ? 'Not set yet'
                              : formik.initialValues.ideaDeadline
                        }
                        onChange={formik.handleChange}
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
               </GridItem>
            </Grid>
            <ToastContainer />
         </center>
      </>
   );
};

export default UpdateAcademic;
