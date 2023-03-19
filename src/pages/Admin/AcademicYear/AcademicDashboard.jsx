import React from 'react';
import AcademicYear from '../../../components/AcademicYear/AcademicYear';
import { Grid, GridItem } from '@chakra-ui/react';
import { Input, InputGroup, InputRightElement } from '@chakra-ui/react';
import Icon from '../../../components/Icon/Icon';
import { Button } from '@chakra-ui/react';
import { history } from '../../../App';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getAllAcademicYearAction } from '../../../redux/action/academicYearAction';
import { Admin } from '../../../settings/setting';
import Pagination from '../../../components/Pagination/Pagination';
const AcademicDashboard = () => {
   const dispatch = useDispatch();
   const listAcademicYear = useSelector(
      (state) => state.academicYearReducer.listAcademicYear
   );
   const signedInAccount = useSelector(
      (state) => state.accountReducer.signedInAccount
   );
   useEffect(() => {
      dispatch(getAllAcademicYearAction());
   }, []);

   const renderAcademicYear = (currentItems) => {
      return currentItems.map((item) => {
         return (
            <div
               key={item.id}
               className='col-12 col-md-6 mb-4'
            >
               <AcademicYear item={item} />
            </div>
         );
      });
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
                        placeholder='Search for academic year'
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
                  className={
                     signedInAccount.role === Admin
                        ? 'create-button ml-5 mt-4 mr-5'
                        : 'create-button ml-5 mt-4 mr-5 disappear'
                  }
                  colStart={5}
                  colEnd={5}
                  h='10'
               >
                  <Button
                     onClick={() => {
                        history.replace('/academic-dashboard/create-academic');
                     }}
                     colorScheme='blue'
                     variant='outline'
                  >
                     <Icon
                        fontSize='20px'
                        content='fa-regular fa-clock'
                        paddingRight='10px'
                     />
                     Create a new academic year
                  </Button>
               </GridItem>
            </Grid>
         </div>

         <div className='container-fluid mt-5'>
            <div className='row mx-3'>
               <Pagination
                  data={listAcademicYear}
                  renderTable={renderAcademicYear}
                  itemPerPage={4}
               />
            </div>
         </div>
      </div>
   );
};

export default AcademicDashboard;
