import React from 'react';
import Icon from '../Icon/Icon';
import {
   Text,
   Input,
   Alert,
   Switch,
   FormControl,
   Textarea,
   Button,
   Select,
} from '@chakra-ui/react';
import { useState } from 'react';
import { useFormik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { createNewIdeaAction } from '../../redux/action/ideaAction';
import { toast, ToastContainer } from 'react-toastify';
import { useRef } from 'react';
import * as Yup from 'yup';
const PostIdea = () => {
   const [lock, setLock] = useState(false);
   const [post, setPost] = useState(false);
   const [uploadImg, setUploadImg] = useState(null);
   const titleInput = useRef(null);
   const contentInput = useRef(null);
   const categoryInput = useRef(null);
   const dispatch = useDispatch();
   const signedInAccount = useSelector(
      (state) => state.accountReducer.signedInAccount
   );
   const listOfCategory = useSelector(
      (state) => state.categoriesReducer.categoriesList
   );
   const formik = useFormik({
      initialValues: {
         title: '',
         content: '',
         views: 0,
         image: null,
         isAnonymous: false,
         createdBy: signedInAccount.username,
         category: '',
      },
      validationSchema: Yup.object({
         title: Yup.string()
            .required('Write something, dude !')
            .max(50, 'Title cannot be longer than 50 letters'),
         content: Yup.string().required('Share you idea !'),
         category: Yup.string().required('What is your idea about ?'),
      }),
      onSubmit: (values) => {
         setPost(true);
         setTimeout(() => {
            setUploadImg(null);
            setPost(false);
         }, 700);
         dispatch(createNewIdeaAction(values));
         titleInput.current.value = '';
         contentInput.current.value = '';
         categoryInput.current.value = '';
      },
   });
   const handleOnSwitch = (e) => {
      let { name, checked } = e.target;
      formik.setFieldValue(name, checked);
      setLock(!lock);
   };
   const handleOnClick = () => {
      if (titleInput.current.value == '' || contentInput.current.value == '') {
         toast.warn('Come on, fill in something!', {
            position: 'top-center',
            autoClose: 1000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: true,
            progress: undefined,
            theme: 'dark',
         });
      }
      formik.handleSubmit();
      
   };
   const handleUploadImage = (e) => {
      let file = e.target.files[0];
      if (
         file.type === 'image/jpeg' ||
         file.type === 'image/jpg' ||
         file.type === 'image/png'
      ) {
         let reader = new FileReader();
         reader.readAsDataURL(file);
         reader.onload = (event) => {
            setUploadImg(event.target.result);
            formik.setFieldValue('image', event.target.result);
         };
         // formik.setFieldValue('image', file);
      }
   };
   return (
      <FormControl
         isInvalid={(formik.errors.title, formik.errors.content)}
         className='row post-idea mx-0'
      >
         <div className='col-10 d-flex px-0 mx-0'>
            <div
               style={{ width: '10%' }}
               className='post-idea-avatar text-center'
            >
               <Icon
                  color='#2B6CB0'
                  content='fa-regular fa-circle-user'
                  fontSize='40px'
               />
            </div>
            <div
               style={{ width: '90%' }}
               className='post-idea-input'
            >
               <Input
                  ref={titleInput}
                  name='title'
                  placeholder='Title'
                  className='w-100'
                  type='text'
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
               />
               {formik.errors.title ? (
                  <Text
                     fontSize='md'
                     className='mt-1 text-danger'
                  >
                     {formik.errors.title}
                  </Text>
               ) : null}
               <Textarea
                  ref={contentInput}
                  name='content'
                  height={150}
                  className='mt-3'
                  placeholder='What is your great idea today ?'
                  type='text'
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
               ></Textarea>
               {formik.errors.content ? (
                  <Text
                     fontSize='md'
                     className='mt-1 text-danger'
                  >
                     {formik.errors.content}
                  </Text>
               ) : null}

               <div className='w-100 mt-3 font-poppin'>
                  <Select
                     color='#2B6CB0'
                     variant='filled'
                     size='md'
                     placeholder='Choose category'
                     onChange={formik.handleChange} 
                     name='category'
                     ref={categoryInput}
                     isRequired
                  >
                     {listOfCategory.map((item) => {
                        return (
                           <option
                              key={item.id}
                              value={item.name}
                           >
                              {item.name}
                           </option>
                        );
                     })}
                  </Select>
                  {formik.errors.category ? (
                     <Text
                        fontSize='sm'
                        className='mt-1 text-danger'
                     >
                        {formik.errors.category}
                     </Text>
                  ) : null}
               </div>

               <div className='w-100 d-flex justify-content-end'>
                  <Button
                     style={{ width: 'fit-content' }}
                     className={post ? 'mt-4 button-post' : 'mt-3'}
                     colorScheme='facebook'
                     variant='outline'
                     onClick={handleOnClick}
                  >
                     <Icon
                        content='fa-solid fa-paper-plane'
                        fontSize='20px'
                     />
                  </Button>
               </div>
            </div>
         </div>
         <div className='col-2 px-0 mx-0 text-center'>
            <div className='container w-75'>
               <label
                  className='button-upload-img'
                  htmlFor='loadImgInput'
               >
                  <div className='d-flex align-middle'>
                     <Icon content='fa-solid fa-folder-plus' />
                     <p className='ml-1'>Photos</p>
                  </div>
               </label>
               <input
                  onChange={handleUploadImage}
                  accept='image/png,image/jpg,image/jpeg'
                  className='disapear'
                  id='loadImgInput'
                  type='file'
               />
               {uploadImg == null ? (
                  <Alert
                     style={{ borderRadius: '8px' }}
                     status='success'
                     variant='top-accent'
                     className='d-block text-left mt-3'
                  >
                     <div>
                        <b>Photo</b>
                     </div>
                     <div>
                        <span>photo.png</span>
                     </div>
                  </Alert>
               ) : (
                  <img
                     className='img-fluid'
                     src={uploadImg}
                  />
               )}
            </div>
            <div className='my-3'>
               <b>Post Anonymously ?</b>
            </div>
            <div className='d-flex justify-content-center align-middle'>
               <Switch
                  name='isAnonymous'
                  size='sm'
                  className='p-0 mt-1 mr-3'
                  onChange={(e) => {
                     handleOnSwitch(e);
                  }}
               />

               <Icon
                  content={lock ? 'fa-solid fa-lock' : 'fa-solid fa-lock-open'}
                  fontSize='15px'
               />
            </div>
         </div>
      </FormControl>
   );
};

export default PostIdea;
