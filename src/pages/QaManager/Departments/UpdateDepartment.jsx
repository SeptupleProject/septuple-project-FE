import React from 'react';
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
} from '@chakra-ui/react';
import Icon from '../../../components/Icon/Icon';
import { history } from '../../../App';
import makeAnimated from 'react-select/animated';
import { useSelector, useDispatch } from 'react-redux';
import { useFormik } from 'formik';
import {
   convertUserToIdArray,
   renderDefaultOptionDepartment,
   renderOptionDepartmentUpdate,
} from '../../../settings/common';
import { useState } from 'react';
import { QAC, Staff } from '../../../settings/setting';
import { validateDepartmentInputUpdate } from '../../../settings/common';
import { updateDepartmentAction } from '../../../redux/action/departmentAction';
import { ToastContainer } from 'react-toastify';
import * as Yup from 'yup';
const animatedComponents = makeAnimated();
const UpdateDepartment = () => {
   const dispatch = useDispatch();
   const departmentDetail = useSelector(
      (state) => state.departmentReducer.departmentDetail
   );

   const [staffToAdd, setStaffToAdd] = useState(
      renderDefaultOptionDepartment(departmentDetail.users, Staff)
   );
   const [coordinatorToAdd, setCoordinatorToAdd] = useState(
      renderDefaultOptionDepartment(departmentDetail.users, QAC)
   );
   const staffList = useSelector((state) => state.accountReducer.staffList);
   const coordinatorList = useSelector(
      (state) => state.accountReducer.coordinatorList
   );

   const formik = useFormik({
      enableReinitialize: true,
      initialValues: {
         id: departmentDetail.id,
         name: departmentDetail.name,
         users: departmentDetail.users,
      },
      validationSchema: Yup.object({
         name: Yup.string().max(30, `Department name is too long`),
      }),
      onSubmit: (values) => {
         values.users = convertUserToIdArray(
            staffToAdd.concat(coordinatorToAdd)
         );
         dispatch(updateDepartmentAction(values.id, values));
      },
   });

   const handleOnStaffInput = (e) => {
      setStaffToAdd(e);
   };
   const handleOnCoordinatorInput = (e) => {
      setCoordinatorToAdd(e);
   };
   const handleOnUpdate = () => {
      validateDepartmentInputUpdate(coordinatorToAdd, staffToAdd, formik);
      formik.handleSubmit();
   };

   return (
      <Center>
         <Card
            className='cardForm'
            height={'450px'}
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
                     Update department
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
                           onChange={formik.handleChange}
                           name='name'
                           size='md'
                           placeholder={formik.initialValues.name}
                           variant='outline'
                        />
                     </InputGroup>
                  </FormControl>
               </GridItem>
               <GridItem colSpan={2}>
                  <FormControl>
                     <FormLabel>QA Coordinator</FormLabel>
                     <Select
                        closeMenuOnSelect={false}
                        defaultValue={renderDefaultOptionDepartment(
                           formik.initialValues.users,
                           QAC
                        )}
                        options={renderOptionDepartmentUpdate(
                           coordinatorList,
                           departmentDetail.name
                        )}
                        placeholder='QA Coordinator'
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
                        defaultValue={renderDefaultOptionDepartment(
                           formik.initialValues.users,
                           Staff
                        )}
                        placeholder='Including Staff'
                        onChange={handleOnStaffInput}
                        options={renderOptionDepartmentUpdate(
                           staffList,
                           departmentDetail.name
                        )}
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
                           onClick={handleOnUpdate}
                        >
                           Update
                        </Button>
                     </ButtonGroup>
                  </Center>
               </GridItem>
            </Grid>
            
         </Card>
      </Center>
   );
};

export default UpdateDepartment;
