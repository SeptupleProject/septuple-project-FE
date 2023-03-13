import React from 'react';
import Category from '../../../components/Category/Category';
import {
   Grid,
   GridItem,
   InputGroup,
   Input,
   InputRightElement,
   InputLeftElement,
   Button,
   useDisclosure,
   Modal,
   ModalOverlay,
   ModalContent,
   ModalHeader,
   ModalFooter,
   ModalBody,
   ModalCloseButton,
   FormControl,
} from '@chakra-ui/react';
import Icon from '../../../components/Icon/Icon';
import * as Yup from 'yup';
import { useFormik } from 'formik';
import { useSelector, useDispatch } from 'react-redux';
import {
   createNewCategoryAction,
   getAllCategoryAction,
} from '../../../redux/action/categoryAction';
import alert from '../../../settings/alert';
import { useEffect, useRef } from 'react';
import { ToastContainer } from 'react-toastify';
const CategoriesDashboard = () => {
   const {
      isOpen: createIsOpen,
      onOpen: createOnOpen,
      onClose: createOnClose,
   } = useDisclosure();
   useEffect(() => {
      dispatch(getAllCategoryAction());
   }, []);
   const name = useRef(null);
   let categoryList = useSelector(
      (state) => state.categoryReducer.categoryList
   );
   const dispatch = useDispatch();
   const formik = useFormik({
      initialValues: {
         name: '',
      },
      validationSchema: Yup.object({
         name: Yup.string()
            .required("Category name can't be empty")
            .max(30, 'Name should less than 30 letters'),
      }),
      onSubmit: (values) => {
         dispatch(createNewCategoryAction(values));
         setTimeout(() => {
            createOnClose();
         }, 700);
      },
   });
   const handleOnSubmit = () => {
      if (formik.errors.name) {
         alert.warning(formik.errors.name, 'top-right', null, 'dark');
      } else if (name.current.value === '') {
         alert.warning('Category name is empty', 'top-right', null, 'dark');
      } else {
         formik.handleSubmit();
      }
   };
   const renderModal = () => {
      return (
         <Modal
            isOpen={createIsOpen}
            onClose={createOnClose}
            isCentered
         >
            <ModalOverlay />
            <ModalContent>
               <ModalHeader>Create a new category</ModalHeader>
               <ModalCloseButton />
               <ModalBody>
                  <FormControl isRequired>
                     <InputGroup>
                        <InputLeftElement
                           children={<Icon content='fa-solid fa-pen-fancy' />}
                        />
                        <Input
                           ref={name}
                           name='name'
                           onBlur={formik.handleBlur}
                           onChange={formik.handleChange}
                           placeholder='Category Name'
                        />
                     </InputGroup>
                  </FormControl>
               </ModalBody>

               <ModalFooter>
                  <Button
                     colorScheme='red'
                     variant='ghost'
                     mr={3}
                     onClick={createOnClose}
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
               </ModalFooter>
            </ModalContent>
         </Modal>
      );
   };
   const renderCategoryList = () => {
      if (categoryList.length > 0) {
         return categoryList.map((item) => {
            return (
               <div
                  key={item.id}
                  className='col-12 col-md-6 mb-4'
               >
                  <Category item={item} />
               </div>
            );
         });
      } else {
         return (
            <p className='title-1 text-center title-3 w-100'>
               No category is available
            </p>
         );
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
                        placeholder='Search for categories'
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
                     colorScheme='blue'
                     variant='outline'
                     onClick={createOnOpen}
                  >
                     <Icon
                        fontSize='20px'
                        content='fa-regular fa-square-plus'
                        paddingRight='10px'
                     />
                     Create a new category
                  </Button>
               </GridItem>
            </Grid>
         </div>
         {renderModal()}
         <div className='container-fluid mt-5'>
            <div className='row mx-3'>{renderCategoryList()}</div>
         </div>
         <ToastContainer />
      </div>
   );
};

export default CategoriesDashboard;
