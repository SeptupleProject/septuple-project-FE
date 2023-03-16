import React from 'react';
import {
   Heading,
   Text,
   Badge,
   Card,
   HStack,
   Modal,
   ModalContent,
   ModalBody,
   ModalHeader,
   ModalFooter,
   ModalCloseButton,
   useDisclosure,
   ModalOverlay,
   Button,
   Input,
   InputGroup,
   InputLeftElement,
   IconButton,
   FormControl,
} from '@chakra-ui/react';
import Icon from '../Icon/Icon';
import * as Yup from 'yup';
import { useFormik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import {
   deleteCategoryAction,
   updateCategoryAction,
} from '../../redux/action/categoryAction';
import alert from '../../settings/alert';
const Category = (props) => {
   let { id, name, numOfIdeas } = props.item;
   const {
      isOpen: updateIsOpen,
      onOpen: updateOnOpen,
      onClose: updateOnClose,
   } = useDisclosure();
   const {
      isOpen: deleteIsOpen,
      onOpen: deleteOnOpen,
      onClose: deleteOnClose,
   } = useDisclosure();
   const dispatch = useDispatch();
   const formik = useFormik({
      initialValues: {
         id: id,
         name: name,
      },
      validationSchema: Yup.object({
         name: Yup.string().max(30, 'Name should less than 30 letters'),
      }),
      onSubmit: (values) => {
         dispatch(updateCategoryAction(id, values));
         setTimeout(() => {
            updateOnClose();
         }, 800);
      },
   });
   const handleOnDelete = () => {
      dispatch(deleteCategoryAction(id));
      setTimeout(() => {
         deleteOnClose();
      }, 300);
   };
   const handleOnUpdate = () => {
      if (Object.keys(formik.errors).length > 0) {
         alert.warning(formik.errors.name, 'top-right', null, 'dark');
      } else {
         formik.handleSubmit();
      }
   };
   return (
      <Card variant='elevated'>
         <div className='px-4 py-3'>
            <div className='d-flex align-middle justify-content-between'>
               <Heading fontSize={27}>{name}</Heading>
               <div className='d-flex'>
                  <div className='mr-3'>
                     <IconButton
                        colorScheme='blue'
                        variant='ghost'
                        icon={<Icon content='fa-solid fa-pen-to-square' />}
                        onClick={updateOnOpen}
                     />
                  </div>
                  <Modal
                     isOpen={updateIsOpen}
                     onClose={updateOnClose}
                     isCentered
                  >
                     <ModalOverlay />
                     <ModalContent>
                        <ModalHeader>Update {name}</ModalHeader>
                        <ModalCloseButton />
                        <ModalBody>
                           <FormControl>
                              <InputGroup>
                                 <InputLeftElement
                                    children={
                                       <Icon content='fa-solid fa-pen-fancy' />
                                    }
                                 />
                                 <Input
                                    name='name'
                                    onChange={formik.handleChange}
                                    placeholder={name}
                                 />
                              </InputGroup>
                           </FormControl>
                        </ModalBody>

                        <ModalFooter>
                           <Button
                              colorScheme='red'
                              variant='ghost'
                              mr={3}
                              onClick={updateOnClose}
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
                        </ModalFooter>
                     </ModalContent>
                  </Modal>

                  <IconButton
                     colorScheme='red'
                     variant='ghost'
                     icon={<Icon content='fa-regular fa-trash-can' />}
                     onClick={deleteOnOpen}
                  />

                  <Modal
                     isOpen={deleteIsOpen}
                     onClose={deleteOnClose}
                     isCentered
                  >
                     <ModalOverlay />
                     <ModalContent>
                        <ModalHeader>Delete {name}</ModalHeader>
                        <ModalCloseButton />
                        <ModalBody>
                           <Text
                              fontSize='md'
                              className='deleteNotice'
                           >
                              Are you sure? You can't undo this action
                              afterwards.
                           </Text>
                        </ModalBody>

                        <ModalFooter>
                           <Button
                              colorScheme='blue'
                              variant='ghost'
                              mr={3}
                              onClick={deleteOnClose}
                           >
                              Cancel
                           </Button>
                           <Button
                              variant='solid'
                              colorScheme='red'
                              onClick={handleOnDelete}
                           >
                              Delete
                           </Button>
                        </ModalFooter>
                     </ModalContent>
                  </Modal>
               </div>
            </div>

            <div className='d-flex mt-4 justify-content-between w-100'>
               <HStack spacing={20}>
                  <Badge
                     variant='subtle'
                     colorScheme={numOfIdeas > 0 ? 'blue' : 'red'}
                  >
                     {numOfIdeas > 0 ? 'USING' : 'NOT IN USE'}
                  </Badge>

                  <HStack spacing={2}>
                     <Icon
                        fontSize='15px'
                        color='#2B6CB0'
                        content='fa-regular fa-lightbulb'
                     />
                     <Text
                        className='numOfIdeaPost'
                        fontSize='xs'
                     >
                        {numOfIdeas} ideas posted
                     </Text>
                  </HStack>
               </HStack>
            </div>
         </div>
      </Card>
   );
};

export default Category;
