import React from 'react';
import Icon from '../../components/Icon/Icon';
import { Grid, GridItem } from '@chakra-ui/react';
import { Input, InputGroup, InputRightElement } from '@chakra-ui/react';
import {
   Table,
   Thead,
   Tbody,
   Tr,
   Th,
   Td,
   TableContainer,
} from '@chakra-ui/react';
import { Staff } from '../../settings/setting';
import { useSelector, useDispatch } from 'react-redux';
import { getlistUserByRoleAction } from '../../redux/action/accountAction';
import { useEffect } from 'react';
import { getUserDetailAction } from '../../redux/action/accountAction';
import { ToastContainer } from 'react-toastify';
import Encouragement from '../../components/Encouragement/Encouragement';
const StaffManagement = () => {
   const staffList = useSelector((state) => state.accountReducer.staffList);
   const signedInAccount = useSelector(
      (state) => state.accountReducer.signedInAccount
   );
   const userDetail = useSelector((state) => state.accountReducer.userDetail);
   const dispatch = useDispatch();
   useEffect(() => {
      dispatch(getUserDetailAction(signedInAccount.id));
      dispatch(getlistUserByRoleAction(Staff));
   }, []);
   const renderUserList = () => {
      if (staffList.length > 0 && userDetail.email !== '') {
         return staffList.map((item) => {
            if (item.departmentName === userDetail.department.name) {
               return (
                  <Tr key={item.id}>
                     <Td className='text-center'>{item.email}</Td>
                     <Td className='text-center'>
                        {item.ideas ? item.email : 0}
                     </Td>
                     <Td className='text-center'>
                        {item.comments ? item.comments : 0}
                     </Td>
                     <Td>
                        <Encouragement email={item.email} />
                     </Td>
                  </Tr>
               );
            }
         });
      }
   };

   return (
      <>
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
                        placeholder='Search for staff'
                     />
                     <InputRightElement width='4.5rem'>
                        <Icon
                           fontSize='20px'
                           content='fa-solid fa-magnifying-glass'
                        />
                     </InputRightElement>
                  </InputGroup>
               </GridItem>
            </Grid>
         </div>
         <div className='user-table-list'>
            <TableContainer className='table-user'>
               {staffList.length > 0 ? (
                  <Table size='md'>
                     <Thead>
                        <Tr>
                           <Th className='text-center'>Email</Th>
                           <Th className='text-center'>Ideas Posted</Th>
                           <Th className='text-center'>Comments Made</Th>
                           <Th className='text-center'>Send Encouragement</Th>
                        </Tr>
                     </Thead>
                     <Tbody>{renderUserList()}</Tbody>
                  </Table>
               ) : (
                  <>
                     <span className='text-center d-block title-3 my-5'>
                        No staff available
                     </span>
                  </>
               )}
            </TableContainer>
          
         </div>
      </>
   );
};

export default StaffManagement;
