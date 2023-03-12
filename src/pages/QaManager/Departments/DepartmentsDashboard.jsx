import React from 'react';
import { Grid, GridItem } from '@chakra-ui/react';
import { Input, InputGroup, InputRightElement } from '@chakra-ui/react';
import Icon from '../../../components/Icon/Icon';
import { Button } from '@chakra-ui/react';
import Department from '../../../components/Department/Department';
import { history } from '../../../App';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getAllDepartmentAction } from '../../../redux/action/departmentAction';
import { ToastContainer } from 'react-toastify';
import { getlistUserByRoleAction } from '../../../redux/action/accountAction';
import { QAC, Staff } from '../../../settings/setting';

const DepartmentsDashboard = () => {
   const dispatch = useDispatch();
   const departmentList = useSelector(
      (state) => state.departmentReducer.departmentList
   );
   useEffect(() => {
      dispatch(getAllDepartmentAction());
   }, []);

   useEffect(() => {
      dispatch(getlistUserByRoleAction(Staff));
      dispatch(getlistUserByRoleAction(QAC));
   }, []);
   const renderDepartmentList = () => {
      if (departmentList.length === 0) {
         return (
            <p className='text-center w-100 title-3'>
               No departments available
            </p>
         );
      } else {
         return departmentList.map((item) => {
            let { id, managedBy, name, users } = item;
            return (
               <div
                  key={id}
                  className='col-12 col-md-6 mb-4'
               >
                  <Department
                     text={name}
                     number={users}
                     user={managedBy ? managedBy : 'Unassigned'}
                     id={id}
                  />
               </div>
            );
         });
      }
   };
   return (
      <div>
         <div className='mt-3'>
            <Grid
               templateColumns='repeat(4, 1fr)'
               gap={4}
            >
               <GridItem
                  className='ml-5 mt-4'
                  colSpan={2}
                  h='10'
                  bg='#EDF2F7'
               >
                  <InputGroup
                     size='md'
                     w='550'
                  >
                     <Input
                        type='text'
                        placeholder='Search for departments'
                     />
                     <InputRightElement width='4.5rem'>
                        <Icon
                           fontSize='20px'
                           content='fa-solid fa-magnifying-glass'
                        />
                     </InputRightElement>
                  </InputGroup>
               </GridItem>
               <GridItem
                  className='create-button ml-5 mt-4 mr-5'
                  colStart={5}
                  colEnd={5}
                  h='10'
               >
                  <Button
                     onClick={() => {
                        history.replace(
                           '/department-dashboard/create-department'
                        );
                     }}
                     colorScheme='blue'
                     variant='outline'
                  >
                     <Icon
                        fontSize='20px'
                        content='fa-regular fa-building'
                        paddingRight='10px'
                     />
                     Create a new department
                  </Button>
               </GridItem>
            </Grid>
         </div>

         <div className='container-fluid mt-5 '>
            <div className='row mx-4'>{renderDepartmentList()}</div>
         </div>
         <ToastContainer />
      </div>
   );
};

export default DepartmentsDashboard;
