import React, { useState } from 'react';
import Select from 'react-select';
import {
   Button,
   Center,
   Card,
   Text,
   InputGroup,
   InputLeftElement,
   Input,
   ButtonGroup,
   Grid,
   GridItem,
   FormControl,
   FormLabel,
   FormErrorMessage,
   FormHelperText,
} from '@chakra-ui/react';
import * as Yup from 'yup';
import { useFormik } from 'formik';
import Icon from '../../../components/Icon/Icon';
import { history } from '../../../App';
import { useDispatch, useSelector } from 'react-redux';
import makeAnimated from 'react-select/animated';
import { ToastContainer } from 'react-toastify';
import { createDepartmentAction } from '../../../redux/action/departmentAction';
import {
   renderOptionDepartment,
   validateDepartmentInput,
} from '../../../settings/common';
const animatedComponents = makeAnimated();
const CreateDepartment = () => {
   const [staffToAdd, setStaffToAdd] = useState([]);
   const [coordinatorToAdd, setCoordinatorToAdd] = useState();
   const staffList = useSelector((state) => state.accountReducer.staffList);
   const coordinatorList = useSelector(
      (state) => state.accountReducer.coordinatorList
   );
   const dispatch = useDispatch();

   const formik = useFormik({
      initialValues: {
         name: '',
         users: [],
      },
      validationSchema: Yup.object({
         name: Yup.string()
            .required('Name cannot be empty')
            .max(20, `Department name is too long`),
      }),
      onSubmit: (values) => {
         dispatch(createDepartmentAction(values));
      },
   });
   const handleOnStaffInput = (e) => {
      setStaffToAdd(e);
   };
   const handleOnCoordinatorInput = (e) => {
      setCoordinatorToAdd(e);
   };

   const handleOnSubmit = () => {
      validateDepartmentInput(coordinatorToAdd, staffToAdd, formik);
   };

   return (
      <Center>
         <Card
            className='cardForm'
            height={'480px'}
         >
            <Grid
               className='m-4'
               gap={10}
            >
               <GridItem
                  colStart={2}
                  colEnd={4}
               >
                  <Text
                     fontSize='4xl'
                     className='heading'
                     colorScheme='blue'
                  >
                     Add a new department
                  </Text>
               </GridItem>
               <GridItem colSpan={2}>
                  <FormControl isRequired>
                     <FormLabel>Department Name</FormLabel>
                     <InputGroup>
                        <InputLeftElement
                           children={
                              <Icon
                                 content='fa-regular fa-building'
                                 fontSize='20px'
                              />
                           }
                        />
                        <Input
                         
                           type='text'
                           name='name'
                           size='md'
                           placeholder='Department Name'
                           variant='outline'
                           onChange={formik.handleChange}
                           onBlur={formik.handleBlur}
                        />
                     </InputGroup>
                  </FormControl>
               </GridItem>
               <GridItem colSpan={2}>
                  <FormControl isRequired>
                     <FormLabel>QA Coordinator</FormLabel>
                     <Select
                        closeMenuOnSelect={false}
                        options={renderOptionDepartment(coordinatorList)}
                        placeholder='Choose QA Coordinator'
                        onChange={handleOnCoordinatorInput}
                     />
                  </FormControl>
               </GridItem>
               <GridItem colSpan={4}>
                  <FormControl>
                     <FormLabel>Including Staff</FormLabel>
                     <Select
                        closeMenuOnSelect={false}
                        components={animatedComponents}
                        isMulti
                        options={renderOptionDepartment(staffList)}
                        placeholder='Including staff'
                        onChange={handleOnStaffInput}
                     />
                  </FormControl>
               </GridItem>
               <GridItem colSpan={4}>
                  <Center>
                     <ButtonGroup size='lg'>
                        <Button
                           variant='ghost'
                           colorScheme='red'
                           onClick={() => {
                              history.push('/department-dashboard');
                           }}
                        >
                           Cancel
                        </Button>
                        <Button
                           variant='solid'
                           colorScheme='blue'
                           onClick={handleOnSubmit}
                        >
                           Create
                        </Button>
                     </ButtonGroup>
                  </Center>
               </GridItem>
            </Grid>
         </Card>
         <ToastContainer />
      </Center>
   );
};

export default CreateDepartment;
