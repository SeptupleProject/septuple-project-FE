import React from 'react';
import {
   Center,
   Card,
   Text,
   Input,
   InputGroup,
   InputLeftElement,
   Select,
   Button,
   ButtonGroup,
   Modal,
   ModalOverlay,
   ModalContent,
   ModalHeader,
   ModalFooter,
   ModalBody,
   ModalCloseButton,
   useDisclosure,
} from '@chakra-ui/react';
import Icon from '../../../components/Icon/Icon';
import '../../../assets/scss/main.scss';

const UpdateUser = () => {
   const { isOpen, onOpen, onClose } = useDisclosure();

   return (
      <>
         <Center>
            <Card className='cardForm'>
               <Text
                  fontSize='4xl'
                  className='heading'
                  colorScheme='blue'
               >
                  Update user's information
               </Text>
               <span className='resetPass'>
                  <Button
                     onClick={onOpen}
                     variant='outline'
                     colorScheme='blue'
                     size='md'
                     rightIcon={<Icon content='fa-solid fa-key' />}
                  >
                     Reset Password
                  </Button>
               </span>

               <Modal
                  isOpen={isOpen}
                  onClose={onClose}
               >
                  <ModalOverlay />
                  <ModalContent>
                     <ModalHeader>Reset Password</ModalHeader>
                     <ModalCloseButton />
                     <ModalBody className='inputGroup'>
                        <InputGroup>
                           <InputLeftElement
                              className='mt-1'
                              children={<Icon content='fa-solid fa-lock' />}
                           />
                           <Input
                              placeholder='New Password'
                              size='lg'
                           />
                        </InputGroup>

                        <InputGroup>
                           <InputLeftElement
                              className='mt-1'
                              children={<Icon content='fa-solid fa-lock' />}
                           />
                           <Input
                              placeholder='Confirm Password'
                              size='lg'
                           />
                        </InputGroup>
                     </ModalBody>

                     <ModalFooter>
                        <Button
                           colorScheme='blue'
                           variant='ghost'
                           onClick={onClose}
                        >
                           Cancel
                        </Button>
                        <Button
                           variant='solid'
                           colorScheme='red'
                        >
                           Reset
                        </Button>
                     </ModalFooter>
                  </ModalContent>
               </Modal>

               <div className='formBody'>
                  <InputGroup
                     className='updateInput'
                     width={'86%'}
                  >
                     <InputLeftElement
                        children={
                           <div className='mt-2'>
                              <Icon
                                 content='fa-regular fa-envelope'
                                 fontSize='20px'
                              />
                           </div>
                        }
                     />
                     <Input
                        size='lg'
                        placeholder='segun.adebayo@domain.com'
                        isDisabled
                        variant='filled'
                     />
                  </InputGroup>

                  <Select
                     size='lg'
                     placeholder='Staff'
                     className='updateInput'
                     width={'86%'}
                  >
                     <option value='coordinator'>QA Coordinator</option>
                     <option value='manager'>QA Manager</option>
                  </Select>
               </div>

               <ButtonGroup className='actionBtn'>
                  <Button
                     variant='ghost'
                     colorScheme='red'
                  >
                     Cancel
                  </Button>
                  <Button
                     variant='solid'
                     colorScheme='blue'
                  >
                     Update
                  </Button>
               </ButtonGroup>
            </Card>
         </Center>
      </>
   );
};

export default UpdateUser;
