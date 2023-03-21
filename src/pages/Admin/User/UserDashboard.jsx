import React from 'react';
import { Grid, GridItem } from '@chakra-ui/react';
import { Input, InputGroup, InputRightElement } from '@chakra-ui/react';
import Icon from '../../../components/Icon/Icon';
import { Button } from '@chakra-ui/react';
import { useDisclosure } from '@chakra-ui/react';
import { Center } from '@chakra-ui/react';
import {
   Table,
   Thead,
   Tbody,
   Tr,
   Th,
   Td,
   TableContainer,
} from '@chakra-ui/react';
import {
   Modal,
   ModalOverlay,
   ModalContent,
   ModalHeader,
   ModalFooter,
   ModalBody,
   ModalCloseButton,
} from '@chakra-ui/react';
import { useSelector } from 'react-redux';
import { history } from '../../../App';
import { useDispatch } from 'react-redux';
import { useEffect, useState, useRef } from 'react';
import {
   getListUserAction,
   deleteUserAction,
   getUserDetailAction,
} from '../../../redux/action/accountAction';
import { handleOnSearch } from '../../../settings/common';
import { searchUserByEmailAction } from '../../../redux/action/accountAction';
import { Admin } from '../../../settings/setting';
import Pagination from '../../../components/Pagination/Pagination';
const UserDashboard = (props) => {
   const search = useRef(null);
   const [searchTerm, setSearchTerm] = useState();
   const { isOpen, onOpen, onClose } = useDisclosure();
   const signedInAccount = useSelector(
      (state) => state.accountReducer.signedInAccount
   );
   const listOfUser = useSelector((state) => state.accountReducer.userList);
   const finalRef = React.useRef(null);
   const dispatch = useDispatch();
   const [idToDelete, setIdToDelete] = useState(null);
   useEffect(() => {
      dispatch(getListUserAction());
   }, []);

   const showUserDetail = (id) => {
      dispatch(getUserDetailAction(id));
      history.replace('/user-dashboard/update-user');
   };

   const renderModal = () => {
      return (
         <Modal
            closeOnOverlayClick={true}
            finalFocusRef={finalRef}
            isOpen={isOpen}
            onClose={onClose}
            isCentered
         >
            <ModalOverlay />
            <ModalContent>
               <ModalHeader>Delete user</ModalHeader>
               <ModalCloseButton />
               <ModalBody>
                  Are you sure? You can't undo this action after reward
               </ModalBody>

               <ModalFooter>
                  <Button
                     colorScheme='blue'
                     mr={3}
                     onClick={onClose}
                     variant='ghost'
                  >
                     Cancel
                  </Button>
                  <Button
                     onClick={() => {
                        dispatch(deleteUserAction(idToDelete));
                        setTimeout(() => {
                           onClose();
                           setIdToDelete(null);
                        }, 500);
                     }}
                     colorScheme='red'
                  >
                     Delete
                  </Button>
               </ModalFooter>
            </ModalContent>
         </Modal>
      );
   };

   const renderTableUser = (currentItems) => {
      return (
         <TableContainer
            height={400}
            className='table-user'
         >
            <Table size='md'>
               <Thead>
                  <Tr>
                     <Th>EMAIL</Th>
                     <Th>ROLE</Th>
                     <Th>DEPARTMENT</Th>
                     <Th>ACTION</Th>
                  </Tr>
               </Thead>
               <Tbody>
                  {currentItems.map((item) => {
                     let { id, email, role, departmentName } = item;
                     if (role !== Admin) {
                        return (
                           <Tr key={id}>
                              <Td>{email}</Td>
                              <Td>{role}</Td>
                              <Td>
                                 {departmentName == ''
                                    ? 'Not have yet'
                                    : departmentName}
                              </Td>
                              <Td>
                                 <Center w='30%'>
                                    <div
                                       onClick={() => {
                                          showUserDetail(id);
                                       }}
                                    >
                                       <Icon
                                          color='#D7B12A'
                                          fontSize='20px'
                                          content='fa-solid fa-pen-to-square'
                                          paddingRight='15px'
                                       />
                                    </div>
                                    <div
                                       onClick={() => {
                                          onOpen();
                                          setIdToDelete(id);
                                       }}
                                    >
                                       <Icon
                                          color='#FF0000CC'
                                          fontSize='20px'
                                          content='fa-regular fa-trash-can'
                                       />
                                    </div>
                                 </Center>
                                 {renderModal()}
                              </Td>
                           </Tr>
                        );
                     }
                  })}
               </Tbody>
            </Table>
         </TableContainer>
      );
   };

   return (
      <>
         {signedInAccount.role === Admin ? (
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
                              ref={search}
                              type='text'
                              placeholder='Search for users by email'
                              onChange={(e) => {
                                 setSearchTerm(e.target.value);
                              }}
                              onKeyUp={() => {
                                 handleOnSearch(
                                    search,
                                    searchTerm,
                                    searchUserByEmailAction,
                                    dispatch
                                 );
                              }}
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
                              history.push('/user-dashboard/create-user');
                           }}
                           colorScheme='blue'
                           variant='outline'
                        >
                           <Icon
                              fontSize='20px'
                              content='fa-solid fa-user-plus'
                              paddingRight='10px'
                           />
                           Create a new user
                        </Button>
                     </GridItem>
                  </Grid>
               </div>
               <div className='user-table-list mx-4'>
                  <Pagination
                     data={listOfUser}
                     renderTable={renderTableUser}
                     itemPerPage={6}
                  />
               </div>
            </>
         ) : (
            ''
         )}
      </>
   );
};

export default UserDashboard;
