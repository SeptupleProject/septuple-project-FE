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
   FormControl,
   FormErrorMessage,
   FormHelperText,
   VStack,
   FormLabel,
} from '@chakra-ui/react';
import Icon from '../../../components/Icon/Icon';
import { history } from '../../../App';
import { useSelector, useDispatch } from 'react-redux';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { ToastContainer } from 'react-toastify';
import {
   updateUserAction,
   updateUserPasswordAction,
} from '../../../redux/action/accountAction';
import alert from '../../../settings/alert';
import { renderUserRole, checkMatchedPassword } from '../../../settings/common';
import { QAC, QAM, Staff } from '../../../settings/setting';
const UpdateUser = () => {
   const { isOpen, onOpen, onClose } = useDisclosure();
   const dispatch = useDispatch();
   const userDetail = useSelector((state) => state.accountReducer.userDetail);
   const formik = useFormik({
      enableReinitialize: true,
      initialValues: {
         id: userDetail.id,
         email: userDetail.email,
         role: userDetail.role,
      },
      onSubmit: (values) => {
         if (values.role === '') {
            values.role = userDetail.role;
         }
         dispatch(updateUserAction(values.id, values));
      },
   });
   const formikPassword = useFormik({
      initialValues: {
         id: userDetail.id,
         newPwd: '',
         confirmPwd: '',
      },
      validationSchema: Yup.object({
         newPwd: Yup.string().required('Password cannot be empty'),
         confirmPwd: Yup.string().required('Password cannot be empty'),
      }),
      onSubmit: (values) => {
         let { id, newPwd, confirmPwd } = values;
         if (checkMatchedPassword(newPwd, confirmPwd)) {
            dispatch(updateUserPasswordAction(id, newPwd));
         } else {
            alert.error(`Password does not match`, 'top-right');
         }
      },
   });

   const renderRoleInput = (role) => {
      let roleArray = [QAC, QAM, Staff];
      roleArray = roleArray.filter((item) => {
         return item !== role;
      });
      return roleArray.map((item) => {
         return (
            <option
               key={item}
               value={item}
            >
               {renderUserRole(item)}
            </option>
         );
      });
   };

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
                  isCentered
               >
                  <ModalOverlay />
                  <ModalContent>
                     <ModalHeader>Reset Password</ModalHeader>
                     <ModalCloseButton />
                     <ModalBody className='inputGroup'>
                        <FormControl
                           isRequired
                           // isInvalid
                        >
                           <FormLabel>New Password</FormLabel>
                           <InputGroup>
                              <InputLeftElement
                                 className='mt-1'
                                 children={<Icon content='fa-solid fa-lock' />}
                              />
                              <Input
                                 placeholder='New Password'
                                 name='newPwd'
                                 onChange={formikPassword.handleChange}
                                 onBlur={formikPassword.handleBlur}
                                 size='lg'
                              />
                           </InputGroup>
                        </FormControl>

                        <FormControl>
                           <FormLabel>Confirm Password</FormLabel>
                           <InputGroup>
                              <InputLeftElement
                                 className='mt-1'
                                 children={<Icon content='fa-solid fa-lock' />}
                              />
                              <Input
                                 placeholder='Confirm Password'
                                 name='confirmPwd'
                                 onChange={formikPassword.handleChange}
                                 onBlur={formikPassword.handleBlur}
                                 size='lg'
                              />
                           </InputGroup>
                        </FormControl>
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
                           onClick={formikPassword.handleSubmit}
                           variant='solid'
                           colorScheme='red'
                        >
                           Reset
                        </Button>
                     </ModalFooter>
                  </ModalContent>
               </Modal>

               <Center className='ml-5'>
                  <VStack
                     width={'100%'}
                     spacing={6}
                     className='ml-5'
                  >
                     <FormControl className='ml-3'>
                        <FormLabel>Email</FormLabel>
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
                              name='email'
                              size='lg'
                              placeholder={
                                 !formik.initialValues.email
                                    ? 'No value'
                                    : formik.initialValues.email
                              }
                              isDisabled
                              variant='filled'
                           />
                        </InputGroup>
                     </FormControl>

                     <FormControl className='ml-3'>
                        <FormLabel>Position</FormLabel>
                        <Select
                           onChange={formik.handleChange}
                           name='role'
                           size='lg'
                           placeholder={renderUserRole(
                              formik.initialValues.role
                           )}
                           className='updateInput'
                           width={'85%'}
                        >
                           {renderRoleInput(formik.initialValues.role)}
                        </Select>
                     </FormControl>
                  </VStack>
               </Center>

               <ButtonGroup className='actionBtn'>
                  <Button
                     variant='ghost'
                     colorScheme='red'
                     onClick={() => {
                        history.replace('/user-dashboard');
                     }}
                  >
                     Cancel
                  </Button>
                  <Button
                     onClick={formik.handleSubmit}
                     variant='solid'
                     colorScheme='blue'
                  >
                     Update
                  </Button>
               </ButtonGroup>
            </Card>
         </Center>
         <ToastContainer />
      </>
   );
};

export default UpdateUser;
