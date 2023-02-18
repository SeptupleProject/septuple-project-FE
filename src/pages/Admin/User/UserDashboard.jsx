import React from 'react';
import { Grid, GridItem } from '@chakra-ui/react';
import { Input, InputGroup, InputRightElement } from '@chakra-ui/react';
import Icon from '../../../components/Icon/Icon';
import { Button, ButtonGroup } from '@chakra-ui/react';
import {
   Table,
   Thead,
   Tbody,
   Tfoot,
   Tr,
   Th,
   Td,
   TableCaption,
   TableContainer,
} from '@chakra-ui/react';
import { history } from '../../../App';
const UserDashboard = () => {
   return (
      <>
         <div>
            <Grid
               templateColumns='repeat(5, 1fr)'
               gap={4}
            >
               <GridItem
                  className='search-area'
                  colSpan={2}
                  h='10'
                  bg='#EDF2F7'
               >
                  <InputGroup size='md'>
                     <Input
                        pr='4.5rem'
                        type='text'
                        placeholder='Search for users'
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
                  className='create-button'
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
         <div className='user-table-list'>
            <TableContainer className='table-user'>
               <Table size='md'>
                  <Thead>
                     <Tr>
                        <Th>EMAIL</Th>
                        <Th>POSITION</Th>
                        <Th>DEPARTMENT</Th>
                        <Th>ACTION</Th>
                     </Tr>
                  </Thead>
                  <Tbody>
                     <Tr>
                        <Td>selina@fpt.edu.vn</Td>
                        <Td>Staff</Td>
                        <Td>Department 1</Td>
                        <Td>
                           <ul className='row text-center'>
                              <Icon
                                 color='#D7B12A'
                                 fontSize='20px'
                                 content='fa-solid fa-pen-to-square'
                                 paddingRight='15px'
                              />
                              <Icon
                                 color='#FF0000CC'
                                 fontSize='20px'
                                 content='fa-regular fa-trash-can'
                              />
                           </ul>
                        </Td>
                     </Tr>
                     <Tr>
                        <Td>selina@fpt.edu.vn</Td>
                        <Td>Staff</Td>
                        <Td>Department 1</Td>
                        <Td>
                           <ul className='row text-center'>
                              <Icon
                                 color='#D7B12A'
                                 fontSize='20px'
                                 content='fa-solid fa-pen-to-square'
                                 paddingRight='15px'
                              />
                              <Icon
                                 color='#FF0000CC'
                                 fontSize='20px'
                                 content='fa-regular fa-trash-can'
                              />
                           </ul>
                        </Td>
                     </Tr>
                     <Tr>
                        <Td>selina@fpt.edu.vn</Td>
                        <Td>Staff</Td>
                        <Td>Department 1</Td>
                        <Td>
                           <ul className='row text-center'>
                              <Icon
                                 color='#D7B12A'
                                 fontSize='20px'
                                 content='fa-solid fa-pen-to-square'
                                 paddingRight='15px'
                              />
                              <Icon
                                 color='#FF0000CC'
                                 fontSize='20px'
                                 content='fa-regular fa-trash-can'
                              />
                           </ul>
                        </Td>
                     </Tr>
                  </Tbody>
               </Table>
            </TableContainer>
         </div>
      </>
   );
};

export default UserDashboard;
